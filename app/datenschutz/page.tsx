'use client'

import React from 'react'

export default function Datenschutz() {
  return (
    <div className="w-full section-padding px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)] pt-[150px]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-[64px] lg:text-[96px] font-serif mb-20 leading-none text-center">Datenschutz</h1>
        
        <div className="space-y-12 text-[20px] lg:text-[24px] leading-relaxed">
          <p>
            Wir verarbeiten Ihre personenbezogenen Daten, die unter folgende Datenkategorien fallen:
          </p>
          <ul className="list-disc pl-10 space-y-4">
            <li>Name/Firma,</li>
            <li>Beruf/Berufsbezeichnung,</li>
            <li>Geburtsdatum,</li>
            <li>Firmenbuchnummer,</li>
            <li>Ansprechperson,</li>
            <li>Geschäftsanschrift und sonstige Adressen des Kunden,</li>
            <li>Kontaktdaten (Telefonnummer, Telefaxnummer, E-Mail-Adresse, etc.)</li>
            <li>Bankverbindungen, Kreditkartendaten,</li>
            <li>Bestelldaten,</li>
            <li>UID-Nummer,</li>
            <li>Kundenserviceanfragen</li>
          </ul>

          <p>
            Sie haben uns Daten über sich freiwillig zur Verfügung gestellt und wir verarbeiten diese Daten auf Grundlage Ihrer Einwilligung zu folgenden Zwecken:
          </p>
          <ul className="list-disc pl-10 space-y-4">
            <li>Betreuung des Kunden sowie</li>
            <li>für eigene Werbezwecke, beispielsweise zur Zusendung von Angeboten, Werbeprospekten und Newsletter (in Papier- und elektronischer Form), sowie zum Zwecke des Hinweises auf die zum Kunden bestehende oder vormalige Geschäftsbeziehung (Referenzhinweis).</li>
          </ul>

          <p>
            Sie können diese Einwilligung jederzeit widerrufen. Ein Widerruf hat zur Folge, dass wir Ihre Daten ab diesem Zeitpunkt zu oben genannten Zwecken nicht mehr verarbeiten.
          </p>
          
          <p>
            Für einen Widerruf wenden Sie sich bitte an: <a href="mailto:office@cafebellaria.at" className="underline">office@cafebellaria.at</a>
          </p>

          <p>
            Die von Ihnen bereit gestellten Daten sind weiters zur Vertragserfüllung bzw. zur Durchführung vorvertraglicher Maßnahmen erforderlich. Ohne diese Daten können wir den Vertrag mit Ihnen nicht abschließen.
          </p>

          <p>
            Wir speichern Ihre Daten 60 Tage. Für diese Datenverarbeitung ziehen wir Auftragsverarbeiter heran. Wir geben Ihre Daten an folgende Empfänger bzw. Empfängerkategorien weiter an Quandoo zwecks Reservierung.
          </p>

          <h2 className="text-[32px] font-serif mt-20 mb-8">Rechtsbehelfsbelehrung</h2>
          <p>
            Ihnen stehen grundsätzlich die Rechte auf Auskunft, Berichtigung, Löschung, Einschränkung, Datenübertragbarkeit und Widerspruch zu. Dafür wenden Sie sich an uns. Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche sonst in einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. In Österreich ist die <a href="https://www.dsb.gv.at/" target="_blank" className="underline">Datenschutzbehörde</a> zuständig.
          </p>
        </div>
      </div>
    </div>
  )
}
