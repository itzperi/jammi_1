import React from 'react';
import { Link } from 'react-router-dom';
import { MOCK_PRODUCTS } from '../constants';

const SmartRecommendations: React.FC<{ currentId: string }> = ({ currentId }) => {
    const currentProduct = MOCK_PRODUCTS.find(p => p.id === currentId);

    // Logic: Show products from same category, then best sellers (by salesRank)
    const recommendations = MOCK_PRODUCTS
        .filter(p => p.id !== currentId)
        .sort((a, b) => {
            // Prioritize same category
            if (currentProduct && a.category === currentProduct.category && b.category !== currentProduct.category) return -1;
            if (currentProduct && a.category !== currentProduct.category && b.category === currentProduct.category) return 1;
            // Then prioritize by salesRank (smaller number = better)
            return (a.salesRank || 999) - (b.salesRank || 999);
        })
        .slice(0, 4);

    return (
        <div className="mt-24">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 border-b border-brand-red/10 pb-8">
                <div>
                    <h2 className="font-heading text-3xl md:text-5xl text-brand-red mb-2 uppercase tracking-tight">Potent Synergies</h2>
                    <p className="font-subheading text-[10px] md:text-xs font-bold text-charcoal/50 uppercase tracking-[0.3em]">Commonly Prescribed Together</p>
                </div>
                <Link to="/shop" className="text-brand-red font-subheading font-bold text-[10px] uppercase tracking-widest border-b border-brand-red mt-4 md:mt-0 pb-1 translate-y-2 hover:text-dark-burgundy hover:border-dark-burgundy transition-all">
                    Explore Entire Formulary
                </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {recommendations.map((product) => (
                    <Link
                        key={product.id}
                        to={`/product/${product.id}`}
                        className="group block bg-white"
                    >
                        <div className="relative aspect-[4/5] overflow-hidden bg-slate-50 border border-slate-100 rounded-xl mb-6">
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-brand-red/5 p-8 flex items-center justify-center">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full shadow-sm border border-brand-red/5">
                                <span className="text-[10px] font-bold text-brand-red font-subheading uppercase">Rank #{product.salesRank}</span>
                            </div>
                        </div>

                        <h3 className="font-heading text-xl text-brand-red mb-1 transition-colors group-hover:text-dark-burgundy">{product.name}</h3>
                        <p className="text-[10px] font-bold text-charcoal/40 uppercase tracking-[0.2em] mb-3">{product.category}</p>
                        <div className="flex items-baseline gap-2">
                            <span className="font-subheading font-bold text-charcoal">₹{product.price}</span>
                            <span className="text-[10px] text-slate-400 line-through">₹{Math.round(product.price * 1.4)}</span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default SmartRecommendations;
