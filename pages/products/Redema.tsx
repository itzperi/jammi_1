import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReviewSystem from '../../components/ReviewSystem';
import SmartRecommendations from '../../components/SmartRecommendations';

const Redema: React.FC = () => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleQuantityChange = (type: 'inc' | 'dec') => {
        if (type === 'inc') {
            setQuantity(prev => prev + 1);
        } else if (type === 'dec' && quantity > 1) {
            setQuantity(prev => prev - 1);
        }
    };

    return (
        <div className="bg-white text-charcoal font-body min-h-screen pt-28">
            <main className="max-w-7xl mx-auto px-6 py-12">
                <section className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24 items-start">
                    <div className="lg:col-span-12">
                        <nav className="text-[10px] font-bold text-slate-400 mb-8 flex space-x-2 uppercase tracking-widest">
                            <Link to="/" className="hover:text-brand-red">Home</Link>
                            <span>/</span>
                            <Link to="/shop" className="hover:text-brand-red">Wellness</Link>
                            <span>/</span>
                            <span className="text-brand-red font-bold underline decoration-brand-red/20 underline-offset-4 tracking-widest uppercase">Redema</span>
                        </nav>
                    </div>

                    {/* Left: Visual Display */}
                    <div className="lg:col-span-7 flex flex-col gap-8">
                        <div className="relative bg-slate-50 border border-slate-100 rounded-2xl overflow-hidden p-12 group">
                            <img
                                alt="Redema tablets"
                                className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-110"
                                src="/images/Redema_2.png"
                            />
                            <div className="absolute top-8 left-8 bg-white/90 backdrop-blur-md px-4 py-2 rounded-full border border-brand-red/10 shadow-sm">
                                <span className="text-[10px] font-bold text-brand-red font-subheading tracking-widest uppercase">Fluid Balance</span>
                            </div>
                        </div>
                    </div>

                    {/* Right: Formulation Details */}
                    <div className="lg:col-span-5 flex flex-col gap-10">
                        <div>
                            <h1 className="font-heading text-6xl text-brand-red mb-4 uppercase tracking-tighter">Redema</h1>
                            <p className="font-subheading text-lg text-charcoal/60 italic mb-8 italic">Natural Relief from Edema & Water Retention</p>

                            <div className="flex items-center gap-6 py-8 border-y border-slate-100">
                                <div className="flex flex-col">
                                    <span className="text-4xl font-bold text-brand-red tracking-tight">₹320</span>
                                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Targeted Fluid Reduction</span>
                                </div>
                                <div className="h-12 w-px bg-slate-200"></div>
                                <div className="flex flex-col gap-1">
                                    <div className="flex text-warm-gold">
                                        {[1, 2, 3, 4, 5].map(s => <span key={s} className="material-symbols-outlined text-sm">star</span>)}
                                    </div>
                                    <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Systemic Ease</span>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <p className="text-charcoal/70 leading-relaxed font-body">Infused with Punarnava, Redema is specifically formulated to help the body eliminate excess fluid buildup. Its gentle diuretic action supports healthy weight loss and kidney function, providing lightness and systemic comfort.</p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden h-14">
                                    <button onClick={() => handleQuantityChange('dec')} className="px-6 hover:bg-slate-50 transition border-r border-slate-100">-</button>
                                    <span className="px-4 font-bold min-w-[3rem] text-center">{quantity}</span>
                                    <button onClick={() => handleQuantityChange('inc')} className="px-6 hover:bg-slate-50 transition border-l border-slate-100">+</button>
                                </div>
                                <button className="flex-1 bg-brand-red text-white font-subheading font-bold text-xs uppercase tracking-[0.3em] h-14 hover:shadow-2xl hover:shadow-brand-red/40 transition-all active:scale-95">
                                    Restore Lightness
                                </button>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[
                                { icon: 'opacity', text: 'Reduces Retention' },
                                { icon: 'fitness_center', text: 'Weight Support' },
                                { icon: 'water_drop', text: 'Healthy Kidneys' },
                                { icon: 'verified', text: 'Safe Diuretic' }
                            ].map((feat, i) => (
                                <div key={i} className="flex items-center gap-4 p-4 border border-slate-100 rounded-xl hover:border-brand-red/20 transition-colors">
                                    <span className="material-symbols-outlined text-brand-red text-lg">{feat.icon}</span>
                                    <span className="text-[10px] font-bold text-charcoal/60 uppercase racking-widest">{feat.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Legacy Experience Section */}
                <section className="bg-slate-50/50 rounded-3xl p-12 md:p-24 mb-24 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-red/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                    <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="font-heading text-4xl text-brand-red mb-6 uppercase tracking-tight">The Punarnava Path</h2>
                            <p className="text-charcoal/70 leading-relaxed font-body mb-8 italic">"Punarnava literally means 'The Renewer'. Redema uses the stem and leaf extracts of this miracle herb to renew the body's fluid management system, flushing out stagnant toxins."</p>
                            <div className="space-y-4">
                                <div className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-warm-gold"></div>
                                    <span className="text-xs font-bold text-brand-red uppercase tracking-widest">Renewing Punarnava</span>
                                </div>
                                <div className="flex items-center gap-4">
                                    <div className="w-1.5 h-1.5 rounded-full bg-warm-gold"></div>
                                    <span className="text-xs font-bold text-brand-red uppercase tracking-widest">Fluid-Optimizing Phyto-Mix</span>
                                </div>
                            </div>
                        </div>
                        <div className="aspect-video bg-white rounded-2xl shadow-xl flex items-center justify-center border border-slate-100">
                            <div className="text-center group">
                                <span className="block text-5xl font-heading font-bold text-brand-red group-hover:scale-110 transition-transform">89%</span>
                                <span className="text-[10px] font-bold text-charcoal/40 uppercase tracking-widest">Reported Reduced Swelling</span>
                            </div>
                        </div>
                    </div>
                </section>

                <ReviewSystem productId="redema" />
                <SmartRecommendations currentId="redema" />
            </main>
        </div>
    );
};

export default Redema;
