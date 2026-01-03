"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header 
      className="fixed md:fixed top-0 left-0 right-0 z-[9999] w-full min-h-[80px]"
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
      
      {/* Fond transparent sur desktop uniquement - sans flou */}
      <div 
        className="hidden md:block absolute inset-0"
        style={{
          background: 'transparent',
        }}
      ></div>
      
      <nav className="container mx-auto px-4 md:px-4 sm:px-6 lg:px-8 relative z-10 py-4 md:py-4">
        {/* Mobile: Container avec hauteur fixe - Logo à gauche, Burger à droite */}
        <div className="flex items-center justify-between h-16 md:h-auto">
          {/* Logo en haut à gauche */}
          <div className="flex-shrink-0">
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
          
          {/* Bulles de navigation centrées - Cachées sur mobile */}
          <div className="hidden md:flex items-center space-x-3 flex-1 justify-center">
            <Link
              href="/"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === "/"
                  ? "bg-white text-fady-purple font-semibold shadow-md"
                  : "bg-white text-gray-text hover:text-fady-purple"
              }`}
              style={{border: `2px solid ${pathname === "/" ? "#BC31FC" : "rgba(188, 49, 252, 0.3)"}`}}
            >
              Home
            </Link>
                    <Link
                      href="/user"
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        pathname === "/user"
                          ? "bg-white text-fady-purple font-semibold shadow-md"
                          : "bg-white text-gray-text hover:text-fady-purple"
                      }`}
                      style={{border: `2px solid ${pathname === "/user" ? "#BC31FC" : "rgba(188, 49, 252, 0.3)"}`}}
                    >
                      Clients
                    </Link>
                    <Link
                      href="/pro"
                      className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                        pathname === "/pro"
                          ? "bg-white text-fady-purple font-semibold shadow-md"
                          : "bg-white text-gray-text hover:text-fady-purple"
                      }`}
                      style={{border: `2px solid ${pathname === "/pro" ? "#BC31FC" : "rgba(188, 49, 252, 0.3)"}`}}
                    >
                      Coiffeurs
                    </Link>
            <Link
              href="/contact"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                pathname === "/contact"
                  ? "bg-white text-fady-purple font-semibold shadow-md"
                  : "bg-white text-gray-text hover:text-fady-purple"
              }`}
              style={{border: `2px solid ${pathname === "/contact" ? "#BC31FC" : "rgba(188, 49, 252, 0.3)"}`}}
            >
              Contact
            </Link>
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
          
          {/* Espace pour équilibrer avec le logo - Caché sur mobile */}
          <div className="hidden md:block flex-shrink-0 w-32"></div>
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

