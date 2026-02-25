
import React, { useState, useEffect } from 'react';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../constants';

const Shop: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const categories = ['All', 'Skin & Hair Care', 'Wellness', 'Therapeutics', 'Body Care', 'Oral Care & Wellness'];

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-background-light min-h-screen pt-20">
      <main className="max-w-7xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
          <div className="space-y-4">
            <h2 className="text-5xl font-serif font-black text-slate-900">Curated <span className="text-primary italic">Rituals</span></h2>
            <p className="text-slate-500 font-dm max-w-md">Explore our collection of traditional formulations, crafted with wisdom and pure botanicals.</p>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-2 w-full md:w-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-all whitespace-nowrap ${activeCategory === cat ? 'bg-primary text-white shadow-lg shadow-primary/20' : 'bg-white text-slate-400 hover:text-primary border border-primary/5'}`}
                onClick={() => setActiveCategory(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-20">
          {MOCK_PRODUCTS
            .filter(p => activeCategory === 'All' || p.category === activeCategory)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </main>
    </div>
  );
};

export default Shop;
