"use client";

export default function HeroMockups() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '600px' }}>
      {/* Mobile: Carousel horizontal */}
      <div className="md:hidden w-full">
        <div className="px-4 pb-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide" style={{
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitOverflowScrolling: 'touch',
        }}>
          <div className="flex gap-6 items-center relative" style={{ minWidth: 'max-content' }}>
            {/* Mockup gauche */}
            <div className="flex-shrink-0 snap-center relative">
              <img
                src="/mockup-user-photos.png"
                alt="FADY User App - Photos"
                className="w-[240px] h-auto"
                style={{display: 'block'}}
              />
              {/* Flèche droite */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-fady-purple/40">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Mockup central - Plus grand */}
            <div className="flex-shrink-0 snap-center relative">
              <img
                src="/mockup-user1.png"
                alt="FADY User App"
                className="w-[280px] h-auto"
                style={{display: 'block'}}
              />
              {/* Flèche droite */}
              <div className="absolute top-1/2 -right-8 transform -translate-y-1/2 text-fady-purple/40">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
            
            {/* Mockup droit */}
            <div className="flex-shrink-0 snap-center">
              <img
                src="/mockup-map-bdx.png"
                alt="FADY User App - Map"
                className="w-[240px] h-auto"
                style={{display: 'block'}}
              />
            </div>
          </div>
        </div>
        
        {/* Indicateurs de pagination en dessous */}
        <div className="flex justify-center items-center gap-2 pb-4">
          <div className="w-2 h-2 rounded-full bg-fady-purple/30"></div>
          <div className="w-2 h-2 rounded-full bg-fady-purple/30"></div>
          <div className="w-2 h-2 rounded-full bg-fady-purple/30"></div>
        </div>
        
        {/* Texte indicatif */}
        <p className="text-center text-sm text-gray-text pb-4">
          ← Glisse pour voir plus →
        </p>
      </div>

      {/* Desktop: Layout original avec positions absolues */}
      <div className="hidden md:flex relative items-center justify-center" style={{ width: '100%', height: '100%' }}>
        {/* Mockup secondaire gauche */}
        <div 
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(calc(-50% - 200px), -50%) scale(0.9)',
            zIndex: 2,
            opacity: 0.85,
            filter: 'drop-shadow(0 25px 70px rgba(120, 80, 200, 0.2))',
          }}
        >
          <img
            src="/mockup-user-photos.png"
            alt="FADY User App - Photos"
            className="w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] h-auto"
            style={{display: 'block'}}
          />
        </div>

        {/* Mockup principal - Milieu - Premier plan */}
        <div 
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%) scale(1.25)',
            zIndex: 3,
            filter: 'drop-shadow(0 40px 100px rgba(120, 80, 200, 0.35))',
          }}
        >
          <img
            src="/mockup-user1.png"
            alt="FADY User App"
            className="w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] h-auto"
            style={{display: 'block'}}
          />
        </div>

        {/* Mockup secondaire droit */}
        <div 
          className="absolute"
          style={{
            left: '50%',
            top: '50%',
            transform: 'translate(calc(-50% + 200px), -50%) scale(0.9)',
            zIndex: 2,
            opacity: 0.85,
            filter: 'drop-shadow(0 25px 70px rgba(120, 80, 200, 0.2))',
          }}
        >
          <img
            src="/mockup-map-bdx.png"
            alt="FADY User App - Map"
            className="w-full max-w-[280px] md:max-w-[300px] lg:max-w-[320px] h-auto"
            style={{display: 'block'}}
          />
        </div>
      </div>
    </div>
  );
}

