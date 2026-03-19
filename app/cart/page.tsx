'use client'

import React from 'react'
import { useCart } from '@/context/CartContext'
import { Trash2, Plus, Minus, ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function Cart() {
  const { cart, total, removeFromCart, updateQuantity, itemCount } = useCart()

  if (itemCount === 0) {
    return (
      <div className="w-full pt-[200px] pb-32 min-h-[80vh] flex flex-col items-center justify-center transition-theme">
        <h1 className="text-[48px] lg:text-[72px] font-serif mb-8 tracking-tighter">Dein Warenkorb ist leer</h1>
        <p className="text-[18px] opacity-70 mb-12 max-w-md text-center">Entdecke unsere Kaffeesorten und Spezialitäten im Webshop.</p>
        <Link href="/shop" className="button-bullet">Zum Webshop</Link>
      </div>
    )
  }

  return (
    <div className="w-full pt-[140px] pb-32 transition-theme">
      <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[80px] lg:text-[140px] font-serif mb-24 leading-[0.85] tracking-tighter">Warenkorb</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-24">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-10">
              {cart.map((item) => (
                <div key={item.id} className="flex items-center space-x-10 py-10 border-b border-current/10">
                  <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white/5 border border-current flex-shrink-0">
                    <img
                      src={item.image || '/images/placeholder.png'}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-[20px] lg:text-[24px] font-serif mb-2 tracking-tight">{item.name}</h3>
                    <p className="text-[14px] opacity-60 mb-6 font-bold tracking-widest uppercase">€{item.price.toFixed(2)}</p>
                    
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center border border-current rounded-full px-4 py-2">
                        <button 
                          onClick={() => updateQuantity(item.id, -1)}
                          className="p-1 hover:text-accent transition-colors"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="mx-4 text-[14px] font-bold w-4 text-center">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, 1)}
                          className="p-1 hover:text-accent transition-colors"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      
                      <button 
                        onClick={() => removeFromCart(item.id)}
                        className="text-current opacity-40 hover:opacity-100 transition-opacity p-2"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                  
                  <div className="text-right hidden sm:block">
                    <p className="text-[20px] font-bold">€{(item.price * item.quantity).toFixed(2)}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary */}
            <div className="lg:sticky lg:top-[160px] h-fit">
              <div className="border border-current p-12 space-y-10">
                <h2 className="text-[32px] font-serif tracking-tight border-b border-current/10 pb-6">Übersicht</h2>
                
                <div className="space-y-6">
                  <div className="flex justify-between text-[14px] uppercase tracking-widest font-bold opacity-70">
                    <span>Zwischensumme</span>
                    <span>€{total.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-[14px] uppercase tracking-widest font-bold opacity-70">
                    <span>Versand</span>
                    <span>GRATIS</span>
                  </div>
                  
                  <div className="pt-10 border-t border-current/20 flex justify-between items-end">
                    <span className="text-[20px] font-serif italic">Total</span>
                    <span className="text-[36px] font-bold tracking-tight">€{total.toFixed(2)}</span>
                  </div>
                </div>
                
                <button className="button-bullet w-full py-6 group flex justify-between items-center bg-current text-[var(--background)]">
                  <span>Zur Kasse</span>
                  <ArrowRight size={20} className="transition-transform group-hover:translate-x-2" />
                </button>
                
                <p className="text-[10px] opacity-40 text-center uppercase tracking-widest leading-loose">
                  Inkl. MwSt. zzgl. Versandkosten (falls zutreffend). Kostenloser Versand ab €50.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
