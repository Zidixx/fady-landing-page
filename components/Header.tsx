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
      {/* Fond dégradé hero sur mobile uniquement */}
      <div 
        className="absolute inset-0 md:hidden bg-fady-hero"
        style={{
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          opacity: 0.95,
          boxShadow: '0 2px 10px rgba(91, 24, 153, 0.1)',
        }}
      ></div>
      
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mobile: Container avec hauteur fixe - Logo à gauche, Burger à droite */}
        <div className="flex items-center justify-between h-16 md:h-auto">
          {/* Logo en haut à gauche - Mobile */}
          <div className="flex-shrink-0 md:hidden">
            <Link href="/" className="block hover:opacity-80 transition-opacity">
              <Image 
                src="/logo.png" 
                alt="FADY Logo" 
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
          </div>
          
          {/* Desktop Navbar - Glassmorphism Pill (courte, centrée) */}
          <div 
            className="hidden lg:flex items-center gap-3 px-5 py-3 rounded-full transition-all duration-300 ease-in-out pointer-events-auto"
            style={{
              position: 'fixed',
              top: '48px',
              left: '50%',
              transform: isNavbarVisible 
                ? 'translateX(-50%) translateY(0)' 
                : 'translateX(-50%) translateY(-100px)',
              opacity: isNavbarVisible ? 1 : 0,
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
                    : "text-gray-700 hover:bg-white/20"
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
                    : "text-gray-700 hover:bg-white/20"
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
                    : "text-gray-700 hover:bg-white/20"
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
                    : "text-gray-700 hover:bg-white/20"
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
          
          {/* Mobile Menu Button - Aligné à droite dans le même flex container */}
          <div className="md:hidden flex-shrink-0">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-12 h-12 flex items-center justify-center rounded-full bg-white/20 backdrop-blur-sm text-fady-purple transition-all hover:bg-white/30"
              style={{border: "2px solid rgba(188, 49, 252, 0.3)"}}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu - Overlay + Items centrés */}
        {mobileMenuOpen && (
          <>
            {/* Overlay */}
            <div 
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-[-1]"
              onClick={() => setMobileMenuOpen(false)}
            ></div>
            {/* Menu centré */}
            <div className="md:hidden mt-4 flex flex-col items-center space-y-3 relative z-10">
              <div className="w-full max-w-[90%] space-y-3">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full px-6 py-3 rounded-full text-sm font-semibold transition-all text-center ${
                  pathname === "/"
                    ? "bg-white text-fady-purple shadow-lg"
                    : "bg-fady-purple text-white hover:bg-fady-purple-dark"
                }`}
                style={{
                  border: pathname === "/" ? "2px solid #BC31FC" : "2px solid transparent"
                }}
              >
                Home
              </Link>
              <Link
                href="/user"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full px-6 py-3 rounded-full text-sm font-semibold transition-all text-center ${
                  pathname === "/user"
                    ? "bg-white text-fady-purple shadow-lg"
                    : "bg-fady-purple text-white hover:bg-fady-purple-dark"
                }`}
                style={{
                  border: pathname === "/user" ? "2px solid #BC31FC" : "2px solid transparent"
                }}
              >
                Clients
              </Link>
              <Link
                href="/pro"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full px-6 py-3 rounded-full text-sm font-semibold transition-all text-center ${
                  pathname === "/pro"
                    ? "bg-white text-fady-purple shadow-lg"
                    : "bg-fady-purple text-white hover:bg-fady-purple-dark"
                }`}
                style={{
                  border: pathname === "/pro" ? "2px solid #BC31FC" : "2px solid transparent"
                }}
              >
                Coiffeurs
              </Link>
              <Link
                href="/contact"
                onClick={() => setMobileMenuOpen(false)}
                className={`block w-full px-6 py-3 rounded-full text-sm font-semibold transition-all text-center ${
                  pathname === "/contact"
                    ? "bg-white text-fady-purple shadow-lg"
                    : "bg-fady-purple text-white hover:bg-fady-purple-dark"
                }`}
                style={{
                  border: pathname === "/contact" ? "2px solid #BC31FC" : "2px solid transparent"
                }}
              >
                Contact
              </Link>
              </div>
            </div>
          </>
        )}
      </nav>
    </header>
  );
}

