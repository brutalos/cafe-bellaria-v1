'use client'

import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'

export default function Home() {
  const { theme } = useTheme()

  return (
    <div className="w-full">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[100vh] flex flex-col items-center justify-center pt-[160px] pb-[100px] px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] text-center overflow-hidden transition-theme">
        <div className="relative z-10 flex flex-col items-center max-w-7xl fade-in-up">
          {/* Status Badge */}
          <div className="mb-16">
            <img
              src={theme === 'light' ? '/images/gruppe_day-275623e97843.svg' : '/images/gruppe_night-1bb1c7e62c38.svg'}
              alt="Café Bellaria"
              className="h-[160px] lg:h-[260px] object-contain transition-all duration-1000 ease-in-out"
            />
          </div>

          <div className="mb-10 uppercase tracking-[0.5em] text-[11px] lg:text-[13px] font-bold opacity-70">
             Cafe &nbsp; • &nbsp; Bar &nbsp; • &nbsp; Restaurant
          </div>

          <h1 className="text-[28px] lg:text-[46px] font-serif leading-[1.4] mb-20 max-w-6xl px-4 lg:px-20 tracking-tight">
            Atmen Sie doch mal ein. Spüren Sie schon die gute Luft, die dem Café Bellaria ihren Namen gibt? Bei uns finden Sie den Duft des Wiener Kaffeehauses. Aber nicht als Museum, sondern als modernes Lebensgefühl. Willkommen im Café Bellaria.
          </h1>

          <div className="flex flex-col md:flex-row gap-10 mt-6">
            <button className="button-bullet border-[1px]">
              Reservieren
            </button>
            <Link href="/about" className="button-bullet border-[1px]">
              Mehr erfahren
            </Link>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-[15%] left-0 w-full h-[70%] pointer-events-none opacity-5 lg:opacity-20 flex justify-between items-center transition-all duration-1000">
            <img 
                src={theme === 'light' ? '/images/light_02-6cd1a1c7b471.png' : '/images/dark_02-8addaed1180b.png'} 
                alt="" 
                className="hidden lg:block h-full object-contain -translate-x-[25%]"
            />
             <img 
                src={theme === 'light' ? '/images/light_02-6cd1a1c7b471.png' : '/images/dark_02-8addaed1180b.png'} 
                alt="" 
                className="hidden lg:block h-full object-contain translate-x-[25%] scale-x-[-1]"
            />
        </div>
      </section>

      {/* SECTION 2: BELLA VIENNA */}
      <section className="section-padding bg-current text-[var(--background)] transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-48 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={theme === 'light' ? '/images/light_03-ea012a0444f6.png' : '/images/dark_03-3ffa7d93f725.png'} 
              alt="Bella Vienna" 
              className="w-full h-auto rounded-none transition-all duration-700 hover:scale-[1.02]"
            />
          </div>
          <div className="order-1 lg:order-2 max-w-3xl">
            <h2 className="text-[80px] lg:text-[140px] mb-14 leading-[0.85] font-serif tracking-tighter">Bella Vienna</h2>
            <p className="text-[22px] lg:text-[28px] leading-[1.6] mb-14 opacity-90 font-light max-w-2xl">
              Das Wiener Kaffeehaus ist Teil der Weltkultur. Und das Café Bellaria war von Anfang an Teil dieser Kultur: 1870 eröffnet und seither Treffpunkt für Literaten und Lebemänner, für Kaffeegenießer und Kartenspieler. Aus Kunst, Kultur, Wirtschaft und Politik. Im Herzen Wiens … und der Wiener.
            </p>
            <Link href="/about" className="button-bullet border-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--foreground)]">
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: BELLA VITA */}
      <section className="section-padding transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] grid grid-cols-1 lg:grid-cols-2 gap-32 lg:gap-48 items-center">
          <div className="max-w-3xl lg:ml-auto">
            <h2 className="text-[80px] lg:text-[140px] mb-14 leading-[0.85] font-serif tracking-tighter">Bella Vita</h2>
            <p className="text-[22px] lg:text-[28px] leading-[1.6] mb-14 opacity-90 font-light max-w-2xl">
              Genuss mit Geschichte. Und mit gutem Gewissen. Das Café Bellaria serviert nachhaltig, regional. Von der Sachertorte bis zum Bananenbrot, vom Kalbswiener bis zur Ente Sous Vide: Wir verwöhnen die Wiener und Wienerinnen – und ihre Gäste. Rund um die Uhr: als Café, als Bar und als Restaurant.
            </p>
            <Link href="/about" className="button-bullet">
              Mehr erfahren
            </Link>
          </div>
          <div>
            <img 
              src={theme === 'light' ? '/images/light_04-1-f511fbb9d470.png' : '/images/dark_04-1-1d62fe9b4bc3.png'} 
              alt="Bella Vita" 
              className="w-full h-auto rounded-none transition-all duration-700 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: UNSERE MENÜS */}
      <section id="Menu" className="section-padding bg-current text-[var(--background)] transition-theme text-center">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)]">
          <h2 className="text-[80px] lg:text-[140px] mb-28 leading-[0.85] font-serif tracking-tighter">Unsere Menüs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-7xl mx-auto">
            <a href="/images/Bellaria-Speisekarte-NEU_2-7.pdf" target="_blank" className="button-bullet border-[var(--background)] block py-10 text-[15px] hover:bg-[var(--background)] hover:text-[var(--foreground)]">
              SPEISEKARTE
            </a>
            <a href="/images/Mittagsmenue-KW-12_compressed-1.pdf" target="_blank" className="button-bullet border-[var(--background)] block py-10 text-[15px] hover:bg-[var(--background)] hover:text-[var(--foreground)]">
              MITTAGSMENÜ
            </a>
            <a href="/images/Bellaria-Speisekarte-NEU_2-6.pdf" target="_blank" className="button-bullet border-[var(--background)] block py-10 text-[15px] hover:bg-[var(--background)] hover:text-[var(--foreground)]">
              FRÜHSTÜCK
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: DIE GESCHICHTE */}
      <section className="section-padding transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] flex flex-col items-center text-center">
          <h2 className="text-[80px] lg:text-[140px] mb-16 leading-[0.85] font-serif tracking-tighter">Die Geschichte</h2>
          <p className="max-w-5xl text-[22px] lg:text-[28px] leading-[1.6] mb-24 opacity-90 font-light px-4">
            Das Café Bellaria ist das älteste noch immer betriebene Kaffeehaus Wiens. Eröffnet 1870 in einem Gründerzeithaus, liegt es heute an der Schnittstelle von Kultur und Wirtschaft; von Politik und Kunst: zwischen Parlament und Naturhistorischem Museum, zwischen Justizpalast und Hofburg, zwischen Burg- und Volkstheater. Das Bellaria: ehrwürdige Gemäuer, die viele Geschichten erzählen könnten.
          </p>
          <div className="relative w-full max-w-7xl">
            <img 
              src={theme === 'light' ? '/images/light_05-b68c60b89d0c.png' : '/images/dark_05-1-d3ccdf6c4edc.png'} 
              alt="Geschichte" 
              className="w-full h-auto rounded-none transition-all duration-700"
            />
          </div>
          <div className="mt-20">
             <Link href="/about" className="button-bullet">Mehr erfahren</Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT / INFO */}
      <section id="Open" className="section-padding bg-current text-[var(--background)] transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-32 text-center uppercase tracking-[0.4em] font-bold">
            <div className="flex flex-col items-center">
              <h3 className="text-[10px] mb-12 opacity-50 font-sans tracking-[0.5em] font-black">Adresse</h3>
              <p className="text-[20px] lg:text-[26px] font-sans font-medium leading-relaxed">Bellariastraße 6<br />1010 Wien</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-[10px] mb-12 opacity-50 font-sans tracking-[0.5em] font-black">Öffnungszeiten</h3>
              <p className="text-[20px] lg:text-[26px] font-sans font-medium leading-relaxed">MO-FR: 08:00 – 23:00<br />SA-SO: 09:00 – 23:00</p>
            </div>
            <div className="flex flex-col items-center">
              <h3 className="text-[10px] mb-12 opacity-50 font-sans tracking-[0.5em] font-black">Kontakt</h3>
              <p className="text-[20px] lg:text-[26px] font-sans font-medium leading-relaxed">+43 (0)1 522 60 85<br />office@cafebellaria.at</p>
            </div>
          </div>
          
          <div className="mt-60 text-center italic font-serif text-[48px] lg:text-[86px] leading-[1.0] max-w-7xl mx-auto opacity-95 tracking-tighter">
            "Sip your coffee like a princess, dine finely like a queen, get drunk like a kaiser"
          </div>
        </div>
      </section>


      {/* SECTION 2: BELLA VIENNA */}
      <section className="section-padding bg-current text-[var(--background)] transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="order-2 lg:order-1">
            <img 
              src={theme === 'light' ? '/images/light_03-ea012a0444f6.png' : '/images/dark_03-3ffa7d93f725.png'} 
              alt="Bella Vienna" 
              className="w-full h-auto rounded-none shadow-2xl"
            />
          </div>
          <div className="order-1 lg:order-2 max-w-2xl">
            <h2 className="text-[72px] lg:text-[120px] mb-12 leading-[0.9] font-serif tracking-tight">Bella Vienna</h2>
            <p className="text-[20px] lg:text-[26px] leading-relaxed mb-12 opacity-90 font-light">
              Das Wiener Kaffeehaus ist Teil der Weltkultur. Und das Café Bellaria war von Anfang an Teil dieser Kultur: 1870 eröffnet und seither Treffpunkt für Literaten und Lebemänner, für Kaffeegenießer und Kartenspieler. Aus Kunst, Kultur, Wirtschaft und Politik. Im Herzen Wiens … und der Wiener.
            </p>
            <Link href="/about" className="button-bullet border-[var(--background)] hover:bg-[var(--background)] hover:text-[var(--foreground)]">
              Mehr erfahren
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 3: BELLA VITA */}
      <section className="section-padding transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="max-w-2xl lg:ml-auto">
            <h2 className="text-[72px] lg:text-[120px] mb-12 leading-[0.9] font-serif tracking-tight">Bella Vita</h2>
            <p className="text-[20px] lg:text-[26px] leading-relaxed mb-12 opacity-90 font-light">
              Genuss mit Geschichte. Und mit gutem Gewissen. Das Café Bellaria serviert nachhaltig, regional. Von der Sachertorte bis zum Bananenbrot, vom Kalbswiener bis zur Ente Sous Vide: Wir verwöhnen die Wiener und Wienerinnen – und ihre Gäste. Rund um die Uhr: als Café, als Bar und als Restaurant.
            </p>
            <Link href="/about" className="button-bullet">
              Mehr erfahren
            </Link>
          </div>
          <div>
            <img 
              src={theme === 'light' ? '/images/light_04-1-f511fbb9d470.png' : '/images/dark_04-1-1d62fe9b4bc3.png'} 
              alt="Bella Vita" 
              className="w-full h-auto rounded-none shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SECTION 4: UNSERE MENÜS */}
      <section id="Menu" className="section-padding bg-current text-[var(--background)] transition-theme text-center">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)]">
          <h2 className="text-[72px] lg:text-[120px] mb-24 leading-[0.9] font-serif tracking-tight">Unsere Menüs</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            <a href="/images/Bellaria-Speisekarte-NEU_2-7.pdf" target="_blank" className="button-bullet border-[var(--background)] block py-8 text-[16px] hover:bg-[var(--background)] hover:text-[var(--foreground)]">
              SPEISEKARTE
            </a>
            <a href="/images/Mittagsmenue-KW-12_compressed-1.pdf" target="_blank" className="button-bullet border-[var(--background)] block py-8 text-[16px] hover:bg-[var(--background)] hover:text-[var(--foreground)]">
              MITTAGSMENÜ
            </a>
            <a href="/images/Bellaria-Speisekarte-NEU_2-6.pdf" target="_blank" className="button-bullet border-[var(--background)] block py-8 text-[16px] hover:bg-[var(--background)] hover:text-[var(--foreground)]">
              FRÜHSTÜCK
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: DIE GESCHICHTE */}
      <section className="section-padding transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] flex flex-col items-center text-center">
          <h2 className="text-[72px] lg:text-[120px] mb-14 leading-[0.9] font-serif tracking-tight">Die Geschichte</h2>
          <p className="max-w-5xl text-[20px] lg:text-[26px] leading-relaxed mb-20 opacity-90 font-light">
            Das Café Bellaria ist das älteste noch immer betriebene Kaffeehaus Wiens. Eröffnet 1870 in einem Gründerzeithaus, liegt es heute an der Schnittstelle von Kultur und Wirtschaft; von Politik und Kunst: zwischen Parlament und Naturhistorischem Museum, zwischen Justizpalast und Hofburg, zwischen Burg- und Volkstheater. Das Bellaria: ehrwürdige Gemäuer, die viele Geschichten erzählen könnten.
          </p>
          <div className="relative w-full max-w-6xl">
            <img 
              src={theme === 'light' ? '/images/light_05-b68c60b89d0c.png' : '/images/dark_05-1-d3ccdf6c4edc.png'} 
              alt="Geschichte" 
              className="w-full h-auto rounded-none shadow-2xl"
            />
          </div>
          <div className="mt-16">
             <Link href="/about" className="button-bullet">Mehr erfahren</Link>
          </div>
        </div>
      </section>

      {/* SECTION 6: CONTACT / INFO */}
      <section id="Open" className="section-padding bg-current text-[var(--background)] transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-24 text-center uppercase tracking-[0.3em] font-bold">
            <div>
              <h3 className="text-[11px] mb-10 opacity-50 font-sans tracking-[0.4em]">Adresse</h3>
              <p className="text-[20px] lg:text-[24px] font-sans font-medium">Bellariastraße 6<br />1010 Wien</p>
            </div>
            <div>
              <h3 className="text-[11px] mb-10 opacity-50 font-sans tracking-[0.4em]">Öffnungszeiten</h3>
              <p className="text-[20px] lg:text-[24px] font-sans font-medium">MO-FR: 08:00 – 23:00<br />SA-SO: 09:00 – 23:00</p>
            </div>
            <div>
              <h3 className="text-[11px] mb-10 opacity-50 font-sans tracking-[0.4em]">Kontakt</h3>
              <p className="text-[20px] lg:text-[24px] font-sans font-medium">+43 (0)1 522 60 85<br />office@cafebellaria.at</p>
            </div>
          </div>
          
          <div className="mt-48 text-center italic font-serif text-[42px] lg:text-[68px] leading-[1.1] max-w-6xl mx-auto opacity-95 tracking-tight">
            "Sip your coffee like a princess, dine finely like a queen, get drunk like a kaiser"
          </div>
        </div>
      </section>
    </div>
  )
}
