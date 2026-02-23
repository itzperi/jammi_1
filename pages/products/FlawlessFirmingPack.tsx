
import React, { useEffect } from 'react';

const FlawlessFirmingPack: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light text-slate-900 font-sans">
      <main className="max-w-7xl mx-auto px-6 lg:px-20 py-10 lg:py-16">
        {/* Breadcrumbs */}
        <nav className="flex items-center gap-2 text-xs uppercase tracking-widest text-heritage-dark/50 mb-8">
          <a href="#">Home</a>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <a href="#">Ayurvedic Care</a>
          <span className="material-symbols-outlined text-[10px]">chevron_right</span>
          <span className="text-primary font-bold">Flawless Firming Pack</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-heritage-soft rounded-xl overflow-hidden shadow-2xl">
              <img 
                alt="Flawless Firming Pack" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBpW7TPs6FSSNxc9twszyAA7LCwmGyQSwJx4ghMfE3-3c2fFK6LB37EZ5Ju2J5nc8c5Ks0_IOrt6uVX9ebDQlnkKR6VnzFZC-rn4b6rpn_ObjEU7cxwVkSWuu1K9nRL-wRo3SxBfCWs_wEdkXi7ee8eSCJoKo98_WvWtq-i1f1nTk0pVKJ3ie1WsforjWDb27HlkSDT6t1EQXaSp7eIXYJhvwEOWLsG8PxjMENh2kwpT5qAmNhfrRQCBLDtzEiN6wjO9JOzxdkzSw8"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-xs font-bold uppercase tracking-tighter">Anti-Ageing Ritual</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-heritage-dark leading-[1.1] mb-4">
                Flawless Revitalizing & Firming Pack
              </h1>
              <p className="text-lg text-heritage-dark/70 font-light leading-relaxed">
                A potent blend of traditional botanicals designed to firm, lift, and revitalize your skin.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-serif font-bold text-primary">₹1,250.00</span>
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
                <span className="material-symbols-outlined text-primary text-3xl">unfold_more</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Firming</h3>
              <p className="text-sm text-heritage-dark/70 leading-relaxed">
                Improves skin elasticity and reduces sagging.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-2xl border border-heritage-soft hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">auto_awesome</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Revitalizing</h3>
              <p className="text-sm text-heritage-dark/70 leading-relaxed">
                Restores natural glow and youthfulness.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-2xl border border-heritage-soft hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">history_edu</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Vedic Formulation</h3>
              <p className="text-sm text-heritage-dark/70 leading-relaxed">
                Time-tested herbs for modern skin concerns.
              </p>
            </div>
          </div>
        </section>

        {/* Ritual Section */}
        <section className="mt-24 bg-heritage-dark text-white rounded-[2rem] overflow-hidden p-10 lg:p-20 relative">
          <div className="relative z-10 max-w-4xl">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">The Firming Ritual</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-12">Restoration in Four Steps</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Mix</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Mix with rose water or milk to form a smooth paste.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Apply</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Apply evenly on face and neck, avoiding the eyes.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rest</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Leave for 15-20 minutes until dry.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">04</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Rinse</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Wash off with cool water and pat dry.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FlawlessFirmingPack;
