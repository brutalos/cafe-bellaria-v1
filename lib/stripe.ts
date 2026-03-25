import Stripe from 'stripe';

if (!process.env.STRIPE_SECRET_KEY) {
  // During development, we'll use a placeholder if the key is missing to avoid crashes,
  // but we should warn the user.
  console.warn('STRIPE_SECRET_KEY is not set. Payments will not work.');
}

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || 'sk_test_placeholder');
