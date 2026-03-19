"use client";

import { useState } from "react";

export default function Reservations() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    guests: 2,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Vielen Dank für Ihre Reservierung! Wir werden Sie in Kürze kontaktieren.");
  };

  return (
    <main className="min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-6xl font-serif text-center mb-8">Reservierung</h1>
        <p className="text-center text-lg opacity-60 mb-12">
          Wir freuen uns darauf, Sie im Café Bellaria begrüßen zu dürfen. 
          Für Gruppen über 10 Personen kontaktieren Sie uns bitte telefonisch.
        </p>

        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="uppercase tracking-widest text-[10px] font-bold opacity-40">Name</label>
              <input 
                type="text" 
                required 
                className="bg-transparent border-b border-dark/20 py-2 focus:border-dark outline-none transition-colors"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="uppercase tracking-widest text-[10px] font-bold opacity-40">E-Mail</label>
              <input 
                type="email" 
                required 
                className="bg-transparent border-b border-dark/20 py-2 focus:border-dark outline-none transition-colors"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col space-y-2">
              <label className="uppercase tracking-widest text-[10px] font-bold opacity-40">Datum</label>
              <input 
                type="date" 
                required 
                className="bg-transparent border-b border-dark/20 py-2 focus:border-dark outline-none transition-colors"
                value={formData.date}
                onChange={(e) => setFormData({...formData, date: e.target.value})}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="uppercase tracking-widest text-[10px] font-bold opacity-40">Uhrzeit</label>
              <input 
                type="time" 
                required 
                className="bg-transparent border-b border-dark/20 py-2 focus:border-dark outline-none transition-colors"
                value={formData.time}
                onChange={(e) => setFormData({...formData, time: e.target.value})}
              />
            </div>
            <div className="flex flex-col space-y-2">
              <label className="uppercase tracking-widest text-[10px] font-bold opacity-40">Personen</label>
              <select 
                className="bg-transparent border-b border-dark/20 py-2 focus:border-dark outline-none transition-colors"
                value={formData.guests}
                onChange={(e) => setFormData({...formData, guests: parseInt(e.target.value)})}
              >
                {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n}>{n}</option>)}
              </select>
            </div>
          </div>

          <button type="submit" className="w-full bg-dark text-creme py-5 uppercase tracking-widest text-xs font-bold hover:bg-dark/90 transition-colors">
            Tisch reservieren
          </button>
        </form>
      </div>
    </main>
  );
}
