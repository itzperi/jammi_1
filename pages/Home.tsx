
import React from 'react';
import HeroSection from '../components/HeroSection';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS, MOCK_DOCTORS } from '../constants';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Bar Section */}
      <section className="bg-cream-dark border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {[
              { icon: "verified_user", title: "AYUSH Certified", sub: "Regulatory Standard Compliance" },
              { icon: "science", title: "IIT Collaborated", sub: "Science-Backed Formulations" },
              { icon: "eco", title: "Wild Sourced", sub: "Pristine Himalayan Herbs" },
              { icon: "military_tech", title: "Award Winning", sub: "Heritage Excellence since 1900" }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center lg:items-start lg:flex-row gap-4 text-center lg:text-left">
                <span className="material-symbols-outlined text-forest text-4xl">{item.icon}</span>
                <div>
                  <h3 className="font-bold text-sm tracking-widest uppercase text-forest">{item.title}</h3>
                  <p className="text-xs text-forest/60 mt-1">{item.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Edit Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-saffron font-bold uppercase tracking-widest text-sm mb-4 block">Curated Excellence</span>
              <h2 className="text-4xl lg:text-5xl font-serif">The BeAYUtiful Edit</h2>
            </div>
            <a className="text-forest font-bold flex items-center gap-2 hover:text-saffron transition-colors group" href="#">
              Explore All Therapeutics 
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </a>
          </div>
          <div className="grid md:grid-cols-3 gap-10">
            {MOCK_PRODUCTS.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Quote Section */}
      <section className="bg-forest py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 mix-blend-overlay grain-texture"></div>
        <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
          <div className="mb-10 inline-flex items-center justify-center p-2 rounded-full bg-white/10">
            <img alt="Doctor" className="w-16 h-16 rounded-full border-2 border-saffron" src={MOCK_DOCTORS[0].avatar}/>
          </div>
          <blockquote className="text-2xl lg:text-4xl font-serif text-white/90 leading-relaxed mb-10 italic">
            "{MOCK_DOCTORS[0].quote}"
          </blockquote>
          <div className="space-y-6">
            <div>
              <p className="text-saffron font-bold text-lg">{MOCK_DOCTORS[0].name}</p>
              <p className="text-white/50 text-sm">{MOCK_DOCTORS[0].specialty}</p>
            </div>
            <div className="pt-4">
              <a className="inline-flex items-center gap-3 text-white border-b border-saffron/50 pb-2 hover:border-saffron transition-all font-serif text-xl group" href="#">
                Join our Doctor Community 
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_right_alt</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-background-light py-24 border-b border-cream-dark">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-saffron font-bold uppercase tracking-[0.2em] text-xs mb-6 block">The Jammi Letter</span>
          <h2 className="text-4xl font-serif mb-6">Stay Connected with Heritage</h2>
          <p className="text-forest/60 font-dm mb-12 max-w-lg mx-auto">
            Receive seasonal Ayurvedic wisdom, exclusive offers, and early access to our limited-batch therapeutics.
          </p>
          <form className="flex flex-col sm:flex-row gap-0 max-w-xl mx-auto rounded-full border border-cream-dark bg-white overflow-hidden p-1.5 focus-within:ring-2 focus-within:ring-saffron/20 transition-all" onSubmit={(e) => e.preventDefault()}>
            <input className="flex-1 bg-transparent px-8 h-14 outline-none border-none text-forest placeholder:text-forest/40" placeholder="Enter your email address" type="email"/>
            <button className="bg-saffron text-white font-bold px-10 h-14 rounded-full hover:bg-forest transition-colors duration-300">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
};

export default Home;
