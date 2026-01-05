import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Forcer le runtime Node.js pour Resend (important sur Vercel)
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] CONTACT API HIT`);

  try {
    const body = await request.json();
    const { name, email, message, company } = body;

    // Honeypot anti-spam : si le champ "company" est rempli, c'est un bot
    if (company && company.trim() !== '') {
      console.log(`[${timestamp}] 🍯 Honeypot détecté - requête ignorée (bot détecté)`);
      // Retourner 200 pour ne pas révéler qu'on a détecté un bot
      return NextResponse.json({ ok: true }, { status: 200 });
    }

    // Validation des champs requis
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Tous les champs sont requis' },
        { status: 400 }
      );
    }

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Limitation de la taille du message (2000 caractères)
    if (message.length > 2000) {
      return NextResponse.json(
        { ok: false, error: 'Le message ne peut pas dépasser 2000 caractères' },
        { status: 400 }
      );
    }

    // Vérification de la clé API Resend
    const resendApiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!resendApiKey) {
      console.error(`[${timestamp}] ❌ RESEND_API_KEY manquante`);
      return NextResponse.json(
        { ok: false, error: 'Configuration serveur manquante (RESEND_API_KEY)' },
        { status: 500 }
      );
    }

    if (!contactEmail) {
      console.error(`[${timestamp}] ❌ CONTACT_EMAIL manquante`);
      return NextResponse.json(
        { ok: false, error: 'Configuration serveur manquante (CONTACT_EMAIL)' },
        { status: 500 }
      );
    }

    // Initialisation de Resend
    const resend = new Resend(resendApiKey);

    // Préparation de l'email
    const emailSubject = `[FADY] Nouveau message de contact de ${name}`;
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #A01ED9;">Nouveau message depuis le formulaire de contact FADY</h2>
        <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nom:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        </div>
        <div style="background: #ffffff; padding: 20px; border-left: 4px solid #A01ED9; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
        </div>
      </div>
    `;

    const emailText = `
Nouveau message depuis le formulaire de contact FADY

Nom: ${name}
Email: ${email}

Message:
${message}
    `;

    // Envoi de l'email via Resend
    console.log(`[${timestamp}] Envoi de l'email via Resend...`);
    
    // Utiliser un domaine vérifié si disponible, sinon utiliser onboarding@resend.dev (pour les tests)
    // Pour utiliser un domaine vérifié, ajouter RESEND_FROM_EMAIL dans les variables d'environnement Vercel
    // Exemple: RESEND_FROM_EMAIL="contact@fady-app.fr" (le domaine doit être vérifié dans Resend)
    const fromEmail = process.env.RESEND_FROM_EMAIL || 'FADY Contact <onboarding@resend.dev>';
    
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: contactEmail,
      replyTo: email,
      subject: emailSubject,
      html: emailHtml,
      text: emailText,
    });

    if (error) {
      console.error(`[${timestamp}] ❌ Erreur Resend:`, error);
      return NextResponse.json(
        { ok: false, error: 'Erreur lors de l\'envoi de l\'email. Veuillez réessayer plus tard.' },
        { status: 500 }
      );
    }

    console.log(`[${timestamp}] ✅ Email envoyé avec succès via Resend. ID: ${data?.id || 'N/A'}`);
    return NextResponse.json({ ok: true }, { status: 200 });

  } catch (error: any) {
    console.error(`[${timestamp}] ❌ Erreur lors de l'envoi de l'email:`);
    console.error(`  Stack: ${error.stack || 'N/A'}`);
    console.error(`  Message: ${error.message || 'Erreur inconnue'}`);
    
    const errorMessage = error?.message || 'Erreur lors de l\'envoi du message';
    
    return NextResponse.json(
      { ok: false, error: errorMessage },
      { status: 500 }
    );
  }
}
