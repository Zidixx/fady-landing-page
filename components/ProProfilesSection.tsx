interface ProProfilesSectionProps {
  diplome: {
    title: string;
    subtitle: string;
    description: string;
    bullets: string[];
    ctaText: string;
    ctaHref: string;
  };
  amateur: {
    title: string;
    subtitle: string;
    description: string;
    bullets: string[];
    ctaText: string;
    ctaHref: string;
  };
}

export default function ProProfilesSection({ diplome, amateur }: ProProfilesSectionProps) {
  return (
    <section id="profils" className="pt-4 md:pt-6 pb-12 md:pb-16 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Bulle unique contenant les deux colonnes */}
          <div className="glass-card rounded-3xl p-8 md:p-12" style={{border: 'none'}}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Diplômé */}
              <div className="flex flex-col space-y-6 lg:pr-8 lg:border-r border-gray-300">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-black-soft tracking-tight">
                    {diplome.title}
                  </h2>
                  <p className="text-lg text-gray-text font-medium">
                    {diplome.subtitle}
                  </p>
                  <p className="text-base text-gray-text leading-relaxed">
                    {diplome.description}
                  </p>
                </div>

                <div className="space-y-3 flex-grow">
                  {diplome.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-fady-purple flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-sm text-gray-text leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={diplome.ctaHref}
                    target={diplome.ctaHref.startsWith("http") ? "_blank" : undefined}
                    rel={diplome.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block px-6 py-3 bg-fady-purple text-white rounded-full text-sm font-semibold hover:bg-fady-purple-dark transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {diplome.ctaText}
                  </a>
                </div>
              </div>

              {/* Amateur */}
              <div className="flex flex-col space-y-6 lg:pl-8">
                <div className="space-y-4">
                  <h2 className="text-2xl md:text-3xl font-bold text-black-soft tracking-tight">
                    {amateur.title}
                  </h2>
                  <p className="text-lg text-gray-text font-medium">
                    {amateur.subtitle}
                  </p>
                  <p className="text-base text-gray-text leading-relaxed">
                    {amateur.description}
                  </p>
                </div>

                <div className="space-y-3 flex-grow">
                  {amateur.bullets.map((bullet, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <svg
                        className="w-5 h-5 text-fady-purple flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <p className="text-sm text-gray-text leading-relaxed">{bullet}</p>
                    </div>
                  ))}
                </div>

                <div className="pt-2">
                  <a
                    href={amateur.ctaHref}
                    target={amateur.ctaHref.startsWith("http") ? "_blank" : undefined}
                    rel={amateur.ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="inline-block px-6 py-3 bg-fady-purple text-white rounded-full text-sm font-semibold hover:bg-fady-purple-dark transition-all duration-300 shadow-md hover:shadow-lg"
                  >
                    {amateur.ctaText}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

