
import React, { useEffect } from 'react';

const BFF: React.FC = () => {
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
          <span className="text-primary font-bold">Jammi BFF</span>
        </nav>

        {/* Product Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-heritage-soft rounded-xl overflow-hidden shadow-2xl">
              <img 
                alt="Jammi BFF Ayurvedic cream jar for cracked heels" 
                className="w-full h-full object-cover" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB7G6SUorcNx1ClKLoV2dM4W0hy8aJZnM8yud-KvND4lDf0V1r2fAv254ruL8d4VYlSK5lRHmuQ0gcStC-A9ym4Nipye3JnlXtyEhz1Bd4mhZ_O8BUFwSr9hX9O55mUwWWPIg2OZqhlXneWPrwx_kRqBuBPKHPEgD9FcnJ54SENdLk8f-acSyowOhSG2AluhzQFR2pauwexQogaidz40gYUEncVkQmH8eXkGO_k8fctsy1WIjd_mWgLn6zlOH2OWUnhg-_TWAYsHto"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              <div className="aspect-square bg-heritage-soft rounded-lg overflow-hidden border-2 border-primary cursor-pointer">
                <img 
                  className="w-full h-full object-cover opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgUUw-QtjMprlWa8STvDxcbaroDbXfewEqgFi_QowlkxdZsSiGzPivX4Q1fX47WDQn54mQhYL9X8tidW5SvuuBymj624dsc9VCxTxtLGE-gX3XUq5jVyOguT9cdHaooraTwwRCMuNwZRTWmSoIN6ceKoy6c1fji6ymPlwA8Rl0_qe--grQYPU-6yIIuuXwWt_uht0zKM0fDaA2Klr5RH3zjepsMsKddSGGhQbzCtPEPrs7CSuUcBA-5u_GJKogyA5_Qhd5XMSiFdA"
                />
              </div>
              <div className="aspect-square bg-heritage-soft rounded-lg overflow-hidden border border-transparent hover:border-primary/50 cursor-pointer">
                <img 
                  className="w-full h-full object-cover opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCDpBdgHhZOOsrDnFlw1ti8VYcSxiGGnGIlgCO8-n6x0GJWKGfyyIsGFwlB5Qkm41aIlJegvEbb6OFkIV0lsDJpmfBnBsgYWJZszhoj4BPgNj3oWHksj_40P6c_dI_q25Q8SPZutVC-jIfIgt3Rg962g-U3GjS1WMX6BW2Op_v2nLTUpYBHCPK-1y7ixVM1ZInzlNerSkNNHwplbvcFRj3pb_biT4hxodNmYzLqcY_fxj5fD0jHkcTF0gaolv_kXRJ-rEQGSGOfrgQ"
                />
              </div>
              <div className="aspect-square bg-heritage-soft rounded-lg overflow-hidden border border-transparent hover:border-primary/50 cursor-pointer">
                <img 
                  className="w-full h-full object-cover opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDpVuW2uXnOqG12UriNfe3Qk8cWXYjFNLTsV1ponC81BsFD1QF8wrHwsaXG7hBm3Xyt2-LRGT-xbl5q5Wt_QxLcSwzSeoEAUWrdCLymxazsyAjEYWwQ8whRO7V8BN3Rax-GVde7c9qgqPQOKm2dY_mTt1ItMvavitPsnjZ1mJj-ESF5OPx7xEGdtwgzLP4-raRVNuBIIdwAE1oltIeECBxleN-yyNQM7pIF_iKwWeJhxulPbkhB7rlEYxXHjId7Lf_pZfwEQvzSJqs"
                />
              </div>
              <div className="aspect-square bg-heritage-soft rounded-lg flex items-center justify-center border border-transparent hover:border-primary/50 cursor-pointer">
                <span className="material-symbols-outlined text-primary text-3xl">play_circle</span>
              </div>
            </div>
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-8">
            <div>
              <div className="flex items-center gap-2 text-primary mb-3">
                <span className="material-symbols-outlined text-sm">verified</span>
                <span className="text-xs font-bold uppercase tracking-tighter">Certified Ayurvedic Heritage</span>
              </div>
              <h1 className="text-4xl lg:text-6xl font-serif font-bold text-heritage-dark leading-[1.1] mb-4">
                Jammi BFF: Restoration for Your Foundation
              </h1>
              <p className="text-lg text-heritage-dark/70 font-light leading-relaxed">
                A premium Ayurvedic blend crafted for cracked heels, honoring a century of natural healing and mindful self-care. Designed to penetrate deep and heal from within.
              </p>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-3xl font-serif font-bold text-primary">₹499.00</span>
              <span className="text-lg text-slate-400 line-through">₹650.00</span>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-1 rounded">Save 23%</span>
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
            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="flex flex-col items-center text-center gap-2 p-4 bg-white rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary">eco</span>
                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">100% Natural Botanicals</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-4 bg-white rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary">history</span>
                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Legacy Since 1901</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 p-4 bg-white rounded-xl shadow-sm">
                <span className="material-symbols-outlined text-primary">cruelty_free</span>
                <span className="text-[10px] font-bold uppercase tracking-widest leading-tight">Cruelty Free Practice</span>
              </div>
            </div>
          </div>
        </div>

        {/* Key Ingredients Section */}
        <section className="mt-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-serif font-bold text-heritage-dark mb-4 italic">Potent Earthly Ingredients</h2>
            <p className="text-heritage-dark/60 max-w-2xl mx-auto">
              Formulated with timeless Ayurvedic wisdom, using cold-pressed oils and hand-picked herbs that speak the language of your skin.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group p-8 bg-white rounded-2xl border border-heritage-soft hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">fluid_med</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Natural Oils</h3>
              <p className="text-sm text-heritage-dark/70 leading-relaxed">
                A proprietary blend of sesame and castor oils that deeply nourish dry, calloused skin and restore lost elasticity.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-2xl border border-heritage-soft hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">psychiatry</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Ancient Herbs</h3>
              <p className="text-sm text-heritage-dark/70 leading-relaxed">
                Infused with Manjistha and Neem, known in Ayurveda for their potent antiseptic and skin-repairing properties.
              </p>
            </div>
            <div className="group p-8 bg-white rounded-2xl border border-heritage-soft hover:border-primary transition-all duration-300">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">nature</span>
              </div>
              <h3 className="text-xl font-serif font-bold mb-3">Healing Botanicals</h3>
              <p className="text-sm text-heritage-dark/70 leading-relaxed">
                Pure beeswax creates a protective barrier, locking in moisture while allowing the skin to breathe and regenerate naturally.
              </p>
            </div>
          </div>
        </section>

        {/* The Ritual Section */}
        <section className="mt-24 bg-heritage-dark text-white rounded-[2rem] overflow-hidden p-10 lg:p-20 relative">
          <div className="absolute top-0 right-0 w-1/3 h-full opacity-10 pointer-events-none">
            <svg className="w-full h-full fill-current" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
              <path d="M44.7,-76.4C58.3,-69.2,70.1,-57.4,77.6,-43.3C85.1,-29.2,88.2,-12.9,86.5,2.9C84.7,18.7,78,34,67.8,46.5C57.6,59,43.9,68.6,29.1,74.5C14.3,80.4,-1.6,82.5,-17.1,79.5C-32.6,76.5,-47.7,68.4,-59.1,56.7C-70.5,45,-78.2,29.8,-81.4,14.1C-84.6,-1.6,-83.3,-17.8,-76.5,-31.6C-69.7,-45.4,-57.4,-56.8,-43.8,-64C-30.2,-71.2,-15.1,-74.3,0.3,-74.8C15.7,-75.3,31.2,-73.2,44.7,-76.4Z" transform="translate(100 100)"></path>
            </svg>
          </div>
          <div className="relative z-10 max-w-4xl">
            <span className="text-primary font-bold tracking-[0.3em] uppercase text-sm mb-4 block">The Best Foot Forward Ritual</span>
            <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-12">Restoration in Three Steps</h2>
            <div className="space-y-12">
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">01</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Purify & Prep</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Wash your feet with lukewarm water using a mild cleanser. Gently pat dry with a soft linen towel to ensure the skin is ready for absorption.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">02</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">The Golden Massage</h4>
                  <p className="text-heritage-soft/70 max-w-lg">Apply a generous amount of Jammi BFF to your heels. Use circular motions with your thumbs, focusing on the cracked areas until the cream is fully absorbed.</p>
                </div>
              </div>
              <div className="flex gap-8 items-start">
                <div className="text-5xl font-serif font-bold text-primary/40 italic shrink-0">03</div>
                <div>
                  <h4 className="text-xl font-bold mb-2">Overnight Infusion</h4>
                  <p className="text-heritage-soft/70 max-w-lg">For intensive repair, wear clean cotton socks and let the Ayurvedic oils work their magic as you rest. Wake up to noticeably softer foundations.</p>
                </div>
              </div>
            </div>
            <div className="mt-16">
              <button className="bg-primary hover:bg-white hover:text-heritage-dark text-white px-10 py-5 rounded-xl font-bold transition-all duration-300 shadow-2xl">
                Experience the Ritual - Shop BFF
              </button>
            </div>
          </div>
        </section>

        {/* Trust Section / Reviews Preview */}
        <section className="mt-24 border-t border-heritage-soft pt-20">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <div className="lg:col-span-1">
              <h3 className="text-2xl font-serif font-bold mb-4 italic">Beloved by Generations</h3>
              <div className="flex items-center gap-1 text-primary mb-2">
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
                <span className="material-symbols-outlined fill-current">star</span>
              </div>
              <p className="text-sm text-heritage-dark/60 font-medium italic">"Based on 2,500+ verified customer experiences."</p>
            </div>
            <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-heritage-soft">
                <p className="text-heritage-dark/80 italic mb-6">"I've tried everything for my cracked heels. This is the only product that worked in just 3 days. The smell of traditional herbs is so calming."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">AK</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest">Anjali K.</p>
                    <p className="text-[10px] text-primary">Verified Purchase</p>
                  </div>
                </div>
              </div>
              <div className="bg-white p-8 rounded-2xl shadow-sm border border-heritage-soft">
                <p className="text-heritage-dark/80 italic mb-6">"A family secret. My grandmother used Jammi, and now I do too. It's more than a cream; it's a heritage I'm proud to carry."</p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold">RV</div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-widest">Rohan V.</p>
                    <p className="text-[10px] text-primary">Verified Purchase</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default BFF;
