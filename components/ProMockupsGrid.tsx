export default function ProMockupsGrid() {
  const mockups = [
    {
      src: "/mockup-pro.png",
      alt: "Profil coiffeur (photos & vidéos)",
      caption: "Profil coiffeur (photos & vidéos)",
      size: "large", // large, medium, small
      position: "left", // left, center, right
    },
    {
      src: "/mockup-pro.png",
      alt: "Planning & disponibilités",
      caption: "Planning & disponibilités",
      size: "medium",
      position: "right",
    },
    {
      src: "/mockup-pro.png",
      alt: "Paiements & revenus",
      caption: "Paiements & revenus",
      size: "small",
      position: "left",
    },
    {
      src: "/mockup-pro.png",
      alt: "Option domicile",
      caption: "Option domicile",
      size: "medium",
      position: "center",
    },
  ];

  const sizeClasses = {
    large: "w-full max-w-sm",
    medium: "w-full max-w-xs",
    small: "w-full max-w-[200px]",
  };

  return (
    <section className="py-16 md:py-20 section-bg relative z-10 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-black-soft mb-4">
            FADY Pro en action
          </h2>
          <p className="text-lg text-gray-text max-w-2xl mx-auto">
            Découvre comment FADY Pro simplifie la gestion de ton activité
          </p>
        </div>

        {/* Disposition dispersée avec différentes tailles */}
        <div className="relative min-h-[600px] md:min-h-[800px]">
          {/* Mockup 1 - Large, Left */}
          <div className="absolute top-0 left-0 md:left-8 lg:left-16 transform hover:scale-105 transition-transform duration-300 z-10">
            <div className="glass-card rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className={`${sizeClasses.large} mx-auto mb-3`}>
                <img
                  src={mockups[0].src}
                  alt={mockups[0].alt}
                  className="w-full h-auto rounded-xl"
                  style={{ display: "block" }}
                />
              </div>
              <p className="text-center text-gray-text font-medium text-sm md:text-base">
                {mockups[0].caption}
              </p>
            </div>
          </div>

          {/* Mockup 2 - Medium, Right */}
          <div className="absolute top-20 md:top-32 right-0 md:right-8 lg:right-16 transform hover:scale-105 transition-transform duration-300 z-20">
            <div className="glass-card rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className={`${sizeClasses.medium} mx-auto mb-3`}>
                <img
                  src={mockups[1].src}
                  alt={mockups[1].alt}
                  className="w-full h-auto rounded-xl"
                  style={{ display: "block" }}
                />
              </div>
              <p className="text-center text-gray-text font-medium text-sm md:text-base">
                {mockups[1].caption}
              </p>
            </div>
          </div>

          {/* Mockup 3 - Small, Left Bottom */}
          <div className="absolute bottom-20 md:bottom-32 left-0 md:left-12 lg:left-24 transform hover:scale-105 transition-transform duration-300 z-30">
            <div className="glass-card rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className={`${sizeClasses.small} mx-auto mb-3`}>
                <img
                  src={mockups[2].src}
                  alt={mockups[2].alt}
                  className="w-full h-auto rounded-xl"
                  style={{ display: "block" }}
                />
              </div>
              <p className="text-center text-gray-text font-medium text-xs md:text-sm">
                {mockups[2].caption}
              </p>
            </div>
          </div>

          {/* Mockup 4 - Medium, Center Right */}
          <div className="absolute top-1/2 right-1/4 md:right-1/3 transform -translate-y-1/2 hover:scale-105 transition-transform duration-300 z-40">
            <div className="glass-card rounded-2xl p-4 md:p-6 hover:shadow-xl transition-all duration-300">
              <div className={`${sizeClasses.medium} mx-auto mb-3`}>
                <img
                  src={mockups[3].src}
                  alt={mockups[3].alt}
                  className="w-full h-auto rounded-xl"
                  style={{ display: "block" }}
                />
              </div>
              <p className="text-center text-gray-text font-medium text-sm md:text-base">
                {mockups[3].caption}
              </p>
            </div>
          </div>
        </div>

        {/* Version mobile : grille simple */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          {mockups.map((mockup, index) => (
            <div
              key={index}
              className="glass-card rounded-2xl p-4 hover:shadow-xl transition-all duration-300"
            >
              <div className="mb-3">
                <img
                  src={mockup.src}
                  alt={mockup.alt}
                  className="w-full h-auto rounded-xl"
                  style={{ display: "block" }}
                />
              </div>
              <p className="text-center text-gray-text font-medium text-xs">
                {mockup.caption}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
