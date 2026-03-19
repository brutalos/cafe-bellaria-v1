'use client'

import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'

export default function Events() {
  const { theme } = useTheme()

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center pt-[150px] px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] text-center">
        <div className="max-w-4xl">
          <h1 className="text-[64px] lg:text-[96px] font-serif mb-12 leading-none">Ihre Events</h1>
          <p className="text-[20px] lg:text-[24px] leading-relaxed mb-12">
            Feiern Sie unvergessliche Momente im Café Bellaria – mitten im Herzen Wiens. Ob Geburtstagsfeier, Jubiläum, Firmenfeier oder privates Get-together: Unser traditionsreiches Kaffeehaus bietet den idealen Rahmen für besondere Anlässe.
          </p>
          <button className="button-bullet">
            Anfrage senden
          </button>
        </div>
      </section>

      {/* SECTION: DIE LOCATION */}
      <section className="section-padding bg-current text-[var(--background)] transition-colors duration-500">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <img 
              src={theme === 'light' ? '/images/light_04-1-f511fbb9d470.png' : '/images/dark_04-1-1d62fe9b4bc3.png'} 
              alt="Die Location" 
              className="w-full h-auto"
            />
          </div>
          <div className="max-w-xl">
            <h2 className="text-[64px] lg:text-[96px] mb-10 leading-none">Die Location</h2>
            <p className="text-[20px] lg:text-[24px] leading-relaxed">
              Erleben Sie unser Lokal schon vorab in 360° und entdecken Sie, wo Geschichte, Genuss und Geselligkeit zusammenfinden. Willkommen an einem Ort, an dem jeder Moment besonders wird.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: 360 VIEW (IFRAME) */}
      <section className="section-padding">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)]">
          <div className="aspect-video w-full bg-dark/10 relative overflow-hidden">
             <iframe 
                src="https://my.matterport.com/show/?m=mQ6BSq72xgp" 
                className="absolute inset-0 w-full h-full border-0"
                allowFullScreen
                allow="xr-spatial-tracking"
             />
          </div>
        </div>
      </section>
    </div>
  )
}
