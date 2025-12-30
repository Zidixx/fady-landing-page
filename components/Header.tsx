"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 pt-4 pb-4 relative" style={{ background: 'transparent' }}>
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-auto">
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
          
          {/* Bulles de navigation centrées */}
          <div className="flex items-center space-x-3 flex-1 justify-center">
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
                      User
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
                      Pro
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
          
          {/* Espace pour équilibrer avec le logo */}
          <div className="flex-shrink-0 w-32"></div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="absolute right-4 top-4">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 bg-white rounded-full text-fady-purple transition-all"
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

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 space-y-3">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white ${
                pathname === "/"
                  ? "text-fady-purple font-semibold shadow-md"
                  : "text-gray-text hover:text-fady-purple"
              }`}
              style={{border: `2px solid ${pathname === "/" ? "#BC31FC" : "rgba(188, 49, 252, 0.3)"}`}}
            >
              Home
            </Link>
                    <Link
                      href="/user"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white ${
                        pathname === "/user"
                          ? "text-fady-purple font-semibold shadow-md"
                          : "text-gray-text hover:text-fady-purple"
                      }`}
                      style={{border: `2px solid ${pathname === "/user" ? "#BC31FC" : "rgba(188, 49, 252, 0.3)"}`}}
                    >
                      User
                    </Link>
                    <Link
                      href="/pro"
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white ${
                        pathname === "/pro"
                          ? "text-fady-purple font-semibold shadow-md"
                          : "text-gray-text hover:text-fady-purple"
                      }`}
                      style={{border: `2px solid ${pathname === "/pro" ? "#BC31FC" : "rgba(188, 49, 252, 0.3)"}`}}
                    >
                      Pro
                    </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className={`block px-5 py-2.5 rounded-full text-sm font-medium transition-all bg-white ${
                pathname === "/contact"
                  ? "text-fady-purple font-semibold shadow-md"
                  : "text-gray-text hover:text-fady-purple"
              }`}
              style={{border: `2px solid ${pathname === "/contact" ? "#BC31FC" : "rgba(188, 49, 252, 0.3)"}`}}
            >
              Contact
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}

