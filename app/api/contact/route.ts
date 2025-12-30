import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Forcer le runtime Node.js pour Nodemailer (important sur Vercel)
export const runtime = 'nodejs';

export async function POST(request: NextRequest) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] CONTACT API HIT`);

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
    const contactTo = process.env.CONTACT_TO || smtpUser;

    // Logs des variables d'environnement (booléens uniquement)
    console.log(`[${timestamp}] Env vars check:`);
    console.log(`  SMTP_HOST: ${!!smtpHost}`);
    console.log(`  SMTP_PORT: ${!!process.env.SMTP_PORT} (value: ${smtpPort})`);
    console.log(`  SMTP_USER: ${!!smtpUser}`);
    console.log(`  SMTP_PASS: ${!!smtpPass}`);
    console.log(`  CONTACT_TO: ${!!process.env.CONTACT_TO}`);

    // Vérification des variables requises
    const missingVars: string[] = [];
    if (!smtpHost) missingVars.push('SMTP_HOST');
    if (!smtpUser) missingVars.push('SMTP_USER');
    if (!smtpPass) missingVars.push('SMTP_PASS');
    
    if (missingVars.length > 0) {
      console.error(`[${timestamp}] Variables SMTP manquantes:`, missingVars);
      return NextResponse.json(
        { 
          ok: false, 
          error: `Configuration serveur manquante. Variables manquantes: ${missingVars.join(', ')}` 
        },
        { status: 500 }
      );
    }

    // Détermination du destinataire final
    const finalRecipient = contactTo || smtpUser;
    console.log(`[${timestamp}] Destinataire final: ${finalRecipient}`);

    // Configuration du port (465 secure, 587 avec TLS)
    const isSecure = smtpPort === 465;
    const useTLS = smtpPort === 587;

    // Création du transporteur Nodemailer avec configuration IONOS
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      tls: {
        rejectUnauthorized: false,
        ...(useTLS && { requireTLS: true }),
      },
    });

    // Vérification de la connexion SMTP
    console.log(`[${timestamp}] Vérification de la connexion SMTP...`);
    try {
      await transporter.verify();
      console.log(`[${timestamp}] ✅ Connexion SMTP vérifiée avec succès`);
    } catch (verifyError: any) {
      console.error(`[${timestamp}] ❌ Erreur de vérification SMTP:`, verifyError.stack || verifyError.message);
      return NextResponse.json(
        { 
          ok: false, 
          error: `Erreur de connexion SMTP: ${verifyError.message || 'Connexion impossible'}` 
        },
        { status: 500 }
      );
    }

    // Préparation de l'email
    const mailOptions = {
      from: `"FADY" <${smtpUser}>`,
      to: finalRecipient,
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
    console.log(`[${timestamp}] Envoi de l'email...`);
    const info = await transporter.sendMail(mailOptions);

    // Logs détaillés du résultat
    console.log(`[${timestamp}] Résultat sendMail:`);
    console.log(`  messageId: ${info.messageId || 'N/A'}`);
    console.log(`  accepted: ${JSON.stringify(info.accepted)}`);
    console.log(`  rejected: ${JSON.stringify(info.rejected)}`);
    console.log(`  response: ${info.response || 'N/A'}`);

    // Vérification que l'email a bien été accepté
    if (!info.accepted || info.accepted.length === 0) {
      const errorMsg = `Email rejeté par le serveur. Rejected: ${JSON.stringify(info.rejected)}`;
      console.error(`[${timestamp}] ❌ ${errorMsg}`);
      return NextResponse.json(
        { 
          ok: false, 
          error: 'L\'email n\'a pas pu être envoyé. Veuillez réessayer plus tard.' 
        },
        { status: 500 }
      );
    }

    console.log(`[${timestamp}] ✅ Email envoyé avec succès à: ${info.accepted.join(', ')}`);
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
