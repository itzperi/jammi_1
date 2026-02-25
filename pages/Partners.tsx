import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Partners: React.FC = () => {
    const [formStatus, setFormStatus] = useState<'idle' | 'submitted'>('idle');
    const [activeFaq, setActiveFaq] = useState<number | null>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus('submitted');
    };

    const faqs = [
        {
            q: "Is there a joining fee?",
            a: "No. Partnership is free. You simply buy products at wholesale and sell at MRP. The margin is your earning."
        },
        {
            q: "What is the minimum order?",
            a: "There is no minimum order. Order what you need for your current patients. We deliver pan-India."
        },
        {
            q: "How quickly do orders arrive?",
            a: "Standard delivery within 5–7 business days. Express options available for urgent requirements."
        },
        {
            q: "Can I return unsold products?",
            a: "Yes, unopened products within shelf life can be returned. Details in the partner agreement."
        },
        {
            q: "Do I get exclusive territory?",
            a: "We do not enforce exclusive territories. Multiple practitioners in a city can be partners. Your clinical skill and patient relationships are your competitive advantage, not artificial scarcity."
        },
        {
            q: "How is this different from the JAM Federation?",
            a: "The Jammi Partner Programme is a commercial product partnership. The JAM Federation is a cooperative movement with democratic governance. You can be a product partner without joining the federation, or do both. Many partners choose to join the federation for the additional benefits of community, education, and collective advocacy."
        }
    ];

    return (
        <div className="bg-background-light pt-[5rem]">

            {/* Section A: Hero */}
            <section className="bg-cream py-20 lg:py-32 border-b border-cream-dark">
                <div className="max-w-5xl mx-auto px-6 lg:px-10 text-center">
                    <span className="text-forest font-bold uppercase tracking-widest text-xs mb-6 block border border-forest/20 py-1.5 px-4 rounded-full w-max mx-auto bg-white/50">
                        JAMMI PHARMA PARTNER PROGRAMME
                    </span>
                    <h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl leading-tight mb-8 text-forest">
                        Your Clinic. Our Formulations. <br className="hidden sm:block" />
                        <span className="text-saffron italic">Shared Success.</span>
                    </h1>
                    <p className="text-forest/70 text-xl font-medium leading-relaxed max-w-3xl mx-auto mb-10">
                        Partner with India’s oldest Ayurvedic pharmaceutical house. Add Jammi’s 128-year, AYUSH-licensed product line to your practice. Earn healthy margins. Give your patients medicine that works.
                    </p>
                    <a href="#apply" className="inline-flex bg-saffron text-white font-bold px-10 py-5 rounded-sm hover:-translate-y-1 transition-transform uppercase tracking-widest shadow-xl shadow-saffron/20 leading-none">
                        APPLY TO PARTNER
                    </a>
                </div>
            </section>

            {/* Section B: How It Works */}
            <section className="py-20 lg:py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-forest">How It Works</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
                        <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-cream-dark z-0"></div>

                        {[
                            { step: '1', title: 'Apply', desc: 'Fill in a short application. We verify your qualifications and clinic. Approval within 72 hours.' },
                            { step: '2', title: 'Onboard', desc: 'Receive your wholesale price list, product catalog, and clinic branding kit. Place your first order at partner pricing.' },
                            { step: '3', title: 'Prescribe & Earn', desc: 'Prescribe Jammi formulations to your patients. Dispense directly from your clinic. The margin is your revenue.' }
                        ].map((item, i) => (
                            <div key={i} className="relative z-10 text-center bg-white p-8 border border-cream-dark rounded-xl shadow-sm hover:shadow-md transition-shadow">
                                <div className="w-16 h-16 mx-auto bg-forest text-saffron text-2xl font-bold rounded-full flex items-center justify-center mb-6 font-serif border-4 border-white shadow-sm">
                                    {item.step}
                                </div>
                                <h3 className="text-xl font-bold text-forest mb-4">{item.title}</h3>
                                <p className="text-forest/70 text-sm leading-relaxed">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Section C & D: The Commercial Proposition & Numbers */}
            <section className="bg-forest text-white py-24 lg:py-32 border-y-[6px] border-saffron relative overflow-hidden">
                <div className="absolute inset-0 opacity-5 mix-blend-overlay grain-texture"></div>

                <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">

                    {/* Section D: Numbers (Moved up for impact) */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-24 border-b border-white/10 pb-16 text-center">
                        {[
                            { metric: 'Formulations Available', value: '100+' },
                            { metric: 'Years of Clinical Use', value: '128' },
                            { metric: 'Partner Margin Range', value: '25–30%' },
                            { metric: 'Minimum Order', value: 'None' },
                            { metric: 'Delivery Coverage', value: 'Pan-India' },
                            { metric: 'Licensing', value: 'AYUSH / GMP' }
                        ].map((stat, i) => (
                            <div key={i}>
                                <div className="text-3xl lg:text-4xl font-bold text-saffron mb-2 font-serif">{stat.value}</div>
                                <div className="text-white/60 text-xs uppercase tracking-widest font-bold">{stat.metric}</div>
                            </div>
                        ))}
                    </div>

                    {/* Section C: Proposition */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
                        {/* What You Get */}
                        <div>
                            <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-10"><span className="text-saffron">What</span> You Get</h2>
                            <div className="space-y-8">
                                {[
                                    { title: 'Wholesale Pricing', desc: '25–30% below MRP on all Jammi products. The full margin stays with you.' },
                                    { title: '100+ Formulations', desc: 'Liver care, skin & hair, therapeutics, rasayanas, thailams, ghritams, and more. Complete Ayurvedic pharmacopoeia under one brand.' },
                                    { title: 'Zero Inventory Risk', desc: 'No minimum order. No stocking requirement. Order as you prescribe. We deliver pan-India.' },
                                    { title: 'AYUSH Compliance', desc: 'Every product fully licensed under AYUSH regulations. GMP-certified manufacturing. You prescribe with complete regulatory confidence.' },
                                    { title: 'Clinic Branding Kit', desc: '"Jammi Authorised Partner" signage for your clinic. Product display materials. Patient information leaflets. Branded prescription pad templates.' },
                                    { title: 'Marketing Support', desc: 'Featured on jammi.in as an authorised partner. Social media co-promotion. Local SEO support. Patient referrals from the Jammi platform to your clinic.' },
                                    { title: 'Clinical Knowledge', desc: 'Access to Jammi’s 128-year formulation knowledge base. Dosage protocols, contraindications, combination guides — all documented by three generations of practitioners.' },
                                    { title: 'Dedicated Support', desc: 'Partner WhatsApp group with direct access to the Jammi clinical team. Order support. Product queries. Clinical discussions with fellow partner practitioners.' }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <span className="material-symbols-outlined text-saffron flex-shrink-0 mt-1">check_circle</span>
                                        <div>
                                            <h4 className="font-bold text-white mb-1 tracking-wide">{item.title}</h4>
                                            <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* What Jammi Gets */}
                        <div>
                            <div className="bg-white/5 border border-white/10 p-8 lg:p-12 rounded-2xl sticky top-24">
                                <h2 className="text-3xl lg:text-4xl font-serif font-bold text-white mb-8"><span className="text-saffron">What</span> Jammi Gets</h2>
                                <p className="text-white/80 font-medium mb-10 italic">This is not a one-sided relationship. When you succeed, Jammi succeeds. When Jammi’s products heal your patients, your reputation grows. This is the definition of win-win.</p>

                                <div className="space-y-6">
                                    {[
                                        { from: 'You prescribe and dispense Jammi products', to: 'Expanded distribution without retail overhead' },
                                        { from: 'Your clinical credibility endorses the product', to: 'Doctor-recommended trust that no advertisement can buy' },
                                        { from: 'You share patient feedback and clinical outcomes', to: 'Real-world efficacy data that strengthens the formulary' },
                                        { from: 'Your clinic displays Jammi branding', to: 'Brand visibility in locations where patients make decisions' },
                                        { from: 'You grow your practice using our products', to: 'We grow our reach through your practice' }
                                    ].map((item, i) => (
                                        <div key={i} className="bg-forest/50 p-4 rounded-lg border border-white/5">
                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-white/50 text-[10px] uppercase font-bold tracking-widest">FROM YOU</span>
                                            </div>
                                            <p className="font-bold text-sm mb-4">{item.from}</p>

                                            <div className="flex items-center gap-2 mb-2">
                                                <span className="text-saffron text-[10px] uppercase font-bold tracking-widest">THE VALUE TO JAMMI</span>
                                            </div>
                                            <p className="text-saffron font-bold text-sm">{item.to}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Section E: Product Categories */}
            <section className="py-24 lg:py-32 bg-cream">
                <div className="max-w-7xl mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-5xl font-serif font-bold text-forest mb-4">The Jammi Formulary</h2>
                        <p className="text-forest/70 max-w-2xl mx-auto">100+ proven formulations. A complete Ayurvedic pharmacopoeia under one trusted brand.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                        {[
                            { title: 'Liver Care', desc: 'Flagship. The legendary LiverCure and related formulations.', icon: 'medical_services' },
                            { title: 'Skin & Hair Care', desc: 'Kumkumadi, Neelibringadi, and traditional beauty therapeutics.', icon: 'face_retouching_natural' },
                            { title: 'Rasayanas & Tonics', desc: 'Chyawanprash, Ashwagandha Rasayana, rejuvenation formulations.', icon: 'local_florist' },
                            { title: 'Thailams (Oils)', desc: 'Dhanwantharam, Kottamchukkadi, and therapeutic massage oils.', icon: 'water_drop' },
                            { title: 'Ghritams (Ghee-based)', desc: 'Brahmi Ghritam, Triphala Ghritam, neurological and digestive formulations.', icon: 'spa' },
                            { title: 'General Therapeutics', desc: 'Digestive, respiratory, musculoskeletal, and chronic condition formulations.', icon: 'health_and_safety' }
                        ].map((cat, i) => (
                            <div key={i} className="bg-white p-8 rounded-xl border border-cream-dark hover:border-saffron/50 transition-colors group">
                                <span className="material-symbols-outlined text-saffron text-4xl mb-4 group-hover:scale-110 transition-transform">{cat.icon}</span>
                                <h3 className="text-xl font-bold text-forest mb-2">{cat.title}</h3>
                                <p className="text-forest/70 text-sm mb-6 min-h-[40px]">{cat.desc}</p>
                                <Link to="/shop" className="text-saffron text-xs font-bold uppercase tracking-widest flex items-center gap-2 group-hover:text-forest transition-colors">
                                    VIEW CATEGORY <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                </Link>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <button className="bg-transparent border-2 border-forest text-forest font-bold px-8 py-4 hover:bg-forest hover:text-white transition-colors text-sm uppercase tracking-widest inline-flex items-center gap-2">
                            <span className="material-symbols-outlined">download</span>
                            DOWNLOAD FULL PRODUCT CATALOG
                        </button>
                    </div>
                </div>
            </section>

            {/* Section F: Application Form */}
            <section id="apply" className="py-24 lg:py-32 bg-white">
                <div className="max-w-3xl mx-auto px-6 lg:px-10">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-forest mb-4">Start Prescribing Jammi</h2>
                        <p className="text-forest/70 text-lg">Provide your details below to begin the partnership process.</p>
                    </div>

                    {formStatus === 'idle' ? (
                        <form onSubmit={handleSubmit} className="bg-cream-dark/30 p-8 sm:p-12 rounded-2xl border border-cream-dark/50 shadow-sm">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-forest uppercase tracking-widest">Full Name *</label>
                                    <input required type="text" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-forest uppercase tracking-widest">Qualification *</label>
                                    <select required className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all appearance-none cursor-pointer">
                                        <option value="">Select Qualification</option>
                                        <option value="bams">BAMS</option>
                                        <option value="md">MD Ayurveda</option>
                                        <option value="other">Other Recognized Qualification</option>
                                    </select>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-forest uppercase tracking-widest">Years of Practice *</label>
                                    <input required type="number" min="0" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-forest uppercase tracking-widest">Phone Number *</label>
                                    <input required type="tel" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all" />
                                </div>
                            </div>

                            <div className="space-y-2 mb-6">
                                <label className="text-xs font-bold text-forest uppercase tracking-widest">Email *</label>
                                <input required type="email" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all" />
                            </div>

                            <div className="space-y-2 mb-6">
                                <label className="text-xs font-bold text-forest uppercase tracking-widest">Clinic Name & Address *</label>
                                <textarea required rows={3} className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all resize-none"></textarea>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-forest uppercase tracking-widest">City / State *</label>
                                    <input required type="text" className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold text-forest uppercase tracking-widest text-black/50">Patient Volume (Optional)</label>
                                    <select className="w-full bg-white border border-black/10 rounded-lg px-4 py-3 outline-none focus:border-saffron focus:ring-1 focus:ring-saffron transition-all appearance-none cursor-pointer">
                                        <option value="">Monthly Patients</option>
                                        <option value="0-50">0 - 50</option>
                                        <option value="50-200">50 - 200</option>
                                        <option value="200+">200+</option>
                                    </select>
                                </div>
                            </div>

                            <button type="submit" className="bg-saffron text-white font-bold w-full py-5 rounded-lg hover:bg-forest transition-colors uppercase tracking-widest text-sm shadow-md">
                                APPLY TO PARTNER
                            </button>
                        </form>
                    ) : (
                        <div className="bg-forest text-center p-12 sm:p-16 rounded-2xl shadow-2xl animate-fade-in relative overflow-hidden">
                            <div className="absolute inset-0 opacity-5 mix-blend-overlay grain-texture"></div>
                            <div className="relative z-10">
                                <div className="w-20 h-20 bg-saffron rounded-full flex items-center justify-center mx-auto mb-8 shadow-inner">
                                    <span className="material-symbols-outlined text-white text-4xl">done</span>
                                </div>
                                <h3 className="text-3xl font-serif text-white mb-4">Application Received</h3>
                                <p className="text-white/80 leading-relaxed max-w-md mx-auto mb-10">
                                    Thank you for your interest in partnering with Jammi. Our team will review your application and contact you within 48 hours with your wholesale pricing and onboarding details.
                                </p>
                                <Link to="/shop" className="inline-flex bg-white text-forest font-bold px-8 py-4 rounded-sm hover:bg-saffron hover:text-white transition-colors uppercase tracking-widest text-xs">
                                    EXPLORE THE FORMULARY
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Section G: FAQ */}
            <section className="py-24 bg-cream border-t border-cream-dark">
                <div className="max-w-4xl mx-auto px-6 lg:px-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-serif font-bold text-forest">Frequently Asked Questions</h2>
                    </div>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div key={index} className="bg-white border border-cream-dark rounded-xl overflow-hidden shadow-sm">
                                <button
                                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                                    className="w-full text-left px-6 py-5 flex justify-between items-center focus:outline-none hover:bg-background-light transition-colors"
                                >
                                    <span className="font-bold text-forest pr-4">{faq.q}</span>
                                    <span className={`material-symbols-outlined text-saffron transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`}>
                                        expand_more
                                    </span>
                                </button>
                                <div className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${activeFaq === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}>
                                    <p className="text-forest/70 text-sm leading-relaxed border-t border-black/5 pt-4">
                                        {faq.a}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Partners;
