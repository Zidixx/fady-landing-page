import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const uberMove = localFont({
  src: [
    {
      path: "../public/fonts/UberMoveMedium.otf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/UberMoveBold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-uber-move",
  fallback: ["system-ui", "-apple-system", "sans-serif"],
});

export const metadata: Metadata = {
  title: "FADY",
  description: "Trouve un coiffeur quand tu veux, où tu veux. Réservation en salon ou à domicile, disponibilités immédiates. Rejoins la nouvelle génération de coiffeurs.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/logo-onglet.png?v=3", type: "image/png", sizes: "32x32" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-touch-icon.png?v=3",
  },
  openGraph: {
    title: "FADY",
    description: "Trouve un coiffeur quand tu veux, où tu veux. Réservation en salon ou à domicile, disponibilités immédiates.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" style={{ background: '#FFFFFF', overflowX: 'hidden' }}>
      <body className={uberMove.variable} style={{ background: '#FFFFFF', overflowX: 'hidden' }}>
        <div className="relative overflow-x-hidden">
          <Header />
          <main className="relative">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

