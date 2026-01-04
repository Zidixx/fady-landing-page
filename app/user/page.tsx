import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import AppStoreButton from "@/components/AppStoreButton";

export default function UserApp() {
  return (
    <>
      {/* Wrapper avec dégradé jusqu'à la dernière mockup */}
      <div style={{
        background: 'linear-gradient(to bottom, #F8F3FF 0%, #EFE2FF 50%, #FFFFFF 100%)',
        marginTop: '-80px',
        paddingTop: '160px',
      }}>
        {/* Hero Section */}
        <section className="pt-16 md:pt-20 pb-0 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
              <div className="glass-card rounded-3xl p-8 max-w-4xl" style={{border: 'none'}}>
                <h1 className="text-3xl md:text-4xl font-bold text-black-soft mb-6">
                  La nouvelle façon<br />
                  de réserver ton coiffeur
                </h1>
                <div className="text-lg text-gray-text mb-4 font-medium">
                  {/* Mobile: Chaque feature sur une ligne */}
                  <div className="md:hidden space-y-2">
                    <div>🏠 Salon ou domicile</div>
                    <div>⚡ Dispo immédiate</div>
                    <div>🚀 Réservation express</div>
                  </div>
                  {/* Desktop: Une seule ligne avec séparateurs */}
                  <div className="hidden md:block">
                    🏠 Salon ou domicile • ⚡ Dispo immédiate • 🚀 Réservation express
                  </div>
                </div>
                <p className="text-xl text-gray-text mb-8">
                  FADY te connecte aux meilleurs coiffeurs près de toi, en quelques secondes.
                </p>
              </div>
              <div className="max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300">
                <img
                  src="/mockup-user1.png"
                  alt="Mockup User App FADY"
                  className="w-full h-auto"
                  style={{display: 'block'}}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Section: Choisir son coiffeur avec photos/vidéos */}
        <section className="py-0 relative z-10 -mt-8 md:-mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
              <div className="order-2 lg:order-1">
                <div className="max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/mockup-user-photos.png"
                    alt="Mockup User App - Photos et Vidéos"
                    className="w-full h-auto"
                    style={{display: 'block'}}
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="glass-card rounded-3xl p-8" style={{border: 'none'}}>
                  <h2 className="text-3xl md:text-4xl font-bold text-black-soft mb-6">
                    Choisis vraiment ton coiffeur grâce aux photos et vidéos
                  </h2>
                  <p className="text-lg text-gray-text mb-4">
                    Ne laisse plus rien au hasard ! Avec FADY, tu peux découvrir le style et le talent de chaque coiffeur avant de réserver.
                  </p>
                  <ul className="space-y-3 text-gray-text mb-6">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-fady-purple mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-black-soft">Portfolio complet</strong> : Parcours les réalisations de chaque coiffeur avec des photos haute qualité de leurs meilleures coupes</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-fady-purple mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-black-soft">Vidéos de démonstration</strong> : Regarde les coiffeurs en action pour voir leur technique et leur approche</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-fady-purple mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-black-soft">Filtres par style</strong> : Trouve le coiffeur parfait selon le type de coupe que tu recherches</span>
                    </li>
                  </ul>
                  <p className="text-gray-text">
                    Plus besoin de prendre un rendez-vous à l&apos;aveugle. Avec FADY, tu sais exactement à quoi t&apos;attendre avant même de franchir la porte du salon.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

        {/* Section: Choisir son coiffeur avec les avis */}
        <section className="py-0 relative z-10 -mt-8 md:-mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center">
              <div>
                <div className="glass-card rounded-3xl p-8" style={{border: 'none'}}>
                  <h2 className="text-3xl md:text-4xl font-bold text-black-soft mb-6">
                    Fais confiance aux avis de la communauté
                  </h2>
                  <p className="text-lg text-gray-text mb-4">
                    La communauté FADY partage ses expériences pour t&apos;aider à faire le bon choix. Chaque avis est vérifié pour garantir leur authenticité.
                  </p>
                  <ul className="space-y-3 text-gray-text mb-6">
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-fady-purple mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-black-soft">Avis vérifiés</strong> : Tous les avis proviennent de clients qui ont réellement utilisé le service</span>
                    </li>
                    <li className="flex items-start">
                      <svg className="w-6 h-6 text-fady-purple mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span><strong className="text-black-soft">Notes détaillées</strong> : Consulte les notes sur la ponctualité, le professionnalisme, la qualité de la coupe et l&apos;ambiance</span>
                    </li>
                  </ul>
                  <p className="text-gray-text">
                    Avec des milliers d&apos;avis authentiques, choisir son coiffeur en toute confiance. La transparence, c&apos;est ça la nouvelle génération de coiffeurs.
                  </p>
                </div>
              </div>
              <div>
                <div className="max-w-xs mx-auto transform hover:scale-105 transition-transform duration-300">
                  <img
                    src="/mockup-user-avis.png"
                    alt="Mockup User App - Avis clients"
                    className="w-full h-auto"
                    style={{display: 'block'}}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>

      {/* Features Section */}
      <section className="py-12 md:py-16 section-bg relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black-soft text-center mb-12">
            Fonctionnalités User App
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Réservation classique"
              description="Réserve ton créneau à l'avance selon les disponibilités de ton coiffeur préféré."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              }
              title="Réservation dans 10 minutes"
              description="Besoin d'une coupe urgente ? Trouve un coiffeur disponible dans les 10 minutes près de chez toi."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
              title="Coupe à domicile"
              description="Fais-toi coiffer directement chez toi. Choisis l'option à domicile et profite du confort de ta maison."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
              }
              title="Filtres avancés"
              description="Filtre par ville, prix, disponibilité et type de coupe pour trouver exactement ce que tu cherches."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                </svg>
              }
              title="Carte interactive"
              description="Visualise tous les coiffeurs disponibles sur une carte interactive et choisis celui le plus proche de toi."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              }
              title="Notifications en temps réel"
              description="Reçois des notifications pour tes réservations et les disponibilités de tes coiffeurs favoris."
            />
          </div>
        </div>
      </section>

      {/* Premium CTA Section - Identique à la Home */}
      <section className="py-16 md:py-20 relative overflow-hidden bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Premium Container - Format horizontal */}
            <div className="relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden" style={{
              background: 'linear-gradient(135deg, #A01ED9 0%, #7B1AB6 30%, #5B1899 70%, #3D0F66 100%)',
              boxShadow: '0 40px 120px rgba(91, 24, 153, 0.3)',
            }}>
              {/* Motifs graphiques subtils */}
              <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* Cercles concentriques */}
                <div className="absolute top-0 left-0 w-[800px] h-[800px] rounded-full opacity-[0.08]" style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.3) 0%, transparent 70%)',
                  transform: 'translate(-40%, -40%)',
                }}></div>
                <div className="absolute bottom-0 right-0 w-[700px] h-[700px] rounded-full opacity-[0.06]" style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.2) 0%, transparent 70%)',
                  transform: 'translate(40%, 40%)',
                }}></div>
                {/* Ondes */}
                <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] rounded-full opacity-[0.05]" style={{
                  background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 60%)',
                  transform: 'translate(-50%, -50%)',
                }}></div>
              </div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center p-8 md:p-12 lg:p-16">
                {/* Left: Text + CTA */}
                <div className="text-left space-y-6">
                  <div className="space-y-4">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
                      Prêt à trouver ton coiffeur en quelques secondes ?
                    </h2>
                    <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                      Télécharge FADY et réserve un coiffeur disponible, quand tu veux, où tu veux.
                    </p>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 pt-2 justify-center items-center">
                    <AppStoreButton className="text-center" variant="white" />
                    <Link
                      href="/pro"
                      className="px-6 py-3 bg-transparent text-white rounded-full font-bold text-base border-2 border-white/40 hover:border-white/60 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] text-center"
                    >
                      Découvrir FADY PRO
                    </Link>
                  </div>
                </div>

                {/* Right: Mockups */}
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="relative w-full max-w-md">
                    {/* Mockup 1 - Légèrement incliné à gauche */}
                    <div className="relative transform -rotate-6 translate-y-2 animate-float" style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                    }}>
                      <img
                        src="/mockup-user1.png"
                        alt="FADY App Mockup"
                        className="w-[180px] md:w-[200px] h-auto mx-auto"
                        style={{display: 'block'}}
                      />
                    </div>
                    {/* Mockup 2 - Légèrement incliné à droite */}
                    <div className="absolute top-0 right-0 transform rotate-6 -translate-y-2 animate-float-delayed" style={{
                      filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.3))',
                    }}>
                      <img
                        src="/mockup-user-photos.png"
                        alt="FADY App Mockup"
                        className="w-[180px] md:w-[200px] h-auto"
                        style={{display: 'block'}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
