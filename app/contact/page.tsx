"use client";

import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null; message: string }>({ type: null, message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    const name = formData.get('name') as string;
    const email = formData.get('email') as string;
    const message = formData.get('message') as string;

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await response.json();

      if (response.ok && data.ok) {
        setStatus({ type: 'success', message: 'Message envoyé ✅' });
        form.reset();
      } else {
        setStatus({ type: 'error', message: data.error || 'Erreur, réessaie' });
      }
    } catch (error) {
      setStatus({ type: 'error', message: 'Une erreur est survenue. Veuillez réessayer.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden min-h-screen" style={{
      background: 'linear-gradient(to bottom, #F8F3FF 0%, #EFE2FF 50%, #FFFFFF 100%)',
      marginTop: '-80px',
      paddingTop: '180px',
    }}>
      {/* Blobs décoratifs en arrière-plan */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(160, 30, 217, 0.4) 0%, transparent 70%)',
        }}></div>
        <div className="absolute bottom-20 right-10 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl" style={{
          background: 'radial-gradient(circle, rgba(188, 49, 252, 0.3) 0%, transparent 70%)',
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20 md:pt-24 lg:pt-28 pb-20 md:pb-24 lg:pb-28">
        <div className="max-w-[1100px] mx-auto">
          {/* Grande Card Premium */}
          <div className="relative rounded-[32px] p-8 md:p-12 lg:p-16 overflow-hidden" style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(250, 245, 255, 0.95) 100%)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(160, 30, 217, 0.2)',
            boxShadow: '0 20px 60px rgba(91, 24, 153, 0.15), 0 0 40px rgba(188, 49, 252, 0.1)',
          }}>
            {/* Motif discret dans le fond */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.06]">
              <div className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full" style={{
                background: 'radial-gradient(circle, rgba(160, 30, 217, 0.3) 0%, transparent 70%)',
                transform: 'translate(30%, -30%)',
              }}></div>
              <div className="absolute bottom-0 left-0 w-[250px] h-[250px] rounded-full" style={{
                background: 'radial-gradient(circle, rgba(188, 49, 252, 0.3) 0%, transparent 70%)',
                transform: 'translate(-30%, 30%)',
              }}></div>
            </div>

            {/* Blob gradient décoratif derrière la colonne droite */}
            <div className="absolute top-1/2 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl pointer-events-none" style={{
              background: 'radial-gradient(circle, rgba(160, 30, 217, 0.4) 0%, transparent 70%)',
              transform: 'translate(40%, -50%)',
            }}></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[60%_40%] gap-8 lg:gap-12">
              {/* COLONNE GAUCHE - Formulaire */}
              <div className="space-y-8">
                {/* Badge "Support FADY" */}
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full text-sm font-semibold text-fady-purple bg-fady-purple/10 border border-fady-purple/20">
                    Support FADY
                  </span>
                </div>

                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl font-bold text-black-soft tracking-tight">
                    Contactez-nous
                  </h1>
                  <p className="text-lg md:text-xl text-gray-text">
                    Une question ? Une idée ? On répond rapidement.
                  </p>
                </div>

                {/* Formulaire */}
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-black-soft mb-2">
                      Nom
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-fady-purple focus:outline-none transition-colors bg-white/80"
                      placeholder="Votre nom"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-black-soft mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-fady-purple focus:outline-none transition-colors bg-white/80"
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-black-soft mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-fady-purple focus:outline-none transition-colors bg-white/80 resize-none"
                      placeholder="Votre message..."
                    ></textarea>
                  </div>

                  {/* Message de feedback */}
                  {status.type && (
                    <div className={`p-4 rounded-xl ${
                      status.type === 'success' 
                        ? 'bg-green-50 text-green-700 border border-green-200' 
                        : 'bg-red-50 text-red-700 border border-red-200'
                    }`}>
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                      isSubmitting 
                        ? 'bg-gray-400 text-white cursor-not-allowed opacity-70' 
                        : 'bg-fady-purple text-white hover:bg-fady-purple-dark'
                    }`}
                  >
                    {isSubmitting ? 'Envoi...' : 'Envoyer'}
                  </button>
                </form>
              </div>

              {/* COLONNE DROITE - Infos de contact */}
              <div className="lg:order-2">
                <div className="rounded-[24px] p-8 space-y-8" style={{
                  background: 'linear-gradient(135deg, rgba(250, 245, 255, 0.8) 0%, rgba(243, 232, 255, 0.9) 100%)',
                  border: '1px solid rgba(160, 30, 217, 0.15)',
                }}>
                  <h2 className="text-2xl md:text-3xl font-bold text-black-soft">
                    Nos contacts
                  </h2>

                  <div className="space-y-6">
                    {/* Email */}
                    <a
                      href="mailto:contact@fady-app.fr"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group"
                    >
                      <div className="w-12 h-12 rounded-full bg-fady-purple/10 flex items-center justify-center group-hover:bg-fady-purple/20 transition-colors">
                        <svg className="w-6 h-6 text-fady-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-text mb-1">Email</div>
                        <div className="text-base font-semibold text-black-soft">contact@fady-app.fr</div>
                      </div>
                    </a>

                    {/* WhatsApp */}
                    <a
                      href="https://wa.me/33623563644"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group"
                    >
                      <div className="w-12 h-12 rounded-full bg-fady-purple/10 flex items-center justify-center group-hover:bg-fady-purple/20 transition-colors">
                        <svg className="w-6 h-6 text-fady-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-text mb-1">WhatsApp</div>
                        <div className="text-base font-semibold text-black-soft">+33 6 23 56 36 44</div>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://instagram.com/fady.app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group"
                    >
                      <div className="w-12 h-12 rounded-full bg-fady-purple/10 flex items-center justify-center group-hover:bg-fady-purple/20 transition-colors">
                        <svg className="w-6 h-6 text-fady-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-text mb-1">Instagram</div>
                        <div className="text-base font-semibold text-black-soft">@fady.app</div>
                      </div>
                    </a>

                    {/* TikTok */}
                    <a
                      href="https://tiktok.com/@fadyapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-xl hover:bg-white/60 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-md group"
                    >
                      <div className="w-12 h-12 rounded-full bg-fady-purple/10 flex items-center justify-center group-hover:bg-fady-purple/20 transition-colors">
                        <svg className="w-6 h-6 text-fady-purple" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <div className="text-xs font-medium text-gray-text mb-1">TikTok</div>
                        <div className="text-base font-semibold text-black-soft">@fadyapp</div>
                      </div>
                    </a>
                  </div>

                  {/* Texte en bas */}
                  <div className="pt-4 border-t border-fady-purple/10">
                    <p className="text-sm text-gray-text text-center">
                      Réponse sous 24h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
