"use client";

export default function HeroMockups() {
  return (
    <div className="relative w-full h-full flex items-center justify-center" style={{ minHeight: '600px' }}>
      {/* Mobile: Carousel horizontal */}
      <div className="md:hidden w-full px-4 pb-8 overflow-x-auto snap-x snap-mandatory scrollbar-hide" style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        WebkitOverflowScrolling: 'touch',
      }}>
        <div className="flex gap-6 items-center" style={{ minWidth: 'max-content' }}>
          {/* Mockup gauche */}
          <div className="flex-shrink-0 snap-center">
            <img
              src="/mockup-user-photos.png"
              alt="FADY User App - Photos"
              className="w-[240px] h-auto"
              style={{display: 'block'}}
            />
          </div>
          
          {/* Mockup central - Plus grand */}
          <div className="flex-shrink-0 snap-center">
            <img
              src="/mockup-user1.png"
              alt="FADY User App"
              className="w-[280px] h-auto"
              style={{display: 'block'}}
            />
          </div>
          
          {/* Mockup droit */}
          <div className="flex-shrink-0 snap-center">
            <img
              src="/mockup-user-avis.png"
              alt="FADY User App - Avis"
              className="w-[240px] h-auto"
              style={{display: 'block'}}
            />
          </div>
        </div>
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
            className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] h-auto"
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
            className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] h-auto"
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
            src="/mockup-user-avis.png"
            alt="FADY User App - Avis"
            className="w-full max-w-[280px] md:max-w-[320px] lg:max-w-[360px] h-auto"
            style={{display: 'block'}}
          />
        </div>
      </div>
    </div>
  );
}

