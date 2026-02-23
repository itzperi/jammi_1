
import React, { useEffect } from 'react';

const GlowComplexionCream: React.FC = () => {
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
          <span className="text-primary font-bold">Glow Complexion Cream</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-heritage-soft rounded-xl overflow-hidden shadow-2xl">
              <img 
                alt="Glow Complexion Cream" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx5SCDdEWBP1aXLSfwcjplrzr4lpKleg5lSQotu3PZcBUkL0XlXJOeXtG1SWmiRCMEaN7_jQkwNfez4GMKn5NJIneEzN1sGYX__amkygDCcWys4uazuMMz-wqKkfX95otuPKt_vGa21Od690Oo_GQxuHehfwzGZEIIE8Py6mPIj5dG1e_HqOjsq3Ma_Sn66x8pF66A9b0TE0C_eSkufC0JSN1eEbXFSXmPiYGoGRpg-pNCBTkZEdmzfE4qIG0fcWWcXzW3O0lLBW4"
              />
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-xs font-bold uppercase tracking-tighter">Ancient Ayurvedic Wisdom</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-heritage-dark leading-[1.1] mb-4">
                Glow Complexion Cream
              </h1>
              <p className="text-lg text-heritage-dark/70 font-light leading-relaxed">
                Unlock modern radiance through ancient secrets. A luxurious, transformative blend of pure Kesar Saffron and Sacred Lotus designed to brighten, hydrate, and transcend ordinary skincare.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-serif font-bold text-primary">₹3,999.00</span>
              <span className="text-lg text-slate-400 line-through">₹5,300.00</span>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Save 25%</span>
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

        {/* Botanicals Section */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-heritage-dark mb-4 italic">Key Botanicals</h2>
            <p className="text-heritage-dark/60 max-w-2xl mx-auto">
              Pure ingredients sourced from the heart of tradition.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center border border-primary/10 hover:shadow-xl transition-shadow">
              <img 
                alt="Saffron" 
                className="w-40 h-40 rounded-full object-cover border-4 border-primary/20" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCqlKiMAsUjtVFQQ9Fl_wqjX_tkSh_2ywg_5olZkwiVVWKLKof6LiNbYPzi3kEXi6qd0lMpHoV4e1mkBOGhtAp-VJiWJwEwsxVfea4SzBFgP2tpcGNVyaL-8hvyJ9NbBT76DXrqFu5_t-kx449kNLZqlRon7hkGZ6vIIcSQVK4Sf1efhKMV6OTj4C7aQkfefrP-iXQREDvm1g_HbhIL5iTUIr9YJ_QkKlvm_nmqdCVnrudWN7zYvu5BjKh5i0qcOfjNE6F8Snxzc0k"
              />
              <div className="space-y-3">
                <h4 className="text-2xl font-serif font-bold text-primary italic">Saffron (Kesar)</h4>
                <p className="text-slate-600 leading-relaxed font-dm">
                  Known as 'Red Gold' in Ayurveda, Saffron is a potent antioxidant that naturally brightens the complexion, fades dark spots, and imparts a celestial glow.
                </p>
              </div>
            </div>
            <div className="bg-white p-8 rounded-2xl flex flex-col md:flex-row gap-8 items-center border border-primary/10 hover:shadow-xl transition-shadow">
              <img 
                alt="Sacred Lotus" 
                className="w-40 h-40 rounded-full object-cover border-4 border-primary/20" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNQdUvHeHPTgN5tmmFL6IaodxcoarraQU1YrrlDA0bUI8THuDSBF8-JwvDvhElubAKBEmfGHeWYK858vMmSu3BqFK2YN6P7B2LEBsCd6jTMxszlAx3hqllsPtFGJqhco73J2YHU-zvJrB6n_7iKvZ9A_ALGFdupQBGq_pDlIxs7jokZQ5qE1WzERxO7TPr3coMW74tbIAm6EOdJtlaMHYON4LarGXgWVLh7PfikigJjfCDRXSO3LGxGCbvs7u8cWs9-oMMrN8e15w"
              />
              <div className="space-y-3">
                <h4 className="text-2xl font-serif font-bold text-primary italic">Sacred Lotus</h4>
                <p className="text-slate-600 leading-relaxed font-dm">
                  A symbol of purity, Lotus extract provides deep hydration while soothing inflammation and refining skin texture for a petal-soft finish.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Ritual Section */}
        <section className="mt-24 bg-heritage-dark text-white rounded-[2rem] overflow-hidden p-10 lg:p-20 relative">
          <div className="relative z-10 max-w-4xl">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">The Glow Ritual</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-12">Radiance in Four Steps</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Purify</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Cleanse skin with lukewarm water to open pores for wisdom.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Invoke</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Take a pearl-sized amount of Glow Complexion Cream on your fingertips.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Massage</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Gently massage in upward circular motions, focusing on the third eye.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">04</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Glow</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Breathe deep and allow the botanicals to merge with your essence.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default GlowComplexionCream;
