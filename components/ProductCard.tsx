'use client'

import React from 'react'
import { useCart } from '@/context/CartContext'
import { ShoppingCart } from 'lucide-react'

interface ProductProps {
  product: {
    id: string;
    name: string;
    description: string | null;
    price: number;
    image: string | null;
  }
}

export default function ProductCard({ product }: ProductProps) {
  const { addToCart } = useCart()

  return (
    <div className="group bg-transparent border border-current transition-all duration-500 hover:shadow-2xl flex flex-col h-full">
      <div className="relative aspect-square overflow-hidden bg-white/5">
        <img
          src={product.image || '/images/placeholder.png'}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="p-8 flex flex-col flex-grow text-left">
        <h3 className="text-[20px] font-serif mb-3 tracking-tight">{product.name}</h3>
        <p className="text-[14px] opacity-70 mb-6 font-light leading-relaxed flex-grow">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between mt-auto pt-6 border-t border-current/10">
          <span className="text-[18px] font-bold tracking-wider">
            €{product.price.toFixed(2)}
          </span>
          <button
            onClick={() => addToCart(product)}
            className="flex items-center space-x-2 text-[11px] font-black uppercase tracking-[0.2em] hover:italic transition-all cursor-pointer group/btn"
          >
            <ShoppingCart size={16} className="transition-transform group-hover/btn:translate-x-1" />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  )
}
