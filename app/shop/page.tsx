'use client'

import React, { useEffect, useState } from 'react'
import ProductCard from '@/components/ProductCard'

export default function Shop() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => {
        setProducts(data)
        setLoading(false)
      })
      .catch(err => {
        console.error(err)
        setLoading(false)
      })
  }, [])

  const categories = Array.from(new Set(products.map(p => p.category.name)))

  return (
    <div className="w-full pt-[140px] pb-32 transition-theme">
      <div className="px-[var(--spacing-side-mobile)] lg:px-[var(--spacing-side)]">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-[80px] lg:text-[140px] font-serif mb-8 leading-[0.85] tracking-tighter fade-in-up">Webshop</h1>
          <p className="text-[20px] lg:text-[26px] font-light max-w-3xl mb-24 opacity-80 fade-in-up delay-100">
            Holen Sie sich das Café Bellaria Gefühl nach Hause. Feinste Bohnen, exquisites Porzellan und Wiener Spezialitäten.
          </p>

          {loading ? (
            <div className="flex justify-center py-40">
              <div className="w-12 h-12 border-4 border-current border-t-transparent rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="space-y-32">
              {categories.map(catName => (
                <div key={catName} className="fade-in-up">
                  <h2 className="text-[32px] lg:text-[48px] font-serif mb-12 border-b border-current/20 pb-6 tracking-tight">
                    {catName}
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {products
                      .filter(p => p.category.name === catName)
                      .map(product => (
                        <ProductCard key={product.id} product={product} />
                      ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
