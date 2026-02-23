
import React, { useEffect } from 'react';

const Combifore: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light text-slate-900 font-sans">
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-10 lg:py-16">
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-heritage-dark/50 mb-8">
          <a href="/">Home</a>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <a href="/shop">Wellness</a>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-primary font-bold">Combifore</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div className="aspect-[4/5] bg-heritage-soft rounded-xl overflow-hidden shadow-2xl">
            <img 
              alt="Combifore" 
              className="w-full h-full object-cover" 
              src="https://picsum.photos/seed/combifore/600/800"
            />
          </div>

          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-xs font-bold uppercase tracking-tighter">Immunity Booster</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-heritage-dark leading-[1.1] mb-4">
                Combifore
              </h1>
              <p className="text-lg text-heritage-dark/70 font-light leading-relaxed">
                A comprehensive blend of herbs to strengthen your natural defenses. Combifore is designed to revitalize your body and mind, providing a holistic approach to immunity.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-serif font-bold text-primary">₹420.00</span>
            </div>
            <div className="space-y-4 pt-4 border-t border-heritage-soft">
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold uppercase tracking-widest text-heritage-dark/60">Quantity</span>
                <div className="flex items-center border border-heritage-soft rounded-lg overflow-hidden">
                  <button className="px-4 py-2 hover:bg-primary/10 transition-colors">-</button>
                  <span className="px-4 py-2 font-bold min-w-[3rem] text-center">1</span>
                  <button className="px-4 py-2 hover:bg-primary/10 transition-colors">+</button>
                </div>
              </div>
              <div className="flex gap-4">
                <button className="flex-1 bg-primary text-white py-4 rounded-xl font-bold text-lg shadow-xl shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3">
                  <span className="material-symbols-outlined">shopping_cart</span>
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Combifore;
