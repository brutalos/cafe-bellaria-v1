export default function Contact() {
  return (
    <main className="min-h-screen pt-40 pb-20">
      <div className="container mx-auto px-4 max-w-6xl">
        <h1 className="text-6xl font-serif text-center mb-20">Kontakt</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
          <div>
            <h2 className="text-3xl font-serif mb-8">Besuchen Sie uns</h2>
            <div className="space-y-12">
              <div>
                <h4 className="uppercase tracking-widest text-xs font-bold opacity-40 mb-4">Adresse</h4>
                <p className="text-xl">Bellariastraße 6<br />1010 Wien, Österreich</p>
              </div>
              
              <div>
                <h4 className="uppercase tracking-widest text-xs font-bold opacity-40 mb-4">Anfragen</h4>
                <p className="text-xl mb-2">office@cafebellaria.at</p>
                <p className="text-xl">+43 (0)1 522 60 85</p>
              </div>

              <div>
                <h4 className="uppercase tracking-widest text-xs font-bold opacity-40 mb-4">Öffnungszeiten</h4>
                <p className="text-xl mb-2">Mo - Fr: 08:00 - 23:00</p>
                <p className="text-xl">Sa - So: 09:00 - 23:00</p>
              </div>
            </div>
          </div>
          
          <div className="aspect-square bg-dark/10">
            {/* Google Maps Embed Placeholder */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m12!1m3!1d2658.9818451848!2d16.358245315651!3d48.205021979228!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476d07963d6e5077%3A0x8f0c977608e67153!2sCaf%C3%A9%20Bellaria!5e0!3m2!1sen!2sat!4v1632345678901!5m2!1sen!2sat" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
