'use client'

import React from 'react'
import { ShoppingCart } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import Link from 'next/link'

export default function CartIcon() {
  const { itemCount } = useCart()

  return (
    <Link href="/cart" className="relative p-2 group">
      <ShoppingCart size={24} className="transition-transform group-hover:scale-110" />
      <span 
        className={`absolute -top-1 -right-1 bg-current text-[var(--background)] text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-bold border-2 border-[var(--background)] transition-all duration-300 ${
          itemCount > 0 ? 'flex' : 'hidden'
        }`}
      >
        {itemCount}
      </span>
    </Link>
  )
}
