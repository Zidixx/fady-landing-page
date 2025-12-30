import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

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

    // Configuration SMTP
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = Number(process.env.SMTP_PORT || 465);
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const contactTo = process.env.CONTACT_TO;

    if (!smtpHost || !smtpUser || !smtpPass || !contactTo) {
      console.error('Variables SMTP manquantes');
      return NextResponse.json(
        { ok: false, error: 'Configuration serveur manquante' },
        { status: 500 }
      );
    }

    // Création du transporteur
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    // Préparation de l'email
    const mailOptions = {
      from: smtpUser,
      to: contactTo,
      replyTo: email,
      subject: `[FADY] Nouveau message - ${name || 'Sans nom'}`,
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

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('Erreur lors de l\'envoi de l\'email:', error);
    return NextResponse.json(
      { ok: false, error: 'Erreur lors de l\'envoi du message' },
      { status: 500 }
    );
  }
}

