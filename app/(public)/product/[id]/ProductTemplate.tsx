"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';

// Helper interface based on constants.tsx structure
interface Product {
    id: string;
    name: string;
    label: string;
    shortDesc: string;
    price: number;
    image: string;
    category: string;
    features: Array<{ title: string; desc: string; icon: string }>;
    botanicals?: Array<{ name: string; desc: string; image: string }>;
    ritual?: Array<{ title: string; desc: string }>;
    results?: Array<{ percentage: string; text: string }>;
}

export default function ProductTemplate({ product }: { product: Product }) {
    const [quantity, setQuantity] = useState(1);
    const [selectedAngle, setSelectedAngle] = useState(0);

    const handleQuantityChange = (action: 'increase' | 'decrease') => {
        if (action === 'decrease' && quantity > 1) {
            setQuantity(quantity - 1);
        } else if (action === 'increase') {
            setQuantity(quantity + 1);
        }
    };

    // The 4 dynamic angles using CSS transformations
    const imageAngles = [
        { id: 0, style: {}, icon: 'image', label: 'Front View' },
        { id: 1, style: { transform: 'scale(1.2) translateY(-5%)' }, icon: 'zoom_in', label: 'Details' },
        { id: 2, style: { transform: 'scale(1.4) translateY(10%)' }, icon: 'vertical_align_top', label: 'Top Focus' },
        { id: 3, style: { transform: 'scaleX(-1)' }, icon: 'flip', label: 'Profile' },
    ];

    return (
        <div className="bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 font-body min-h-screen pt-20">
            <main className="max-w-7xl mx-auto px-4 md:px-10 py-8">
                {/* Breadcrumbs */}
                <nav className="flex flex-wrap items-center gap-2 text-sm text-slate-500 mb-8 font-body">
                    <Link href="/" className="hover:text-primary transition-colors">Home</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <Link href="/shop" className="hover:text-primary transition-colors text-xs whitespace-nowrap">Wellness Collection</Link>
                    <span className="material-symbols-outlined text-xs">chevron_right</span>
                    <span className="text-secondary font-bold text-xs truncate max-w-[150px] sm:max-w-none">{product.name}</span>
                </nav>

                {/* Hero Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 mb-24">
                    {/* Visual & Gallery */}
                    <div className="flex flex-col-reverse md:flex-row gap-6">
                        {/* Thumbnails (Vertical on Desktop, Horizontal on Mobile) */}
                        <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible pb-4 md:pb-0 hide-scrollbar shrink-0 w-full md:w-auto">
                            {imageAngles.map((angle, index) => (
                                <div
                                    key={angle.id}
                                    onClick={() => setSelectedAngle(index)}
                                    title={angle.label}
                                    className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-2xl border-2 overflow-hidden p-2 cursor-pointer shadow-sm transition-all duration-300 flex-shrink-0 flex items-center justify-center relative ${selectedAngle === index ? 'border-primary bg-primary/5' : 'border-secondary/10 bg-white dark:bg-slate-800 hover:border-primary/40'}`}
                                >
                                    {index === 0 ? (
                                        <img alt={`${product.name} thumbnail`} className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal" src={product.image} />
                                    ) : (
                                        <span className={`material-symbols-outlined text-2xl sm:text-3xl ${selectedAngle === index ? 'text-primary' : 'text-slate-300 dark:text-slate-600'}`}>{angle.icon}</span>
                                    )}
                                </div>
                            ))}
                        </div>
                        {/* Main Image Viewport */}
                        <div className="flex-1 aspect-square sm:aspect-[4/5] bg-gradient-to-t from-slate-100 to-white dark:from-slate-900 dark:to-slate-800 rounded-[2rem] border border-secondary/5 flex items-center justify-center p-8 relative overflow-hidden group w-full">
                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 md:w-64 md:h-64 bg-primary/20 blur-[60px] md:blur-[80px] rounded-full"></div>
                            <div className="absolute top-4 left-4 sm:top-6 sm:left-6 flex gap-2 z-10">
                                <span className="bg-secondary text-white text-[9px] sm:text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-widest shadow-lg">{product.category}</span>
                            </div>

                            {/* The dynamic image with CSS transforms applied based on selected angle */}
                            <div className="w-[85%] h-[85%] relative z-10 drop-shadow-2xl transition-all duration-700 ease-in-out" style={imageAngles[selectedAngle].style}>
                                <img
                                    alt={product.name}
                                    className="w-full h-full object-contain mix-blend-multiply dark:mix-blend-normal pointer-events-none"
                                    src={product.image}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Details Column */}
                    <div className="flex flex-col pt-2 md:pt-4">
                        <div className="mb-2">
                            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold text-secondary dark:text-primary mb-2 sm:mb-3 leading-tight font-display">{product.name}</h2>
                            <h3 className="text-xl sm:text-2xl font-light text-slate-500 dark:text-slate-400 tracking-wide">{product.label}</h3>
                        </div>
                        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-8 font-body leading-relaxed">
                            {product.shortDesc}
                        </p>

                        {/* Top Features / Badges */}
                        {product.features && product.features.length > 0 && (
                            <div className="flex flex-wrap gap-2 sm:gap-3 mb-10">
                                {product.features.map((feature, idx) => (
                                    <div key={idx} className="flex items-center gap-1.5 sm:gap-2 border border-secondary/20 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 bg-white dark:bg-slate-800">
                                        <span className="material-symbols-outlined text-[14px] sm:text-[1rem] text-primary">{feature.icon}</span>
                                        <span className="text-[10px] sm:text-xs font-bold text-secondary dark:text-white uppercase tracking-wider">{feature.title}</span>
                                    </div>
                                ))}
                            </div>
                        )}

                        {/* Price & Cart Actions */}
                        <div className="bg-slate-50 dark:bg-slate-800/50 rounded-3xl p-6 md:p-8 border border-slate-200 dark:border-slate-700">
                            <div className="flex justify-between items-end mb-6">
                                <div>
                                    <p className="text-sm text-slate-500 font-bold mb-1">Price</p>
                                    <div className="flex items-baseline gap-2">
                                        <span className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">₹{product.price}</span>
                                        <span className="text-xs sm:text-sm font-medium text-slate-500">/ Unit</span>
                                    </div>
                                </div>
                                <div className="text-right hidden sm:block">
                                    <span className="inline-flex items-center gap-1 text-amber-600 dark:text-amber-400 text-xs sm:text-sm font-bold bg-amber-100 dark:bg-amber-900/30 px-3 py-1 rounded-lg">
                                        <span className="material-symbols-outlined text-[12px] sm:text-[14px]">bolt</span> In Stock
                                    </span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex border-2 border-slate-200 dark:border-slate-600 bg-white dark:bg-slate-900 rounded-xl overflow-hidden h-14 w-full sm:w-36 shrink-0">
                                    <button onClick={() => handleQuantityChange('decrease')} className="flex-1 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined flex">remove</span>
                                    </button>
                                    <div className="flex-1 flex items-center justify-center font-bold text-lg select-none">
                                        {quantity}
                                    </div>
                                    <button onClick={() => handleQuantityChange('increase')} className="flex-1 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-400 flex items-center justify-center">
                                        <span className="material-symbols-outlined flex">add</span>
                                    </button>
                                </div>
                                <button className="flex-1 bg-secondary text-white font-bold text-base sm:text-lg h-14 rounded-xl shadow-lg shadow-secondary/20 hover:bg-slate-800 transition-all flex items-center justify-center gap-3">
                                    <span className="material-symbols-outlined flex">shopping_basket</span>
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Legacy Banner */}
                <div className="w-full bg-cover bg-center rounded-3xl overflow-hidden mb-16 sm:mb-24 relative" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1616401784845-180882ba9ba8?q=80&w=2670&auto=format&fit=crop')" }}>
                    <div className="absolute inset-0 bg-secondary/90 backdrop-blur-sm mix-blend-multiply"></div>
                    <div className="relative z-10 p-8 sm:p-12 md:p-20 text-center max-w-4xl mx-auto flex flex-col items-center">
                        <span className="material-symbols-outlined text-primary text-4xl sm:text-5xl mb-4 sm:mb-6 opacity-80">auto_stories</span>
                        <h3 className="text-2xl sm:text-3xl md:text-5xl font-display font-medium text-white mb-4 sm:mb-6 leading-tight">A Formulation Born of Heritage</h3>
                        <p className="text-base sm:text-lg text-slate-300 font-body leading-relaxed md:px-12">
                            Every Jammi product is deeply rooted in ancient Ayurvedic texts. We preserve the integrity of these powerful botanicals to guarantee true, holistic wellness for the modern era.
                        </p>
                    </div>
                </div>

                {/* Key Indications / Features grid */}
                {product.features && product.features.length > 0 && (
                    <section className="mb-16 sm:mb-24">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 sm:mb-12">
                            <div className="max-w-xl">
                                <span className="text-primary font-bold tracking-widest uppercase text-[10px] sm:text-sm mb-2 block">Clinical Efficacy</span>
                                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-secondary dark:text-white font-display">Primary Indications</h3>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-x-6 sm:gap-y-10">
                            {product.features.map((feature, idx) => (
                                <div key={idx} className="relative group p-4 sm:p-0">
                                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-2xl flex items-center justify-center text-secondary dark:text-primary mb-4 sm:mb-6 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                                        <span className="material-symbols-outlined text-xl sm:text-2xl">{feature.icon}</span>
                                    </div>
                                    <div className="absolute top-4 left-4 sm:top-7 sm:left-7 w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-2xl -z-0"></div>
                                    <h4 className="text-lg sm:text-xl font-bold text-secondary dark:text-white mb-2 font-display">{feature.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm font-body leading-relaxed">{feature.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* Elaborate Ingredients Section */}
                {product.botanicals && product.botanicals.length > 0 && (
                    <section className="mb-16 sm:mb-24 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl overflow-hidden shadow-sm">
                        <div className="grid grid-cols-1 md:grid-cols-5">
                            <div className="md:col-span-2 bg-slate-50 dark:bg-slate-800 p-6 sm:p-10 lg:p-16 flex flex-col justify-center border-b md:border-b-0 md:border-r border-slate-200 dark:border-slate-700">
                                <h3 className="text-2xl sm:text-3xl font-bold text-secondary dark:text-white mb-4 sm:mb-6 font-display">A Symphony of Botanicals</h3>
                                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 font-body mb-6 sm:mb-8 leading-relaxed">
                                    Carefully sourced and meticulously processed according to traditional texts. Our ingredients are unadulterated, potent, and deeply transformative.
                                </p>
                            </div>

                            <div className="md:col-span-3 p-6 sm:p-10 lg:p-16">
                                <h4 className="text-[10px] sm:text-sm font-bold text-slate-400 uppercase tracking-widest mb-6 sm:mb-8">Key Ingredients</h4>
                                <div className="space-y-6 sm:space-y-8">
                                    {product.botanicals.map((botanical, idx) => (
                                        <div key={idx} className="flex gap-4 sm:gap-6 items-start">
                                            <h5 className="text-3xl sm:text-4xl font-display font-light text-slate-300 dark:text-slate-600 w-8 sm:w-12 shrink-0">0{idx + 1}</h5>
                                            <div>
                                                <h6 className="text-lg sm:text-xl font-bold text-secondary dark:text-white mb-1 sm:mb-2 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{botanical.name}</h6>
                                                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">{botanical.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Application/Ritual Methods */}
                {product.ritual && product.ritual.length > 0 && (
                    <section className="mb-16 sm:mb-24">
                        <h3 className="text-2xl sm:text-3xl font-bold text-center text-secondary dark:text-white mb-2 sm:mb-4 font-display">Recommended Usage</h3>
                        <p className="text-center text-sm sm:text-base text-slate-500 font-body mb-8 sm:mb-12 max-w-2xl mx-auto px-4">For optimal results, follow the therapeutic rituals correctly.</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
                            {product.ritual.map((step, idx) => (
                                <div key={idx} className="bg-slate-50 dark:bg-slate-800 rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-slate-100 dark:border-slate-700 hover:shadow-md transition-shadow">
                                    <h4 className="text-base sm:text-lg font-bold text-secondary dark:text-white mb-3 sm:mb-4 flex items-center gap-2">
                                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs sm:text-sm">{idx + 1}</div>
                                        {step.title}
                                    </h4>
                                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-body leading-relaxed">{step.desc}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </main>
        </div>
    );
}
