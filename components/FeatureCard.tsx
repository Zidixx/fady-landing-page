import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <div className="glass-card p-6 rounded-2xl hover:shadow-xl hover:border-fady-purple/35 transition-all duration-300 transform hover:-translate-y-0.5">
      <div className="mb-4 transform hover:scale-110 transition-transform duration-300 text-fady-purple">{icon}</div>
      <h3 className="text-xl font-semibold text-black-soft mb-2">{title}</h3>
      <p className="text-gray-text leading-relaxed">{description}</p>
    </div>
  );
}

