"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Sobre", href: "#sobre" },
  { label: "Benefícios", href: "#beneficios" },
  { label: "Como Funciona", href: "#como-funciona" },
  { label: "Planos", href: "#planos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-cream-50/90 backdrop-blur-md border-b border-sunny-200/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-1.5">
            <span className="font-[family-name:var(--font-pacifico)] text-2xl text-brown-600">
              Little Lunch
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-semibold text-brown-400 hover:text-brown-600 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <a
            href="#planos"
            className="hidden md:inline-flex items-center rounded-full bg-sunny-400 px-5 py-2.5 text-sm font-bold text-brown-700 shadow-md shadow-sunny-400/25 hover:bg-sunny-500 transition-colors"
          >
            Começar Agora
          </a>

          {/* Mobile Toggle */}
          <button
            className="md:hidden text-brown-600"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-cream-50 border-t border-sunny-200/60 px-4 pb-4">
          <nav className="flex flex-col gap-3 pt-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-semibold text-brown-400 hover:text-brown-600 transition-colors py-2"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#planos"
              onClick={() => setMobileOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-sunny-400 px-5 py-2.5 text-sm font-bold text-brown-700 shadow-md shadow-sunny-400/25 hover:bg-sunny-500 transition-colors"
            >
              Começar Agora
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
