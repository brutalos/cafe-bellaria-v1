'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useTheme } from '@/context/ThemeContext'
import { Menu, X, Moon, Sun, ShoppingCart } from 'lucide-react'
import CartIcon from './CartIcon'

export default function Navbar() {
  const { theme, toggleTheme } = useTheme()
  const [scrolled, setScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-700 px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] flex items-center justify-between h-[90px] lg:h-[110px] ${
          scrolled ? 'bg-[var(--background)] shadow-sm' : 'bg-transparent'
        }`}
      >
        {/* Logo */}
        <Link href="/" className="relative z-[70]">
          <img
            src={
              theme === 'light'
                ? '/images/bellaria_logo-0e8e67153eab.svg'
                : '/images/bellaria_logo_creme-5b1c17803ebd.svg'
            }
            alt="Café Bellaria"
            className="h-[32px] lg:h-[42px] object-contain transition-all duration-500"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden lg:flex items-center space-x-12 uppercase text-[11px] font-bold tracking-[0.3em]">
          <Link href="/shop" className="hover:italic transition-all duration-300">
            Webshop
          </Link>
          <Link href="/about" className="hover:italic transition-all duration-300">
            About
          </Link>
          <button
            onClick={() => {}} // Reservieren
            className="hover:italic transition-all duration-300 uppercase cursor-pointer"
          >
            Reservieren
          </button>
          <Link href="/#Menu" className="hover:italic transition-all duration-300">
            Menüs
          </Link>
          <Link href="/events" className="hover:italic transition-all duration-300">
            Events
          </Link>
          <Link href="/#Open" className="hover:italic transition-all duration-300">
            Anfahrt
          </Link>

          <div className="flex items-center space-x-6 ml-6">
            <CartIcon />
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="flex items-center space-x-3 border border-current rounded-full px-6 py-2.5 hover:bg-current hover:text-[var(--background)] transition-all duration-500 cursor-pointer"
            >
              {theme === 'light' ? (
                <>
                  <Moon size={13} className="fill-current" />
                  <span className="text-[10px] tracking-[0.2em] font-black">NIGHT</span>
                </>
              ) : (
                <>
                  <Sun size={13} className="fill-current" />
                  <span className="text-[10px] tracking-[0.2em] font-black">DAY</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center space-x-6">
          <CartIcon />
          <button onClick={toggleTheme} className="p-2.5 border border-current rounded-full transition-all duration-500">
            {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setIsMenuOpen(true)}
            className="p-2 transition-transform hover:scale-110"
          >
            <Menu size={30} />
          </button>
        </div>
      </nav>

      {/* Mobile Sidebar Menu */}
      <div
        className={`fixed inset-0 z-[100] transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`absolute inset-0 bg-[var(--background)] transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) flex flex-col p-[var(--spacing-side-mobile)] ${
            isMenuOpen ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <div className="flex justify-between items-center h-[90px]">
             <Link href="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  src={
                    theme === 'light'
                      ? '/images/bellaria_logo-0e8e67153eab.svg'
                      : '/images/bellaria_logo_creme-5b1c17803ebd.svg'
                  }
                  alt="Café Bellaria"
                  className="h-[30px]"
                />
             </Link>
            <button onClick={() => setIsMenuOpen(false)} className="p-2 transition-transform hover:rotate-90">
              <X size={36} strokeWidth={1.5} />
            </button>
          </div>
          
          <div className="flex flex-col space-y-10 text-[42px] font-serif flex-grow justify-center py-10">
            <Link href="/shop" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">
              Webshop
            </Link>
            <Link href="/" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">
              Home
            </Link>
            <Link href="/about" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">
              About
            </Link>
            <button onClick={() => setIsMenuOpen(false)} className="text-left hover:italic transition-all">
              Reservieren
            </button>
            <Link href="/#Menu" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">
              Menüs
            </Link>
            <Link href="/events" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">
              Events
            </Link>
            <Link href="/#Open" onClick={() => setIsMenuOpen(false)} className="hover:italic transition-all">
              Anfahrt
            </Link>
          </div>

          <div className="border-t border-current pt-12 pb-8 grid grid-cols-1 gap-6 text-[12px] font-bold tracking-[0.2em] uppercase opacity-70">
            <div className="flex flex-wrap gap-x-8 gap-y-4">
              <Link href="/impressum" onClick={() => setIsMenuOpen(false)}>
                Impressum
              </Link>
              <Link href="/datenschutz" onClick={() => setIsMenuOpen(false)}>
                Datenschutz
              </Link>
              <Link href="/agb" onClick={() => setIsMenuOpen(false)}>
                AGB
              </Link>
            </div>
            <p className="text-[10px] opacity-50 tracking-[0.1em] normal-case font-normal italic">
              Experience the oldest continuously operated coffee house in Vienna.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}
