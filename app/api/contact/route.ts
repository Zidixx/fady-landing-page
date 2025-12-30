import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Forcer le runtime Node.js pour Nodemailer (important sur Vercel)
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, message } = body;

    // Validation
    if (!email || !message) {
      return NextResponse.json(
        { ok: false, error: 'Email et message sont requis' },
        { status: 400 }
      );
    }

    // Validation basique de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { ok: false, error: 'Format d\'email invalide' },
        { status: 400 }
      );
    }

    // Configuration SMTP - Lecture des variables d'environnement
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO || smtpUser; // Fallback sur SMTP_USER si CONTACT_TO n'est pas défini

    // Vérification des variables requises et liste des variables manquantes
    const missingVars: string[] = [];
    if (!smtpHost) missingVars.push('SMTP_HOST');
    if (!smtpUser) missingVars.push('SMTP_USER');
    if (!smtpPass) missingVars.push('SMTP_PASS');
    
    if (missingVars.length > 0) {
      console.error('Variables SMTP manquantes:', missingVars);
      return NextResponse.json(
        { 
          ok: false, 
          error: `Configuration serveur manquante. Variables manquantes: ${missingVars.join(', ')}` 
        },
        { status: 500 }
      );
    }

    // Création du transporteur Nodemailer avec configuration IONOS
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465, // TLS pour le port 465
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        // Configuration TLS pour IONOS
        rejectUnauthorized: false, // Accepter les certificats auto-signés si nécessaire
      },
    });

    // Préparation de l'email
    const mailOptions = {
      from: smtpUser,
      to: contactTo,
      replyTo: email,
      subject: `[FADY] Nouveau message de contact`,
      text: `
Nouveau message depuis le formulaire de contact FADY

Nom: ${name || 'Non renseigné'}
Email: ${email}

Message:
${message}
      `,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #A01ED9;">Nouveau message depuis le formulaire de contact FADY</h2>
          <div style="background: #f5f5f5; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Nom:</strong> ${name || 'Non renseigné'}</p>
            <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          </div>
          <div style="background: #ffffff; padding: 20px; border-left: 4px solid #A01ED9; margin: 20px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        </div>
      `,
    };

    // Envoi de l'email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (error: any) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    
    // Message d'erreur plus détaillé pour le debug
    const errorMessage = error?.message || 'Erreur lors de l\'envoi du message';
    
    return NextResponse.json(
      { ok: false, error: errorMessage },
      { status: 500 }
    );
  }
}

