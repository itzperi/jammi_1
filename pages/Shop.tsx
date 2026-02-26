
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../constants';

const Shop: React.FC = () => {
  const location = useLocation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [priceRange, setPriceRange] = useState(1000);
  const categories = ['All', 'Skin & Hair Care', 'Wellness', 'Therapeutics', 'Body Care', 'Oral Care & Wellness'];

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const category = params.get('category');
    if (category && categories.includes(category)) {
      setActiveCategory(category);
    } else {
      setActiveCategory('All');
    }
    window.scrollTo(0, 0);
  }, [location.search]);

  const filteredProducts = MOCK_PRODUCTS.filter(p =>
    (activeCategory === 'All' || p.category === activeCategory) &&
    (p.price <= priceRange)
  );

  return (
    <div className="bg-background-light min-h-screen pt-24">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12 mb-16">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-saffron/10 border border-saffron/20 text-saffron text-[10px] font-bold tracking-widest uppercase">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-saffron opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-saffron"></span>
              </span>
              The Royal Apothecary
            </div>
            <h2 className="text-5xl lg:text-7xl font-serif font-black text-slate-900 leading-tight">
              Curated <span className="text-primary italic">Rituals</span>
            </h2>
            <p className="text-slate-500 font-dm max-w-lg text-lg">
              Explore our collection of traditional formulations, crafted with wisdom and pure botanicals for the modern practitioner.
            </p>
          </div>

          <div className="w-full lg:w-auto space-y-8">
            {/* Price Filter */}
            <div className="bg-white p-6 rounded-3xl border border-saffron/10 shadow-xl shadow-saffron/5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Price Range</span>
                <span className="text-sm font-bold text-primary">Up to ₹{priceRange}</span>
              </div>
              <input
                type="range"
                min="100"
                max="1000"
                step="50"
                value={priceRange}
                onChange={(e) => setPriceRange(parseInt(e.target.value))}
                className="w-full h-1.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-saffron"
              />
              <div className="flex justify-between mt-2 text-[10px] font-bold text-slate-300">
                <span>₹100</span>
                <span>₹1000</span>
              </div>
            </div>

            {/* Category Filter */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat}
                  className={`px-6 py-2.5 rounded-full text-[10px] font-bold tracking-widest uppercase transition-all whitespace-nowrap border ${activeCategory === cat
                      ? 'bg-primary text-white border-primary shadow-xl shadow-primary/30 scale-105'
                      : 'bg-white text-slate-400 hover:text-primary border-saffron/10 hover:border-primary/30'
                    }`}
                  onClick={() => setActiveCategory(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-24">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-32 text-center space-y-6">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center border border-dashed border-slate-200">
              <span className="material-symbols-outlined text-slate-300 text-4xl">inventory_2</span>
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl font-serif font-bold text-slate-900">No rituals found</h3>
              <p className="text-slate-400 max-w-xs">Adjust your filters to discover other ancient formulations.</p>
            </div>
            <button
              onClick={() => { setActiveCategory('All'); setPriceRange(1000); }}
              className="text-primary font-bold text-sm underline underline-offset-8 hover:text-primary/70 transition-colors"
            >
              Reset all filters
            </button>
          </div>
        )}
      </main>
    </div>
  );
};

export default Shop;
