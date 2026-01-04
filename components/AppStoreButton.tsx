import Link from "next/link";

interface AppStoreButtonProps {
  href?: string;
  className?: string;
  imageSrc?: string;
  variant?: "default" | "white";
}

export default function AppStoreButton({ 
  href = "https://apps.apple.com/fr/app/fady-coiffure/id6754072839",
  className = "",
  imageSrc,
  variant = "default"
}: AppStoreButtonProps) {
  // Si imageSrc est fourni, l'utiliser, sinon utiliser la variante
  const finalImageSrc = imageSrc || (
    variant === "white" 
      ? "/Download-Apple-Blanc.png"
      : "/Download on the App Store Button Badge.png"
  );

  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-block transition-all duration-300 hover:scale-105 hover:opacity-90 ${className}`}
    >
      <img
        src={finalImageSrc}
        alt="Download on the App Store"
        className="h-auto w-auto"
        style={{ maxWidth: '180px', height: 'auto', display: 'block' }}
      />
    </Link>
  );
}

