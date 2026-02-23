
import React, { useEffect } from 'react';

const AACaps: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light text-slate-900 font-sans">
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-10 lg:py-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-heritage-dark/50 mb-8">
          <a href="/">Home</a>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <a href="/shop">Shop</a>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-primary font-bold">AA Caps</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-heritage-soft rounded-xl overflow-hidden shadow-2xl">
              <img 
                alt="AA Caps" 
                className="w-full h-full object-cover" 
                src="https://picsum.photos/seed/aacaps/600/800"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-xs font-bold uppercase tracking-tighter">Respiratory Wellness</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-heritage-dark leading-[1.1] mb-4">
                AA Caps
              </h1>
              <p className="text-lg text-heritage-dark/70 font-light leading-relaxed">
                A time-tested Ayurvedic formulation for respiratory health and allergy relief. Crafted with potent herbs to strengthen your respiratory system naturally.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-serif font-bold text-primary">₹350.00</span>
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
                <button className="px-5 border-2 border-primary/20 rounded-xl text-primary hover:bg-primary/5 transition-colors">
                  <span className="material-symbols-outlined leading-none">favorite</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <section className="mt-24">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl border border-heritage-soft hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">air</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Clear Breathing</h3>
              <p className="text-sm text-heritage-dark/70 leading-relaxed">
                Supports clear airways and reduces respiratory congestion.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-2xl border border-heritage-soft hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">shield</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Immune Support</h3>
              <p className="text-sm text-heritage-dark/70 leading-relaxed">
                Strengthens natural defenses against seasonal allergies.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-2xl border border-heritage-soft hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">eco</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Natural Relief</h3>
              <p className="text-sm text-heritage-dark/70 leading-relaxed">
                100% Ayurvedic ingredients with no side effects.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default AACaps;
