'use client';

import { useState } from 'react';
import { useStripe, useElements, PaymentElement } from '@stripe/react-stripe-js';
import { useCart } from '@/context/CartContext';

interface StripePaymentFormProps {
  onSuccess?: () => void;
  returnUrl?: string;
}

export default function StripePaymentForm({ onSuccess, returnUrl }: StripePaymentFormProps) {
  const stripe = useStripe();
  const elements = useElements();
  const { clearCart } = useCart();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!stripe || !elements) return;

    setLoading(true);
    setError(null);

    const { error: submitError } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: returnUrl || `${window.location.origin}/checkout/success`,
      },
      redirect: 'if_required',
    });

    if (submitError) {
      setError(submitError.message || 'Zahlung fehlgeschlagen');
      setLoading(false);
    } else {
      // Payment succeeded without redirect (e.g. some card payments)
      clearCart();
      onSuccess?.();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      <PaymentElement />
      {error && <p className="text-red-500 text-sm mt-4 font-bold">{error}</p>}
      <button
        type="submit"
        disabled={!stripe || loading}
        className="button-bullet w-full py-6 flex justify-between items-center bg-current text-[var(--background)] disabled:opacity-50"
      >
        <span>{loading ? 'Verarbeite...' : 'Zahlung abschließen'}</span>
        <span className="font-bold">→</span>
      </button>
    </form>
  );
}
