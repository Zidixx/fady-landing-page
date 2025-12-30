import Image from "next/image";

export default function MockupsShowcase() {
  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Layered Premium Background */}
      {/* Main purple gradient */}
      <div 
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(180deg, #5B1899 0%, #7B1AB6 25%, #A01ED9 50%, #BC31FC 75%, #D4A5FF 90%, #E4C8FF 100%)',
        }}
      ></div>
      
      {/* Radial light halos for depth */}
      <div 
        className="absolute inset-0 opacity-40"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(228, 200, 255, 0.4) 0%, transparent 50%),
            radial-gradient(circle at 80% 70%, rgba(212, 165, 255, 0.3) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(188, 49, 252, 0.2) 0%, transparent 60%)
          `,
        }}
      ></div>
      
      {/* Soft glow behind mockups area */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(ellipse at center 60%, rgba(188, 49, 252, 0.3) 0%, transparent 70%)',
        }}
      ></div>
      
      {/* Smooth fade transition to white below */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to bottom, transparent 0%, rgba(255, 255, 255, 0.3) 50%, rgba(255, 255, 255, 0.8) 100%)',
        }}
      ></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Desktop: 3 phones with depth - Layout original inchangé */}
          <div className="hidden md:flex items-end justify-center gap-6 lg:gap-12 relative min-h-[600px]">
            {/* Left Phone - Slightly rotated and behind */}
            <div className="relative w-[200px] lg:w-[240px] transform -rotate-[8deg] translate-y-12 opacity-85 z-10 transition-transform duration-300 hover:scale-105">
              <div 
                className="relative"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 40px rgba(188, 49, 252, 0.2))',
                }}
              >
                <Image
                  src="/mockup-pro-left.png"
                  alt="FADY Pro App"
                  width={240}
                  height={520}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Center Phone - Primary focus, larger, straight */}
            <div className="relative w-[260px] lg:w-[300px] z-20 transform translate-y-0 transition-transform duration-300 hover:scale-105">
              <div 
                className="relative"
                style={{
                  filter: 'drop-shadow(0 35px 70px rgba(0, 0, 0, 0.5)) drop-shadow(0 0 60px rgba(188, 49, 252, 0.3))',
                }}
              >
                <Image
                  src="/mockup-pro.png"
                  alt="FADY Pro App"
                  width={300}
                  height={650}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>

            {/* Right Phone - Slightly rotated and behind */}
            <div className="relative w-[200px] lg:w-[240px] transform rotate-[8deg] translate-y-12 opacity-85 z-10 transition-transform duration-300 hover:scale-105">
              <div 
                className="relative"
                style={{
                  filter: 'drop-shadow(0 25px 50px rgba(0, 0, 0, 0.4)) drop-shadow(0 0 40px rgba(188, 49, 252, 0.2))',
                }}
              >
                <Image
                  src="/mockup-pro-right.png"
                  alt="FADY Pro App"
                  width={240}
                  height={520}
                  className="w-full h-auto"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Mobile: Carousel horizontal avec les 3 mockups */}
          <div className="md:hidden w-full pb-8">
            <div className="px-4 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide" style={{
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
              WebkitOverflowScrolling: 'touch',
            }}>
              <div className="flex gap-4 items-center relative" style={{ minWidth: 'max-content' }}>
                {/* Mockup gauche */}
                <div className="flex-shrink-0 snap-center relative">
                  <Image
                    src="/mockup-pro-left.png"
                    alt="FADY Pro App"
                    width={200}
                    height={440}
                    className="w-[200px] h-auto"
                    priority
                  />
                  {/* Flèche droite */}
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-fady-purple/40">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Mockup central - Plus grand */}
                <div className="flex-shrink-0 snap-center relative">
                  <Image
                    src="/mockup-pro.png"
                    alt="FADY Pro App"
                    width={240}
                    height={520}
                    className="w-[240px] h-auto"
                    priority
                  />
                  {/* Flèche droite */}
                  <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 text-fady-purple/40">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
                
                {/* Mockup droit */}
                <div className="flex-shrink-0 snap-center">
                  <Image
                    src="/mockup-pro-right.png"
                    alt="FADY Pro App"
                    width={200}
                    height={440}
                    className="w-[200px] h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
            
            {/* Indicateurs de pagination en dessous */}
            <div className="flex justify-center items-center gap-2 pb-2">
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
              <div className="w-2 h-2 rounded-full bg-white/40"></div>
            </div>
            
            {/* Texte indicatif */}
            <p className="text-center text-sm text-white/70 pb-2">
              ← Glisse pour voir plus →
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

