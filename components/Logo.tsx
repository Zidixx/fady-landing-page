import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
      {/* Symbole stylisé avec deux lignes horizontales ondulées */}
      <svg
        width="40"
        height="24"
        viewBox="0 0 40 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-fady-purple"
      >
        {/* Ligne supérieure ondulée (courbe vers le haut au milieu) */}
        <path
          d="M4 8 Q12 4, 20 8 T36 8"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
        {/* Ligne inférieure ondulée (courbe vers le bas au milieu) */}
        <path
          d="M4 16 Q12 20, 20 16 T36 16"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
      
      {/* Texte fady en minuscules */}
      <span className="text-2xl font-bold text-fady-purple tracking-tight" style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        fontWeight: 700,
        letterSpacing: '-0.02em'
      }}>
        fady
      </span>
    </Link>
  );
}

