import React from 'react';
import CheckoutContainer from '@/components/CheckoutContainer';

export default function CheckoutPage() {
  return (
    <div className="w-full pt-[140px] pb-32 transition-theme">
      <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[80px] lg:text-[140px] font-serif mb-24 leading-[0.85] tracking-tighter">Checkout</h1>
          <CheckoutContainer />
        </div>
      </div>
    </div>
  );
}
