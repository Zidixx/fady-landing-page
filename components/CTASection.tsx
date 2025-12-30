interface CTASectionProps {
  title: string;
  description: string;
  primaryButton: {
    text: string;
    href: string;
  };
  secondaryButton?: {
    text: string;
    href: string;
  };
}

export default function CTASection({
  title,
  description,
  primaryButton,
  secondaryButton,
}: CTASectionProps) {
  return (
    <section className="py-16 section-bg relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-card rounded-3xl p-12 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black-soft mb-4">
            {title}
          </h2>
          <p className="text-lg text-gray-text mb-8 max-w-2xl mx-auto">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={primaryButton.href}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-fady-purple text-white rounded-full font-semibold hover:bg-fady-purple-dark transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              {primaryButton.text}
            </a>
            {secondaryButton && (
              <a
                href={secondaryButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 glass-bubble text-fady-purple border border-fady-purple/30 rounded-full font-semibold hover:border-fady-purple/50 transition-all duration-300 shadow-sm hover:shadow-md transform hover:-translate-y-1"
              >
                {secondaryButton.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

