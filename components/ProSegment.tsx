interface ProSegmentProps {
  title: string;
  subtitle: string;
  description: string;
  bullets: string[];
  ctaText: string;
  ctaHref: string;
  variant: "diplome" | "amateur";
}

export default function ProSegment({
  title,
  subtitle,
  description,
  bullets,
  ctaText,
  ctaHref,
  variant,
}: ProSegmentProps) {
  const isDiplome = variant === "diplome";
  
  return (
    <section className="py-16 md:py-20 section-bg relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="glass-card rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-black-soft mb-4">
                {title}
              </h2>
              <p className="text-xl text-gray-text font-medium mb-6">
                {subtitle}
              </p>
              <p className="text-lg text-gray-text max-w-3xl mx-auto">
                {description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {bullets.map((bullet, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 rounded-xl glass-bubble"
                >
                  <svg
                    className="w-6 h-6 text-fady-purple flex-shrink-0 mt-0.5"
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
                  <p className="text-gray-text leading-relaxed">{bullet}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a
                href={ctaHref}
                target={ctaHref.startsWith("http") ? "_blank" : undefined}
                rel={ctaHref.startsWith("http") ? "noopener noreferrer" : undefined}
                className={`inline-block px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 ${
                  isDiplome
                    ? "bg-fady-purple text-white hover:bg-fady-purple-dark"
                    : "glass-bubble text-fady-purple border border-fady-purple/30 hover:border-fady-purple/50"
                }`}
              >
                {ctaText}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

