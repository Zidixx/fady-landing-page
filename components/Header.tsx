"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollThreshold = 10; // Seuil minimal pour éviter le jitter

      // Toujours visible en haut de page
      if (currentScrollY < 20) {
        setIsNavbarVisible(true);
      } else {
        // Scroll down : cacher
        if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
          setIsNavbarVisible(false);
        }
        // Scroll up : afficher
        else if (currentScrollY < lastScrollY) {
          setIsNavbarVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // URL App Store (à remplacer par l'URL réelle si disponible)
  const APPSTORE_URL = "https://apps.apple.com";

  return (
    <header 
      className="fixed top-12 left-0 right-0 z-50 w-full pointer-events-none"
    >
      
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Container */}
        <div className="flex items-center justify-center h-16 md:h-auto">
          {/* Desktop Navbar - Glassmorphism Pill (courte, centrée) */}
          <div 
            className="hidden lg:flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 ease-in-out pointer-events-auto"
            style={{
              position: 'fixed',
              top: '48px',
              left: '50%',
              transform: 'translateX(-50%)',
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(188, 49, 252, 0.1)',
              maxWidth: 'fit-content',
            }}
          >
            {/* Logo à gauche */}
            <div className="flex-shrink-0">
              <Link href="/" className="block hover:opacity-80 transition-opacity">
                <Image 
                  src="/logo.png" 
                  alt="FADY Logo" 
                  width={90}
                  height={30}
                  className="h-7 w-auto"
                  priority
                />
              </Link>
            </div>
            
            {/* Séparateur vertical */}
            <div className="h-6 w-px bg-white/20"></div>
            
            {/* Liens centrés en pills */}
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  pathname === "/"
                    ? "bg-gradient-to-b from-fady-purple/20 to-white/10 text-fady-purple border-2 border-fady-purple shadow-[0_0_20px_rgba(188,49,252,0.35)] hover:shadow-[0_0_25px_rgba(188,49,252,0.45)] hover:scale-105"
                    : "text-black hover:bg-white/20"
                }`}
                style={pathname === "/" ? { textShadow: '0 1px 2px rgba(188, 49, 252, 0.2)' } : {}}
              >
                Home
              </Link>
              <Link
                href="/user"
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  pathname === "/user"
                    ? "bg-gradient-to-b from-fady-purple/20 to-white/10 text-fady-purple border-2 border-fady-purple shadow-[0_0_20px_rgba(188,49,252,0.35)] hover:shadow-[0_0_25px_rgba(188,49,252,0.45)] hover:scale-105"
                    : "text-black hover:bg-white/20"
                }`}
                style={pathname === "/user" ? { textShadow: '0 1px 2px rgba(188, 49, 252, 0.2)' } : {}}
              >
                Clients
              </Link>
              <Link
                href="/pro"
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  pathname === "/pro"
                    ? "bg-gradient-to-b from-fady-purple/20 to-white/10 text-fady-purple border-2 border-fady-purple shadow-[0_0_20px_rgba(188,49,252,0.35)] hover:shadow-[0_0_25px_rgba(188,49,252,0.45)] hover:scale-105"
                    : "text-black hover:bg-white/20"
                }`}
                style={pathname === "/pro" ? { textShadow: '0 1px 2px rgba(188, 49, 252, 0.2)' } : {}}
              >
                Coiffeurs
              </Link>
              <Link
                href="/contact"
                className={`px-3.5 py-1.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                  pathname === "/contact"
                    ? "bg-gradient-to-b from-fady-purple/20 to-white/10 text-fady-purple border-2 border-fady-purple shadow-[0_0_20px_rgba(188,49,252,0.35)] hover:shadow-[0_0_25px_rgba(188,49,252,0.45)] hover:scale-105"
                    : "text-black hover:bg-white/20"
                }`}
                style={pathname === "/contact" ? { textShadow: '0 1px 2px rgba(188, 49, 252, 0.2)' } : {}}
              >
                Contact
              </Link>
            </div>
            
            {/* Séparateur vertical */}
            <div className="h-6 w-px bg-white/20"></div>
            
            {/* Bouton CTA violet à droite */}
            <div className="flex-shrink-0">
              <Link
                href={APPSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full text-sm font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{
                  background: '#BC31FC',
                  boxShadow: '0 4px 12px rgba(188, 49, 252, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#A01ED9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#BC31FC';
                }}
              >
                Télécharger l&apos;app
              </Link>
            </div>
          </div>
          
          {/* Mobile Navbar - Glassmorphism Pill (même style que desktop mais avec émojis) */}
          <div 
            className="lg:hidden flex items-center gap-2 px-3 py-2.5 rounded-full transition-all duration-300 ease-in-out pointer-events-auto mx-auto"
            style={{
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.1))',
              backdropFilter: 'blur(24px)',
              WebkitBackdropFilter: 'blur(24px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 8px 32px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(188, 49, 252, 0.1)',
              maxWidth: 'fit-content',
            }}
          >
            {/* Logo à gauche */}
            <div className="flex-shrink-0">
              <Link href="/" className="block hover:opacity-80 transition-opacity">
                <Image 
                  src="/logo.png" 
                  alt="FADY Logo" 
                  width={70}
                  height={24}
                  className="h-6 w-auto"
                  priority
                />
              </Link>
            </div>
            
            {/* Séparateur vertical */}
            <div className="h-5 w-px bg-white/20"></div>
            
            {/* Liens avec icônes SVG en noir/violet */}
            <div className="flex items-center gap-1">
              <Link
                href="/"
                className={`px-2.5 py-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  pathname === "/"
                    ? "bg-gradient-to-b from-fady-purple/20 to-white/10 border-2 border-fady-purple shadow-[0_0_20px_rgba(188,49,252,0.35)] hover:shadow-[0_0_25px_rgba(188,49,252,0.45)] hover:scale-105"
                    : "hover:bg-white/20"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: pathname === "/" ? "#BC31FC" : "#000000" }}>
                  <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
              </Link>
              <Link
                href="/user"
                className={`px-2.5 py-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  pathname === "/user"
                    ? "bg-gradient-to-b from-fady-purple/20 to-white/10 border-2 border-fady-purple shadow-[0_0_20px_rgba(188,49,252,0.35)] hover:shadow-[0_0_25px_rgba(188,49,252,0.45)] hover:scale-105"
                    : "hover:bg-white/20"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: pathname === "/user" ? "#BC31FC" : "#000000" }}>
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
              </Link>
              <Link
                href="/pro"
                className={`px-2.5 py-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  pathname === "/pro"
                    ? "bg-gradient-to-b from-fady-purple/20 to-white/10 border-2 border-fady-purple shadow-[0_0_20px_rgba(188,49,252,0.35)] hover:shadow-[0_0_25px_rgba(188,49,252,0.45)] hover:scale-105"
                    : "hover:bg-white/20"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: pathname === "/pro" ? "#BC31FC" : "#000000" }}>
                  <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z"/>
                </svg>
              </Link>
              <Link
                href="/contact"
                className={`px-2.5 py-1.5 rounded-full transition-all duration-300 flex items-center justify-center ${
                  pathname === "/contact"
                    ? "bg-gradient-to-b from-fady-purple/20 to-white/10 border-2 border-fady-purple shadow-[0_0_20px_rgba(188,49,252,0.35)] hover:shadow-[0_0_25px_rgba(188,49,252,0.45)] hover:scale-105"
                    : "hover:bg-white/20"
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: pathname === "/contact" ? "#BC31FC" : "#000000" }}>
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </Link>
            </div>
            
            {/* Séparateur vertical */}
            <div className="h-5 w-px bg-white/20"></div>
            
            {/* Bouton CTA violet à droite */}
            <div className="flex-shrink-0">
              <Link
                href={APPSTORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-full text-xs font-semibold text-white transition-all duration-200 hover:scale-105"
                style={{
                  background: '#BC31FC',
                  boxShadow: '0 4px 12px rgba(188, 49, 252, 0.3)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = '#A01ED9';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = '#BC31FC';
                }}
              >
                Télécharger
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

