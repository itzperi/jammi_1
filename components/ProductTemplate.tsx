import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewSystem from './ReviewSystem';
import SmartRecommendations from './SmartRecommendations';

interface ProductTemplateProps {
    product: any;
}

const ProductTemplate: React.FC<ProductTemplateProps> = ({ product }) => {
    const [quantity, setQuantity] = useState(1);
    const [mainImage, setMainImage] = useState(product.image);

    useEffect(() => {
        window.scrollTo(0, 0);
        setMainImage(product.image);
    }, [product.id]);

    const handleQuantityChange = (type: 'inc' | 'dec') => {
        if (type === 'inc') {
            setQuantity(prev => prev + 1);
        } else if (type === 'dec' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    if (!product) return <div className="pt-32 text-center text-slate-500">Product profile not found...</div>;

    return (
        <div className="bg-[#FAF6F0] dark:bg-[#1A0A10] text-slate-900 dark:text-slate-100 font-sans min-h-screen">
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
                    {/* Gallery */}
                    <div className="space-y-4">
                        <div className="aspect-square rounded-2xl overflow-hidden bg-white dark:bg-black/20 border border-slate-200 dark:border-white/5 relative shadow-sm">
                            <img
                                className="w-full h-full object-contain p-8 md:p-12 transition-transform duration-700 hover:scale-105"
                                alt={product.name}
                                src={mainImage}
                            />
                            <div className="absolute top-4 left-4 bg-[#7B1C2E] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">
                                {product.label || 'Premium Heritage'}
                            </div>
                        </div>
                        {product.gallery && product.gallery.length > 0 && (
                            <div className="grid grid-cols-4 gap-4">
                                {product.gallery.map((img: string, idx: number) => (
                                    <button
                                        key={idx}
                                        onClick={() => setMainImage(img)}
                                        className={`aspect-square rounded-xl border-2 transition-all overflow-hidden bg-white ${mainImage === img ? 'border-[#7B1C2E]' : 'border-transparent hover:border-slate-200'}`}
                                    >
                                        <img className="w-full h-full object-cover p-2" src={img} alt={`${product.name} view ${idx + 1}`} />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="flex flex-col">
                        <nav className="flex text-xs font-bold text-slate-400 mb-6 items-center gap-2 uppercase tracking-widest">
                            <Link className="hover:text-[#7B1C2E]" to="/">Home</Link>
                            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                            <Link className="hover:text-[#7B1C2E]" to="/shop">{product.category || 'Collection'}</Link>
                            <span className="material-symbols-outlined text-[10px]">chevron_right</span>
                            <span className="text-[#C9922A]">{product.name}</span>
                        </nav>

                        <h1 className="text-4xl lg:text-6xl font-serif font-black text-[#7B1C2E] dark:text-[#C9922A] mb-2 leading-tight">
                            {product.name}
                        </h1>
                        <p className="text-lg text-slate-500 italic mb-8">{product.shortDesc}</p>

                        <div className="flex items-center gap-6 mb-10 pb-10 border-b border-slate-200 dark:border-white/10">
                            <div>
                                <span className="text-4xl font-black text-slate-900 dark:text-white">₹{product.price}</span>
                                {product.originalPrice && (
                                    <span className="ml-3 text-xl text-slate-400 line-through">₹{product.originalPrice}</span>
                                )}
                            </div>
                            <div className="h-10 w-px bg-slate-200 dark:bg-white/10"></div>
                            <div className="flex flex-col">
                                <div className="flex text-[#C9922A]">
                                    {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined fill-1 text-sm">star</span>)}
                                </div>
                                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mt-1">Heritage Grade Quality</span>
                            </div>
                        </div>

                        {/* Features Grid */}
                        {product.features && (
                            <div className="grid grid-cols-2 gap-4 mb-10">
                                {product.features.map((feat: any, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 p-4 bg-white dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-transparent">
                                        <span className="material-symbols-outlined text-[#7B1C2E] dark:text-[#C9922A] text-xl">{feat.icon}</span>
                                        <span className="text-[10px] font-bold text-slate-600 dark:text-slate-300 uppercase tracking-widest">{feat.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        <div className="space-y-8">
                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center border border-slate-200 dark:border-white/20 rounded-full px-2 py-1 bg-white dark:bg-transparent">
                                    <button
                                        onClick={() => handleQuantityChange('dec')}
                                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-[#7B1C2E] transition-colors"
                                    >
                                        <span className="material-symbols-outlined">remove</span>
                                    </button>
                                    <span className="px-6 font-bold text-lg min-w-[3rem] text-center">{quantity}</span>
                                    <button
                                        onClick={() => handleQuantityChange('inc')}
                                        className="w-10 h-10 flex items-center justify-center text-slate-400 hover:text-[#7B1C2E] transition-colors"
                                    >
                                        <span className="material-symbols-outlined">add</span>
                                    </button>
                                </div>
                                <button className="flex-1 bg-[#7B1C2E] hover:bg-[#3D0C1A] text-white py-4 rounded-full font-black uppercase tracking-widest shadow-xl shadow-[#7B1C2E]/20 transition-all transform hover:-translate-y-1 active:scale-95">
                                    Experience the Ritual
                                </button>
                            </div>

                            <div className="flex flex-wrap gap-8 items-center justify-center lg:justify-start opacity-40">
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">verified</span>
                                    <span className="text-[9px] font-bold uppercase tracking-wider">Clinically Trusted</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">eco</span>
                                    <span className="text-[9px] font-bold uppercase tracking-wider">100% Shastric Formula</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">history</span>
                                    <span className="text-[9px] font-bold uppercase tracking-wider">125 Years Legacy</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legacy Story Section */}
                {product.legacyStory && (
                    <section className="bg-[#7B1C2E] text-white rounded-[3rem] p-12 lg:p-24 mb-24 relative overflow-hidden shadow-2xl">
                        <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
                        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="space-y-8">
                                <h2 className="text-4xl lg:text-6xl font-serif font-black leading-tight">
                                    {product.legacyStory.title}
                                </h2>
                                <p className="text-xl lg:text-2xl text-white/80 leading-relaxed italic font-light">
                                    "{product.legacyStory.quote}"
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center">
                                <div className="w-48 h-48 rounded-full border-4 border-[#C9922A] flex flex-col items-center justify-center mb-6 bg-white/5 backdrop-blur-sm">
                                    <span className="text-6xl font-black text-[#C9922A]">{product.legacyStory.percentage}</span>
                                    <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Efficacy</span>
                                </div>
                                <h4 className="text-xl font-bold text-center text-[#C9922A] uppercase tracking-widest">
                                    {product.legacyStory.resultText}
                                </h4>
                            </div>
                        </div>
                    </section>
                )}

                {/* Potent Botanicals Section */}
                {product.botanicals && (
                    <section className="py-20 mb-20 border-t border-slate-200 dark:border-white/10">
                        <h2 className="text-3xl lg:text-5xl font-serif font-black text-center mb-16 text-[#7B1C2E] dark:text-[#C9922A]">
                            The Potent Botanicals
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                            {product.botanicals.map((botanical: any, idx: number) => (
                                <div key={idx} className="group text-center">
                                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-6 border-4 border-white dark:border-white/10 shadow-xl group-hover:scale-110 transition-transform duration-500">
                                        <img src={botanical.image} alt={botanical.name} className="w-full h-full object-cover" />
                                    </div>
                                    <h3 className="text-xl font-black mb-3 text-slate-800 dark:text-white uppercase tracking-widest">{botanical.name}</h3>
                                    <p className="text-sm text-slate-500 leading-relaxed max-w-xs mx-auto">{botanical.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Ritual Section */}
                {product.ritual && (
                    <section className="bg-white dark:bg-white/5 rounded-[3rem] p-8 lg:p-16 mb-24 border border-slate-100 dark:border-white/5 shadow-sm">
                        <div className="flex flex-col lg:flex-row gap-16 items-center">
                            <div className="lg:w-1/2">
                                <h2 className="text-3xl lg:text-5xl font-serif font-black text-[#7B1C2E] dark:text-[#C9922A] mb-8">
                                    The Daily Ritual
                                </h2>
                                <div className="space-y-10">
                                    {product.ritual.map((step: any, idx: number) => (
                                        <div key={idx} className="flex gap-6 items-start">
                                            <span className="text-5xl font-serif font-black text-[#C9922A] opacity-30 leading-none">0{idx + 1}</span>
                                            <div>
                                                <h4 className="font-black mb-2 text-slate-800 dark:text-white uppercase tracking-widest">{step.title}</h4>
                                                <p className="text-slate-500 text-sm leading-relaxed">{step.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="lg:w-1/2 rounded-2xl overflow-hidden shadow-2xl rotate-2">
                                <img
                                    className="w-full h-full object-cover"
                                    alt="Traditional healing ritual"
                                    src="https://images.unsplash.com/photo-1600334129128-685c5582fd35?auto=format&fit=crop&q=80&w=800"
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* Functional Integrations */}
                <div className="space-y-24">
                    <ReviewSystem productId={product.id} />
                    <SmartRecommendations currentId={product.id} />
                </div>
            </main>

            {/* Sticky Mobile Add to Cart */}
            <div className="lg:hidden fixed bottom-0 left-0 w-full bg-white dark:bg-[#1A0A10] border-t border-slate-100 dark:border-white/10 p-4 z-50 flex items-center justify-between shadow-2xl">
                <div className="flex flex-col">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total Ritual</span>
                    <span className="text-xl font-black text-[#7B1C2E] dark:text-[#C9922A]">₹{product.price}</span>
                </div>
                <button className="bg-[#7B1C2E] text-white px-8 py-3 rounded-full font-black uppercase text-xs tracking-widest shadow-lg active:scale-95 transition-transform">
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductTemplate;
