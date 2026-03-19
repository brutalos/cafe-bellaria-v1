'use client'

import React from 'react'
import { useTheme } from '@/context/ThemeContext'
import Link from 'next/link'

export default function About() {
  const { theme } = useTheme()

  return (
    <div className="w-full">
      {/* HERO SECTION */}
      <section className="relative min-h-[70vh] flex flex-col items-center justify-center pt-[180px] pb-[100px] px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] text-center transition-theme">
        <div className="max-w-6xl">
          <img
            src={theme === 'light' ? '/images/about-top-day-93fd51ddc2b8.png' : '/images/about-top-night-a1c71c82c93e.png'}
            alt="About Bellaria"
            className="w-full h-auto mb-20 shadow-2xl transition-all duration-700"
          />
          <h1 className="text-[34px] lg:text-[56px] font-serif leading-[1.3] tracking-tight max-w-5xl mx-auto px-4">
            Majestätisch und bürgerlich: Das Café Bellaria steht für 150 Jahre Kaffeehaus-Tradition und ist ein Stück Wiener Geschichte. Ein großes Erbe. Neu belebt.
          </h1>
        </div>
      </section>

      {/* SECTION: DAS CAFÉ */}
      <section className="section-padding bg-current text-[var(--background)] transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div>
            <img 
              src="/images/About_01-3070672153fc.png" 
              alt="Das Café" 
              className="w-full h-auto shadow-2xl"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-[72px] lg:text-[110px] mb-12 leading-[0.9] font-serif tracking-tight">Das Café</h2>
            <p className="text-[20px] lg:text-[26px] leading-relaxed opacity-90 font-light">
              Das Café Bellaria ist das älteste noch immer betriebene Kaffeehaus Wiens. Eröffnet 1870 in einem Gründerzeithaus, liegt es heute an der Schnittstelle von Kultur und Wirtschaft; von Politik und Kunst: zwischen Parlament und Naturhistorischem Museum, zwischen Justizpalast und Hofburg, zwischen Burg- und Volkstheater. Das Bellaria: ehrwürdige Gemäuer, die viele Geschichten erzählen könnten.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: DER NAME */}
      <section className="section-padding transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="order-2 lg:order-1 max-w-2xl lg:ml-auto">
            <h2 className="text-[72px] lg:text-[110px] mb-12 leading-[0.9] font-serif tracking-tight">Der Name</h2>
            <p className="text-[20px] lg:text-[26px] leading-relaxed opacity-90 font-light">
              Taufpate des Café Bellaria ist Kaiser Franz Josef höchstselbst. Der Name des Grätzls – und damit des Cafés – stammt von einer Rampe zur Hofburg, die für Kaiserin Maria Theresia um 1741 gebaut worden war. Wozu? Damit Ihre Majestät ohne Stiegensteigen mit der Kutsche vor ihre Gemächer fahren kann. Und Franz Josef soll dort der guten Luft wegen, der „Bellaria“ eben, gern spazieren gegangen sein.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="/images/About_02-a772dafcd60b.png" 
              alt="Der Name" 
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* SECTION: DAS ERBE */}
      <section className="section-padding bg-current text-[var(--background)] transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div>
            <img 
              src={theme === 'light' ? '/images/About_04-cad5916d631e.png' : '/images/About-04-Night-332f26bb5333.png'} 
              alt="Das Erbe" 
              className="w-full h-auto shadow-2xl transition-all duration-700"
            />
          </div>
          <div className="max-w-2xl">
            <h2 className="text-[72px] lg:text-[110px] mb-12 leading-[0.9] font-serif tracking-tight">Das Erbe</h2>
            <p className="text-[20px] lg:text-[26px] leading-relaxed opacity-90 font-light">
              Das Wiener Kaffeehaus ist seit 2011 Weltkulturerbe der Unesco. Und das völlig zurecht: Es war die Hebamme der Demokratie; der Ort, an dem das Bürgertum die Freiheit entdeckt hat. Und das Wiener Kaffeehaus war der Motor der Wiener Moderne – der literarischen, künstlerischen und wissenschaftlichen Neu-Erkundung der Welt. Das Kaffeehaus: Toasts, Torten – aber auch große Gedanken und wilde G’schichtln.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION: DAS NEUE CAFÉ BELLARIA */}
      <section className="section-padding transition-theme">
        <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32 items-center">
          <div className="order-2 lg:order-1 max-w-2xl lg:ml-auto">
            <h2 className="text-[72px] lg:text-[110px] mb-12 leading-[0.9] font-serif tracking-tight">Das neue Café Bellaria</h2>
            <p className="text-[20px] lg:text-[26px] leading-relaxed opacity-90 font-light">
              Das Café, der Name und das Erbe gehören untrennbar zusammen. Die Gastronomen David Figar und Rubin Okotie haben das Café Bellaria 2021 neu eröffnet. Nicht als Museum, sondern als modernes Lebensgefühl. Denn Traditionen sind mächtig – aber zerbrechlich. Um sie zu bewahren, müssen wir sie immer neu beleben. Ein Wiener Kaffeehaus mit viel Geschichte und zeitgemäßer Gastronomie. Das neue Café Bellaria.
            </p>
          </div>
          <div className="order-1 lg:order-2">
            <img 
              src="/images/About_05-aa1ec7e77cee.png" 
              alt="Das neue Café Bellaria" 
              className="w-full h-auto shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
