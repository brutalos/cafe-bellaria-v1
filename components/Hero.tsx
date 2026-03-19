export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-24">
      {/* Background Image Placeholder */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/images/light_03-ea012a0444f6.png" 
          alt="Café Bellaria Hero" 
          className="w-full h-full object-cover brightness-75"
        />
        <div className="absolute inset-0 bg-dark/20" />
      </div>

      <div className="relative z-10 text-center text-creme">
        <h1 className="text-8xl md:text-[12rem] font-serif mb-8 leading-none">
          Bella Vienna
        </h1>
        <p className="text-xl md:text-2xl uppercase tracking-[0.3em] font-bold">
          Tradition neu belebt since 1870
        </p>
      </div>
      
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-16 bg-creme" />
      </div>
    </section>
  );
}
