import React from 'react';
import Link from 'next/link';
import { CheckCircle } from 'lucide-react';

export default function CheckoutSuccessPage() {
  return (
    <div className="w-full pt-[200px] pb-32 min-h-[80vh] flex flex-col items-center justify-center transition-theme">
      <div className="text-center space-y-12 max-w-2xl px-8">
        <div className="flex justify-center">
          <CheckCircle size={100} strokeWidth={1} className="text-current opacity-20" />
        </div>
        <h1 className="text-[64px] lg:text-[100px] font-serif leading-[0.85] tracking-tighter">Zahlung erfolgreich</h1>
        <p className="text-[20px] lg:text-[26px] opacity-70 font-light leading-relaxed">
          Vielen Dank für Ihre Bestellung. Wir bereiten Ihre Wiener Spezialitäten mit größter Sorgfalt vor. Sie erhalten in Kürze eine Bestätigungs-E-Mail.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center pt-8">
          <Link href="/shop" className="button-bullet">Weiter shoppen</Link>
          <Link href="/" className="button-bullet border-current/20 opacity-60 hover:opacity-100">Zur Startseite</Link>
        </div>
      </div>
    </div>
  );
}
