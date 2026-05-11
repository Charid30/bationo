"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { href: "#about", label: "À propos" },
  { href: "#skills", label: "Compétences" },
  { href: "#projects", label: "Projets" },
  { href: "#experience", label: "Expériences" },
  { href: "#education", label: "Formation" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Empêche le scroll quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* Barre de navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
          scrolled || menuOpen
            ? "bg-[#050508] border-b border-[rgba(0,255,136,0.15)]"
            : "bg-[#050508]/80 backdrop-blur-md"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo */}
          <a href="#hero" className="font-mono text-sm font-bold z-[101] relative">
            <span className="text-[#00ff88]">&gt;</span>{" "}
            <span className="text-white">BATIONO</span>
            <span className="text-[#00ff88] cursor-blink">_</span>
          </a>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="text-sm text-[#64748b] hover:text-[#00ff88] transition-colors duration-200"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Desktop CTA */}
          <a
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/CV_Bationo_Ulrich.pdf`}
            download
            className="hidden md:inline-flex items-center gap-2 px-4 py-2 text-sm font-medium border border-[#00ff88] text-[#00ff88] rounded-lg hover:bg-[#00ff88] hover:text-black transition-all duration-200"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Télécharger CV
          </a>

          {/* Hamburger — mobile uniquement */}
          <button
            type="button"
            className="md:hidden relative z-[101] w-10 h-10 flex items-center justify-center text-[#00ff88] rounded-lg"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Menu mobile — overlay fixe indépendant */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-[99] bg-[#050508] flex flex-col md:hidden"
          style={{ paddingTop: "72px" }}
        >
          <div className="px-8 py-8 flex flex-col gap-2 flex-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-[#94a3b8] hover:text-[#00ff88] transition-colors py-3 border-b border-[rgba(255,255,255,0.05)]"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="mt-8">
              <a
                href={`${process.env.NEXT_PUBLIC_BASE_PATH || ""}/CV_Bationo_Ulrich.pdf`}
                download
                className="inline-flex items-center gap-2 px-6 py-4 text-base font-medium border border-[#00ff88] text-[#00ff88] rounded-xl w-full justify-center"
                onClick={() => setMenuOpen(false)}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Télécharger CV
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
