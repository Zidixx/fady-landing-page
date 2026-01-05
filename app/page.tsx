import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import CTASection from "@/components/CTASection";
import TestimonialCard from "@/components/TestimonialCard";
import HeroMockups from "@/components/HeroMockups";
import AppStoreButton from "@/components/AppStoreButton";

export default function Home() {
  return (
    <>
      {/* Hero Section + Product-Focused Section avec dégradé unifié */}
      <section className="relative -mt-20 pt-36 overflow-hidden" style={{
        background: 'linear-gradient(to bottom, #F8F3FF 0%, #EFE2FF 50%, #F8F3FF 100%)',
      }}>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-28 md:pt-32 lg:pt-36">
          <div className="max-w-7xl mx-auto">
            {/* Main rounded container with gradient background */}
            <div 
              className="rounded-[36px] md:rounded-[40px] p-8 md:p-12 lg:p-16 relative"
              style={{
                background: 'linear-gradient(to bottom, #FAF6FF 0%, #F8F3FF 100%)',
                boxShadow: '0 30px 90px rgba(140, 90, 220, 0.15)',
              }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-1 xl:grid-cols-2 gap-12 lg:gap-12 xl:gap-16 items-center">
                {/* Left: Text + CTAs */}
                <div className="text-center xl:text-left space-y-6">
                  {/* Small label */}
                  <div className="inline-block mb-4">
                    <span className="text-sm md:text-base font-semibold text-fady-purple bg-fady-purple/10 px-4 py-2 rounded-full">
                      Choisir son coiffeur en toute confiance
                    </span>
                  </div>

                  {/* Title */}
                  <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-black-soft tracking-tight leading-tight">
                    Une nouvelle façon de réserver ton coiffeur.
                  </h1>
                  
                  {/* Editorial text block */}
                  <div className="text-lg md:text-xl text-gray-text max-w-xl mx-auto xl:mx-0 leading-relaxed space-y-2">
                    <p>
                      Trouve le coiffeur qui te correspond, quand tu en as besoin.
                    </p>
                    <p>
                      En salon ou à domicile, avec des disponibilités immédiates.
                    </p>
                  </div>
                  
                  {/* CTA Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 justify-center xl:justify-start pt-2">
                    <div className="flex justify-center xl:contents">
                      <AppStoreButton />
                    </div>
                    <div className="flex justify-center xl:contents">
                      <Link
                        href="/user"
                        className="px-8 py-4 bg-white text-fady-purple rounded-full font-semibold border-2 border-fady-purple/70 hover:border-fady-purple hover:bg-fady-purple/5 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
                      >
                        Découvrir FADY
                      </Link>
                    </div>
                  </div>
                </div>

                {/* Right: Mockups (desktop) */}
                <div className="hidden xl:block relative">
                  <HeroMockups />
                </div>
              </div>

              {/* Mobile/Tablette: Centered mockup */}
              <div className="xl:hidden flex justify-center mt-16 lg:mt-20">
                <HeroMockups />
              </div>
            </div>
          </div>
        </div>

        {/* Product-Focused Section intégrée */}
        <div className="py-20 md:py-28 relative overflow-hidden">
        {/* Very subtle radial halos behind title area - barely noticeable */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-fady-purple/3 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute top-16 left-1/2 -translate-x-1/2 w-[450px] h-[220px] bg-purple-300/2 rounded-full blur-3xl opacity-50"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16 space-y-6">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black-soft tracking-tight leading-tight relative z-10">
                Réserver un coiffeur n&apos;a jamais été aussi simple.
              </h2>
              <p className="text-lg md:text-xl text-gray-text leading-relaxed max-w-4xl mx-auto relative z-10">
                Avec FADY, tu vois les disponibilités en temps réel, tu choisis selon le style et tu réserves instantanément. Sans appels. Sans attente. Sans mauvaise surprise.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
              <div className="text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-fady-purple/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-fady-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black-soft">
                  Disponibilités en temps réel
                </h3>
                <p className="text-gray-text leading-relaxed">
                  Tu réserves uniquement quand un coiffeur est réellement disponible.
                </p>
              </div>

              <div className="text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-fady-purple/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-fady-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black-soft">
                  Profils vérifiés & transparents
                </h3>
                <p className="text-gray-text leading-relaxed">
                  Photos, vidéos, avis : tu sais exactement chez qui tu vas.
                </p>
              </div>

              <div className="text-center md:text-left space-y-4">
                <div className="flex items-center justify-center md:justify-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-fady-purple/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-fady-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-black-soft">
                  Réservation instantanée
                </h3>
                <p className="text-gray-text leading-relaxed">
                  Quelques secondes suffisent pour confirmer ton rendez-vous.
                </p>
              </div>
            </div>

            {/* Bouton En savoir plus */}
            <div className="text-center mt-20 md:mt-24">
              <Link
                href="/user"
                className="inline-flex items-center gap-3 px-6 py-3 bg-white text-fady-purple rounded-full font-semibold border-2 border-fady-purple hover:bg-fady-purple/5 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
              >
                <span>En savoir plus</span>
                <div className="w-8 h-8 rounded-full border-2 border-fady-purple flex items-center justify-center">
                  <svg className="w-4 h-4 text-fady-purple" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 md:py-28 lg:pt-12 lg:pb-28 section-bg relative z-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-black-soft mb-6 tracking-tight">
              Ce que disent nos clients
            </h2>
            <p className="text-xl text-gray-text max-w-2xl mx-auto">
              Découvre les expériences de ceux qui utilisent déjà FADY
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            <TestimonialCard
              name="Kévin Martinez"
              location="Paris 11ème"
              rating={5}
              text="J'ai trouvé un coiffeur dispo à 22h juste avant de sortir, réservation ultra rapide. En 2 clics c'était réglé, le coiffeur était top."
              avatar="https://randomuser.me/api/portraits/men/44.jpg"
            />
            <TestimonialCard
              name="Tom Dubois"
              location="Lyon 3ème"
              rating={5}
              text="On voulait se couper à plusieurs avant une soirée, tout s'est fait sur FADY. On a tous trouvé un créneau le même jour, pratique de ouf."
              avatar="https://randomuser.me/api/portraits/men/32.jpg"
            />
            <TestimonialCard
              name="Maxime Leroy"
              location="Marseille"
              rating={5}
              text="Le fait de voir les photos et les avis m'a rassuré direct. J'ai pu choisir un coiffeur qui correspondait à mon style, résultat nickel."
              avatar="https://randomuser.me/api/portraits/men/68.jpg"
            />
            <TestimonialCard
              name="Lucas Moreau"
              location="Toulouse"
              rating={5}
              text="J'avais besoin d'une coupe en urgence un dimanche après-midi. J'ai scrollé 2 minutes, trouvé un coiffeur dispo, réservé et 30 minutes après j'étais chez lui. FADY ça change la vie."
              avatar="https://randomuser.me/api/portraits/men/22.jpg"
            />
            <TestimonialCard
              name="Nathan Bernard"
              location="Bordeaux"
              rating={5}
              text="Plus besoin d'appeler 10 salons pour trouver un créneau. L'app me montre direct qui est dispo et à quel prix. Gain de temps énorme."
              avatar="https://randomuser.me/api/portraits/men/50.jpg"
            />
            <TestimonialCard
              name="Alexandre Petit"
              location="Nantes"
              rating={5}
              text="J'utilise FADY depuis 3 mois maintenant. Les coiffeurs sont tous vérifiés, les prix sont clairs et la réservation prend 30 secondes. Que demander de plus ?"
              avatar="https://randomuser.me/api/portraits/men/86.jpg"
            />
          </div>
        </div>
      </section>

      {/* Premium CTA Section */}
      <section className="py-16 md:py-20 lg:pt-4 lg:pb-20 relative overflow-hidden bg-white">
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
                <div className="text-center lg:text-left space-y-6">
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
                      href="/user"
                      className="px-6 py-3 bg-transparent text-white rounded-full font-bold text-base border-2 border-white/40 hover:border-white/60 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.02] text-center"
                    >
                      Découvrir FADY
                    </Link>
                  </div>
                </div>

                {/* Right: Mockups */}
                <div className="relative flex items-center justify-center lg:justify-start">
                  <div className="relative w-full max-w-md mx-auto lg:mx-0 -ml-10 lg:ml-0">
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
