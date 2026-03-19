"use client";

import { useState } from "react";

const menuItems = [
  { id: 1, name: "Bananenbrot", description: "Hausgemacht, getoastet mit Ahornsirup", price: 6.5, category: "Breakfast" },
  { id: 2, name: "Kalbswiener", description: "Mit Senf, Kren und Handsemmel", price: 12.5, category: "Lunch" },
  { id: 3, name: "Sachertorte", description: "Die klassische Wiener Verführung", price: 7.2, category: "Dessert" },
  { id: 4, name: "Ente Sous Vide", description: "Mit Rotkraut und Serviettenknödel", price: 24.5, category: "Dinner" },
];

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert"];

  const filteredItems = activeCategory === "All" 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20">
      <div className="flex flex-wrap justify-center gap-8 mb-16 uppercase tracking-widest text-xs font-bold">
        {categories.map(cat => (
          <button 
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`${activeCategory === cat ? 'opacity-100 border-b border-dark' : 'opacity-40'} pb-2 hover:opacity-100 transition-opacity`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12">
        {filteredItems.map(item => (
          <div key={item.id} className="flex justify-between items-start border-b border-dark/10 pb-6 group">
            <div className="flex-1 pr-8">
              <h3 className="text-xl font-serif mb-2 group-hover:opacity-60 transition-opacity">{item.name}</h3>
              <p className="text-sm opacity-60 italic">{item.description}</p>
            </div>
            <div className="text-lg font-bold">
              € {item.price.toFixed(2)}
            </div>
          </div>
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <button className="bg-dark text-creme px-12 py-4 uppercase tracking-widest text-xs font-bold hover:bg-dark/90 transition-colors">
          Vollständige Speisekarte ansehen
        </button>
      </div>
    </section>
  );
}
