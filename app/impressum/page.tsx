'use client'

import React from 'react'

export default function Impressum() {
  return (
    <div className="w-full section-padding px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] pt-[150px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[64px] lg:text-[96px] font-serif mb-20 leading-none text-center">Impressum</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 text-[20px] lg:text-[24px] leading-relaxed">
          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-8 opacity-60">Firma</h2>
            <p>
              RD Bellaria GmbH & Co KG<br />
              Bellariastraße 6<br />
              1010 Wien
            </p>
          </div>

          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-8 opacity-60">Kontakt</h2>
            <p>
              +43 (0)1 522 60 85<br />
              office@cafebellaria.at
            </p>
          </div>

          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-8 opacity-60">Details</h2>
            <p>
              Firmenbuchnummer: FN 522049 w<br />
              Handelsgericht: Wien<br />
              UID: ATU74927109
            </p>
          </div>

          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-8 opacity-60">Geschäftsführung</h2>
            <p>
              David Figar & Rubin Okotie
            </p>
          </div>

          <div>
            <h2 className="text-[14px] font-bold uppercase tracking-[0.2em] mb-8 opacity-60">Credits</h2>
            <p>
              Branding & Screendesign: <a href="https://www.bureauf.com" target="_blank" className="hover:italic underline">Bureau F -</a><br />
              Code: <a href="https://www.wolfgangschellnast.com" target="_blank" className="hover:italic underline">Wolfgang Schellnast</a><br />
              Architektur: <a href="https://buroklk.com/" target="_blank" className="hover:italic underline">Büro KLK</a><br />
              Texte: Dominik Sinnreich
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
