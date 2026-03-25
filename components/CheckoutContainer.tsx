'use client';

import { useState, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import StripeProvider from '@/components/StripeProvider';
import StripePaymentForm from '@/components/StripePaymentForm';
import Link from 'next/link';
import { ChevronLeft } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function CheckoutContainer() {
  const { cart, total, clearCart } = useCart();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [shippingData, setShippingData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'Österreich',
  });
  const [showPayment, setShowPayment] = useState(false);
  const router = useRouter();

  const handleStartPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const res = await fetch('/api/checkout/intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 
          items: cart,
          shippingData 
        }),
      });

      const data = await res.json();

      if (data.clientSecret) {
        setClientSecret(data.clientSecret);
        setShowPayment(true);
      } else {
        setError(data.error || 'Fehler beim Initialisieren der Zahlung');
      }
    } catch (err) {
      console.error(err);
      setError('Verbindung zum Server fehlgeschlagen');
    } finally {
      setLoading(false);
    }
  };

  if (cart.length === 0 && !showPayment) {
    return (
      <div className="flex flex-col items-center justify-center py-40">
        <h2 className="text-3xl font-serif mb-8">Dein Warenkorb ist leer</h2>
        <Link href="/shop" className="button-bullet">Zum Shop</Link>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 lg:gap-32">
      {/* Left Column: Form */}
      <div className="space-y-12">
        {!showPayment ? (
          <form onSubmit={handleStartPayment} className="space-y-12 fade-in">
            <section className="space-y-8">
              <h2 className="text-[32px] font-serif tracking-tight border-b border-current/10 pb-4">Kontaktinformationen</h2>
              <div className="space-y-6">
                <input
                  required
                  type="email"
                  placeholder="E-Mail-Adresse"
                  className="w-full bg-transparent border border-current/30 p-6 focus:border-current outline-none transition-colors"
                  value={shippingData.email}
                  onChange={(e) => setShippingData({ ...shippingData, email: e.target.value })}
                />
              </div>
            </section>

            <section className="space-y-8">
              <h2 className="text-[32px] font-serif tracking-tight border-b border-current/10 pb-4">Lieferadresse</h2>
              <div className="grid grid-cols-2 gap-6">
                <input
                  required
                  placeholder="Vorname"
                  className="bg-transparent border border-current/30 p-6 focus:border-current outline-none"
                  value={shippingData.firstName}
                  onChange={(e) => setShippingData({ ...shippingData, firstName: e.target.value })}
                />
                <input
                  required
                  placeholder="Nachname"
                  className="bg-transparent border border-current/30 p-6 focus:border-current outline-none"
                  value={shippingData.lastName}
                  onChange={(e) => setShippingData({ ...shippingData, lastName: e.target.value })}
                />
                <input
                  required
                  placeholder="Adresse"
                  className="col-span-2 bg-transparent border border-current/30 p-6 focus:border-current outline-none"
                  value={shippingData.address}
                  onChange={(e) => setShippingData({ ...shippingData, address: e.target.value })}
                />
                <input
                  required
                  placeholder="PLZ"
                  className="bg-transparent border border-current/30 p-6 focus:border-current outline-none"
                  value={shippingData.postalCode}
                  onChange={(e) => setShippingData({ ...shippingData, postalCode: e.target.value })}
                />
                <input
                  required
                  placeholder="Stadt"
                  className="bg-transparent border border-current/30 p-6 focus:border-current outline-none"
                  value={shippingData.city}
                  onChange={(e) => setShippingData({ ...shippingData, city: e.target.value })}
                />
              </div>
            </section>

            {error && <p className="text-red-500 font-bold">{error}</p>}

            <button
              type="submit"
              disabled={loading}
              className="button-bullet w-full py-6 flex justify-between items-center bg-current text-[var(--background)] disabled:opacity-50"
            >
              <span>{loading ? 'Lade Zahlung...' : 'Weiter zur Zahlung'}</span>
              <span className="font-bold">→</span>
            </button>
          </form>
        ) : (
          <div className="space-y-12 fade-in">
            <button 
              onClick={() => setShowPayment(false)}
              className="flex items-center space-x-2 opacity-50 hover:opacity-100 transition-opacity"
            >
              <ChevronLeft size={16} />
              <span className="text-[11px] font-black uppercase tracking-[0.2em]">Zurück zu den Daten</span>
            </button>
            
            <section className="space-y-8">
              <h2 className="text-[32px] font-serif tracking-tight border-b border-current/10 pb-4">Zahlung</h2>
              {clientSecret && (
                <StripeProvider clientSecret={clientSecret}>
                  <StripePaymentForm 
                    onSuccess={() => {
                      clearCart();
                      router.push('/checkout/success');
                    }} 
                  />
                </StripeProvider>
              )}
            </section>
          </div>
        )}
      </div>

      {/* Right Column: Order Summary */}
      <div className="h-fit sticky top-[160px] border border-current/10 p-12 bg-current/5">
        <h2 className="text-[32px] font-serif mb-12 border-b border-current/20 pb-6">Deine Bestellung</h2>
        <div className="space-y-8 max-h-[40vh] overflow-y-auto mb-12 pr-4 custom-scrollbar">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-[16px]">
              <div className="flex space-x-4 items-center">
                <span className="opacity-50 font-bold">{item.quantity}x</span>
                <span className="font-serif italic">{item.name}</span>
              </div>
              <span className="font-bold">€{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          ))}
        </div>
        
        <div className="space-y-4 pt-8 border-t border-current/20">
          <div className="flex justify-between text-[14px] uppercase tracking-widest opacity-60">
            <span>Zwischensumme</span>
            <span>€{total.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-[14px] uppercase tracking-widest opacity-60">
            <span>Versand</span>
            <span>GRATIS</span>
          </div>
          <div className="flex justify-between items-end pt-8">
            <span className="text-[24px] font-serif italic">Total</span>
            <span className="text-[42px] font-bold tracking-tight">€{total.toFixed(2)}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
