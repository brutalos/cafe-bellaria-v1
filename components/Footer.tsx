'use client'

import React from 'react'
import Link from 'next/link'
import { Instagram, Mail, Phone } from 'lucide-react'
import { useTheme } from '@/context/ThemeContext'

export default function Footer() {
  const { theme } = useTheme()

  return (
    <footer className="bg-current text-[var(--background)] py-40 px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] transition-theme">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-16 lg:gap-24 text-[11px] font-bold tracking-[0.3em] uppercase opacity-85">
        {/* Column 1 */}
        <div className="flex flex-col space-y-8">
          <Link href="/#Menu" className="hover:italic transition-all duration-300">Menüs</Link>
          <Link href="/#Open" className="hover:italic transition-all duration-300">Anfahrt</Link>
        </div>

        {/* Column 2 */}
        <div className="flex flex-col space-y-8">
          <Link href="/about" className="hover:italic transition-all duration-300">About</Link>
          <button onClick={() => {}} className="text-left uppercase hover:italic transition-all duration-300 cursor-pointer">Reservieren</button>
        </div>

        {/* Column 3 */}
        <div className="flex flex-col space-y-8">
          <Link href="/impressum" className="hover:italic transition-all duration-300">Impressum</Link>
          <Link href="/datenschutz" className="hover:italic transition-all duration-300">Datenschutz</Link>
        </div>

        {/* Column 4 */}
        <div className="flex flex-col space-y-8">
          <Link href="/agb" className="hover:italic transition-all duration-300">AGB</Link>
          <a href="https://www.instagram.com/cafe_bellaria/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-3 hover:italic transition-all duration-300">
            <Instagram size={14} strokeWidth={2.5} />
            <span className="tracking-[0.2em]">INSTAGRAM</span>
          </a>
        </div>

        {/* Column 5 */}
        <div className="flex flex-col space-y-8">
          <a href="tel:+43015226085" className="flex items-center space-x-3 hover:italic transition-all duration-300">
            <Phone size={14} strokeWidth={2.5} />
            <span className="tracking-[0.1em] font-medium">+43 (0)1 522 60 85</span>
          </a>
          <a href="mailto:office@cafebellaria.at" className="flex items-center space-x-3 hover:italic transition-all duration-300">
            <Mail size={14} strokeWidth={2.5} />
            <span className="tracking-[0.2em]">E-MAIL</span>
          </a>
        </div>
      </div>

      <div className="mt-40 pt-20 border-t border-[var(--background)]/15 flex flex-col items-center">
        <Link href="/" className="mb-14 group">
          <img src="/images/bellaria_logo_creme-5b1c17803ebd.svg" alt="Café Bellaria" className="h-[45px] opacity-90 transition-all group-hover:opacity-100 group-hover:scale-105" />
        </Link>
        
        <div className="text-[10px] tracking-[0.25em] uppercase opacity-40 text-center space-y-4 font-medium max-w-lg">
          <p>© 2026 Café Bellaria. Alle Rechte vorbehalten.</p>
          <p className="normal-case italic opacity-60">Das älteste noch immer betriebene Kaffeehaus Wiens.</p>
        </div>
      </div>
    </footer>
  )
}
