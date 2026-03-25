'use client';

import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { ReactNode } from 'react';
import { useTheme } from '@/context/ThemeContext';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || 'pk_test_placeholder');

interface StripeProviderProps {
  clientSecret: string;
  children: ReactNode;
}

export default function StripeProvider({ clientSecret, children }: StripeProviderProps) {
  const { theme } = useTheme();

  // CRITICAL: Don't mount Elements until clientSecret is a real PaymentIntent secret.
  if (!clientSecret || !clientSecret.includes('_secret_')) {
    return null;
  }

  return (
    <Elements
      stripe={stripePromise}
      options={{
        clientSecret,
        appearance: {
          theme: theme === 'light' ? 'stripe' : 'night',
          variables: {
            colorPrimary: '#0a0a0a',
            colorBackground: theme === 'light' ? '#ffffff' : '#0a0a0a',
            colorText: theme === 'light' ? '#0a0a0a' : '#ffffff',
            borderRadius: '0px',
          },
        },
      }}
    >
      {children}
    </Elements>
  );
}
