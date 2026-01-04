import Link from "next/link";
import FeatureCard from "@/components/FeatureCard";
import ProTestimonialCard from "@/components/ProTestimonialCard";
import ProProfilesSection from "@/components/ProProfilesSection";
import MockupsShowcase from "@/components/MockupsShowcase";
import AppStoreButton from "@/components/AppStoreButton";

export default function ProApp() {
  return (
    <>
      {/* Wrapper avec dégradé jusqu'aux mockups */}
      <div style={{
        background: 'linear-gradient(to bottom, #F8F3FF 0%, #EFE2FF 50%, #FFFFFF 100%)',
        marginTop: '-80px',
        paddingTop: '180px',
      }}>
        {/* Hero Section - Editorial Style */}
        <section className="pt-28 md:pt-32 pb-4 md:pb-6 relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            {/* H1 */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black-soft tracking-tight leading-tight">
              Développe ta clientèle avec FADY Pro
            </h1>
            
            {/* Lead - 1 line max */}
            <p className="text-xl md:text-2xl text-gray-text font-medium leading-snug">
              Une vitrine pro, des réservations, et la liberté de travailler en salon ou à domicile.
            </p>
            
            {/* Supporting paragraph - 2-3 lines max with highlights */}
            <p className="text-base md:text-lg text-gray-text leading-relaxed max-w-2xl mx-auto">
              FADY forme la nouvelle génération de coiffeurs. Que tu sois <strong className="text-fady-purple font-semibold">diplômé</strong> ou <strong className="text-fady-purple font-semibold">amateur</strong>, nous t&apos;accompagnons à devenir indépendant et à construire ton empire de la coiffure.
            </p>
            
            {/* CTA Row */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-2 items-center">
              <AppStoreButton 
                href="https://apps.apple.com/fr/app/fady-pro-g%C3%A9rez-vos-clients/id6754292964"
              />
              <a
                href="#profils"
                className="px-6 py-3 glass-bubble text-fady-purple rounded-full text-sm font-semibold border-2 border-fady-purple/70 hover:border-fady-purple/90 transition-all duration-300 shadow-sm hover:shadow-md"
              >
                Voir les profils
              </a>
            </div>
          </div>
        </div>
      </section>

        {/* Diplômé vs Amateur - 2 Column Layout */}
        <ProProfilesSection
        diplome={{
          title: "Je suis Diplômé",
          subtitle: "Diplômé ou 3 ans d'expérience en salon ? Passe en mode Pro.",
          description: "Si tu es diplômé (CAP/BP/BM) ou que tu as au moins 3 ans d'expérience en salon, tu peux créer un profil 'Diplômé' (sous réserve de validation).",
          bullets: [
            "Profil premium : photos, vidéos, bio, prestations",
            "Réservations : maintenant ou plus tard",
            "Paiements : simples et sécurisés",
            "Domicile : active l'option si tu le souhaites",
          ],
          ctaText: "Créer mon profil Diplômé",
          ctaHref: "https://apps.apple.com/fr/app/fady-pro-g%C3%A9rez-vos-clients/id6754292964",
        }}
        amateur={{
          title: "Je suis Amateur",
          subtitle: "Amateur : entraîne-toi, trouve des modèles, construis ta vitrine.",
          description: "FADY aide les amateurs à progresser : trouver des modèles, s'entraîner en conditions réelles, obtenir des avis et créer un portfolio. Quand tu es prêt (et éligible), tu peux basculer en 'Diplômé'.",
          bullets: [
            "Trouver des modèles près de toi",
            "Construire ton portfolio (photos/vidéos)",
            "Gagner en confiance + avis",
            "Passer Diplômé quand tu es prêt",
          ],
          ctaText: "Créer mon profil Amateur",
          ctaHref: "https://apps.apple.com/fr/app/fady-pro-g%C3%A9rez-vos-clients/id6754292964",
        }}
      />
      </div>

      {/* Mockups Showcase */}
      <MockupsShowcase />

      {/* Features Pro */}
      <section className="py-12 md:py-16 section-bg relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black-soft tracking-tight mb-3">
              Fonctionnalités Pro
            </h2>
            <p className="text-base md:text-lg text-gray-text">
              Des outils puissants pour gérer et développer ton activité
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              }
              title="Profil coiffeur"
              description="Crée un profil complet avec tes photos, vidéos de tes réalisations et une bio qui te ressemble."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              }
              title="Statistiques / datas"
              description="Suis tes réservations, ta visibilité et tes performances avec des statistiques détaillées en temps réel."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                </svg>
              }
              title="Paiements"
              description="Gère tes paiements en toute simplicité. Reçois tes revenus rapidement et en toute sécurité."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              }
              title="Coupes à domicile"
              description="Propose des coupes à domicile et élargis ton offre de services pour toucher plus de clients."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              }
              title="Gestion du planning"
              description="Gère facilement tes créneaux disponibles, tes jours de repos et tes horaires de travail."
            />
            <FeatureCard
              icon={
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              }
              title="Notifications clients"
              description="Reçois des notifications pour chaque nouvelle réservation et reste informé en temps réel."
            />
          </div>
        </div>
      </section>

      {/* Partners / Testimonials */}
      <section className="pt-6 pb-12 md:pb-16 section-bg relative z-10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-black-soft tracking-tight mb-3">
              Coiffeurs partenaires
            </h2>
            <p className="text-base md:text-lg text-gray-text">
              Découvre les témoignages de coiffeurs qui ont rejoint la communauté FADY
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-8">
            <ProTestimonialCard
              name="Lucky Barber"
              title="Diplômé"
              location="Strasbourg"
              text="FADY a complètement transformé mon activité ! En quelques mois, j'ai doublé ma clientèle grâce à la visibilité sur l'app. Les réservations se gèrent toutes seules et les paiements sont ultra rapides."
              avatar="/ppLycky-Barber.png"
              stats={{
                clients: 500,
                experience: "5 ans"
              }}
            />
            <ProTestimonialCard
              name="Don Pablo"
              title="Diplômé"
              location="Bordeaux"
              text="L'app FADY Pro est un vrai game changer ! La gestion des disponibilités est intuitive, je peux proposer des créneaux à domicile facilement et mes clients adorent."
              avatar="/ppdon-pablo.png"
              stats={{
                clients: 300,
                experience: "3 ans"
              }}
            />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-text mb-3">
              Rejoins une communauté de coiffeurs passionnés et développe ton activité.
            </p>
            <span className="inline-block px-4 py-2 glass-bubble text-fady-purple-dark text-xs font-medium rounded-full border-2 border-fady-purple/60">
              Bêta — Lancement prochain
            </span>
          </div>
        </div>
      </section>

      {/* Premium CTA Section - JoyJam Style */}
      <section className="hidden lg:block pt-8 pb-20 md:pb-28 relative overflow-visible bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-6xl mx-auto relative">
            {/* Glassmorphism Card - Plus petite, mockup dépasse */}
            <div 
              className="relative rounded-[32px] overflow-visible"
              style={{
                background: 'linear-gradient(135deg, #A01ED9 0%, #7B1AB6 30%, #5B1899 70%, #3D0F66 100%)',
                boxShadow: '0 40px 120px rgba(91, 24, 153, 0.3)',
              }}
            >
              <div className="relative p-8 lg:p-10 pr-0 lg:pr-0">
                <div className="grid grid-cols-1 lg:grid-cols-[65%_35%] gap-6 lg:gap-8 items-center">
                  {/* Left Column - Text */}
                  <div className="space-y-6 pr-8 lg:pr-0">
                    <div className="space-y-4">
                      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white tracking-tight leading-tight">
                        Développe ton activité de coiffeur, simplement.
                      </h2>
                      <p className="text-lg md:text-xl text-white/80 leading-relaxed">
                        FADY Pro te permet de gérer tes réservations, d&apos;attirer de nouveaux clients et de travailler quand tu veux, où tu veux.
                      </p>
                    </div>
                    
                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Link
                        href="https://apps.apple.com/fr/app/fady-pro-g%C3%A9rez-vos-clients/id6754292964"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block transition-all duration-300 hover:scale-105 hover:opacity-90"
                      >
                        <img
                          src="/Download-Apple-Blanc.png"
                          alt="Download on the App Store"
                          className="h-auto w-auto"
                          style={{ maxWidth: '180px', height: 'auto', display: 'block' }}
                        />
                      </Link>
                      <div
                        className="px-8 py-4 bg-transparent text-white rounded-full font-semibold text-base border-2 border-white/40 text-center whitespace-nowrap opacity-0 pointer-events-none select-none"
                      >
                        Découvrir FADY PRO
                      </div>
                    </div>
                  </div>
                </div>

                {/* iPhone Mockup qui dépasse - Positionné absolument */}
                <div 
                  className="hidden lg:block absolute right-0 top-1/2 z-10"
                  style={{
                    transform: 'translate(-80px, -55%)',
                    filter: 'drop-shadow(0 30px 60px rgba(0, 0, 0, 0.4))',
                  }}
                >
                  <div className="relative transform rotate-12">
                    <img
                      src="/mockup-pro.png"
                      alt="FADY Pro App Mockup"
                      className="w-[300px] h-auto"
                      style={{ display: 'block' }}
                    />
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
