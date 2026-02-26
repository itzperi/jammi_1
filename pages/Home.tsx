
import React from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { MOCK_PRODUCTS } from '../constants';

const Home: React.FC = () => {
  // Hero Products
  const heroProducts = MOCK_PRODUCTS.filter(p =>
    ['triphala-churna', 'yummunity', 'trip-caps'].includes(p.id)
  );

  return (
    <div className="bg-background-light pt-[5rem]">

      {/* Section 1: Hero */}
      {/* Section 1: Elite Heritage Hero */}
      <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-[#fafafa]">
        {/* Layered Background Infrastructure */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(123,28,46,0.05),transparent)]"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-brand-red/[0.02] -skew-x-12 translate-x-1/2"></div>
          <div className="absolute inset-0 grain-texture opacity-[0.12] pointer-events-none"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full pt-20 pb-16 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

          {/* Elite Textual Content */}
          <div className="lg:col-span-7 space-y-12">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-4 bg-white/80 backdrop-blur-md border border-brand-red/10 px-6 py-2 rounded-full shadow-sm animate-fade-in">
                <span className="w-1.5 h-1.5 rounded-full bg-warm-gold animate-ping"></span>
                <span className="text-brand-red font-subheading text-[10px] font-bold tracking-[0.4em] uppercase mt-0.5">India's Clinical Gold Standard</span>
              </div>

              <h1 className="font-heading leading-[0.85] animate-reveal">
                <span className="block text-brand-red text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter mb-2">ROYAL</span>
                <span className="flex items-center gap-6">
                  <span className="text-warm-gold italic text-7xl md:text-9xl lg:text-[9rem] font-heading leading-none">healing</span>
                  <span className="h-[2px] flex-grow bg-brand-red/10 hidden md:block"></span>
                </span>
                <span className="block text-brand-red text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter mt-2">DEFINED.</span>
              </h1>
            </div>

            <div className="max-w-xl animate-fade-in-up [animation-delay:400ms]">
              <p className="text-charcoal/70 text-lg md:text-xl font-body leading-relaxed border-l-4 border-warm-gold pl-8">
                Since 1897, we have served the lineage of wellness. Bridging royal Ayurvedic secrets with deep clinical research to restore your biology's original design.
              </p>
            </div>

            {/* Conversion Duo */}
            <div className="flex flex-col sm:flex-row gap-6 animate-fade-in-up [animation-delay:600ms]">
              <Link to="/shop" className="group relative bg-brand-red text-white font-subheading font-bold px-12 py-6 rounded-sm overflow-hidden transition-all duration-700 hover:shadow-[0_20px_50px_rgba(123,28,46,0.3)] hover:-translate-y-1 text-center">
                <span className="relative z-10 tracking-[0.3em] text-xs uppercase">Enter The Reserve</span>
                <div className="absolute inset-0 bg-dark-burgundy -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-in-out"></div>
              </Link>
              <Link to="/heritage" className="group border border-brand-red/20 text-brand-red font-subheading font-bold px-12 py-6 rounded-sm transition-all duration-500 hover:bg-white hover:border-brand-red hover:shadow-xl text-center">
                <span className="tracking-[0.3em] text-xs uppercase">The Genesis Case</span>
              </Link>
            </div>

            {/* Elite Trust Strip */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-10 pt-12 border-t border-brand-red/10 border-dashed animate-fade-in [animation-delay:800ms]">
              {[
                { value: "128", label: "Years of Legacy", icon: "history_edu" },
                { value: "50k+", label: "Lives Restored", icon: "groups" },
                { value: "100%", label: "Clinical Purity", icon: "verified" }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col gap-1 items-start">
                  <span className="material-symbols-outlined text-warm-gold text-2xl mb-2">{stat.icon}</span>
                  <span className="text-2xl font-heading font-bold text-brand-red">{stat.value}</span>
                  <span className="text-[9px] font-bold text-charcoal/40 uppercase tracking-widest">{stat.label}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Excellence: Hero Image with Floating Elements */}
          <div className="lg:col-span-5 relative hidden lg:block perspective-2000">
            <div className="relative z-10 w-full aspect-[4/5] bg-white shadow-[0_60px_120px_-20px_rgba(123,28,46,0.15)] rounded-2xl overflow-hidden group transition-transform duration-1000 [transform-style:preserve-3d] hover:rotate-y-6">
              <div className="absolute inset-0 bg-gradient-to-br from-brand-red/[0.02] to-brand-red/[0.08] pointer-events-none"></div>
              <div className="absolute inset-0 p-12 flex items-center justify-center">
                <img
                  src="/images/TriphalaChurna_2.png"
                  alt="Jammi Masterpiece Exhibit"
                  className="w-[85%] h-auto object-contain drop-shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-transform duration-1000 group-hover:scale-110 group-hover:rotate-3"
                />
              </div>

              {/* Information Overlay */}
              <div className="absolute bottom-10 left-10 right-10 flex justify-between items-end">
                <div className="bg-white/90 backdrop-blur-md p-6 rounded-xl border border-brand-red/10 shadow-xl translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-700">
                  <h4 className="font-heading text-brand-red text-lg font-bold mb-1">Triphala Churna</h4>
                  <p className="text-[10px] font-bold text-charcoal/60 uppercase tracking-widest">Masterpiece Detoxifier</p>
                </div>
                <div className="w-24 h-24 rounded-full border border-warm-gold/30 border-dashed animate-spin-slow flex items-center justify-center p-2 opacity-30 group-hover:opacity-100 transition-opacity">
                  <div className="w-full h-full rounded-full border border-warm-gold flex items-center justify-center text-warm-gold text-[8px] font-bold uppercase tracking-tighter text-center italic">Authentic Ayurveda</div>
                </div>
              </div>
            </div>

            {/* Floating Trust Fragments */}
            <div className="absolute -top-12 -right-12 bg-white/95 backdrop-blur-md p-6 shadow-2xl rounded-2xl border border-brand-red/5 z-20 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-brand-red/10 flex items-center justify-center text-brand-red">
                  <span className="material-symbols-outlined">stars</span>
                </div>
                <div>
                  <div className="text-xl font-bold text-brand-red">4.9/5</div>
                  <div className="text-[9px] font-bold text-charcoal/40 uppercase tracking-widest">Global Rating</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 animate-pulse">
          <span className="text-[9px] font-bold text-charcoal uppercase tracking-[0.4em]">Descend</span>
          <div className="w-px h-12 bg-gradient-to-b from-brand-red to-transparent"></div>
        </div>
      </section>

      {/* Section 2: Stats Scroller */}
      <section className="bg-white py-6 border-b-2 border-cream-dark overflow-hidden whitespace-nowrap flex group">
        <div className="animate-marquee flex gap-12 items-center min-w-full pl-12">
          {/* Loop items */}
          {[1, 2, 3].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-forest font-extrabold text-xl lg:text-3xl tracking-widest uppercase flex items-center gap-12 font-sans">
                128 YEARS OF HEALING <span className="text-saffron">☆</span>
              </span>
              <span className="text-forest font-extrabold text-xl lg:text-3xl tracking-widest uppercase flex items-center gap-12 font-sans">
                50,000+ LIVES <span className="text-saffron">☆</span>
              </span>
              <span className="text-forest font-extrabold text-xl lg:text-3xl tracking-widest uppercase flex items-center gap-12 font-sans">
                100+ FORMULATIONS <span className="text-saffron">☆</span>
              </span>
              <span className="text-forest font-extrabold text-xl lg:text-3xl tracking-widest uppercase flex items-center gap-12 font-sans">
                AYUSH LICENSED <span className="text-saffron">☆</span>
              </span>
              <span className="text-forest font-extrabold text-xl lg:text-3xl tracking-widest uppercase flex items-center gap-12 font-sans">
                PAN-INDIA DELIVERY <span className="text-saffron">☆</span>
              </span>
            </React.Fragment>
          ))}
        </div>
      </section>

      {/* Section 3: The Jammi Claim */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <h2 className="font-serif leading-none">
              <span className="block text-forest font-bold text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight">MEDICINE IS</span>
              <span className="block text-forest font-bold text-5xl lg:text-6xl xl:text-7xl uppercase tracking-tight">NOT A</span>
              <span className="block text-saffron italic text-5xl lg:text-6xl xl:text-7xl tracking-tight pr-4">Marketing Claim.</span>
            </h2>
            <div className="w-16 h-1 bg-saffron"></div>
            <blockquote className="text-forest/70 italic text-xl lg:text-2xl font-serif leading-relaxed border-l-4 border-saffron/30 pl-6">
              "We don't sell hope. We sell 128 years of clinical results. Authentic Ayurveda doesn't ask for belief—it demands respect."
            </blockquote>
            <div className="pt-4">
              <Link to="/heritage" className="inline-flex text-forest font-bold uppercase tracking-widest text-sm items-center gap-2 hover:text-saffron transition-colors pb-1 border-b-2 border-forest hover:border-saffron">
                DISCOVER THE 1897 GENESIS
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mx-auto mt-12 lg:mt-0 w-full max-w-lg lg:max-w-full rotate-2 hover:rotate-0 transition-transform duration-700">
            <div className="absolute inset-0 bg-saffron translate-x-4 translate-y-4 lg:translate-x-6 lg:translate-y-6 shadow-2xl"></div>
            <img
              src="https://images.unsplash.com/photo-1581093450021-4a7360e9a6b5?auto=format&fit=crop&q=80&w=800"
              alt="Jammi Authentic Lab"
              className="relative z-10 w-full aspect-[4/5] object-cover grayscale hover:grayscale-0 transition-all duration-700 shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Section 4: Product Curation */}
      <section className="bg-background-light py-24 lg:py-32 border-b border-cream-dark border-t border-cream-dark">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16">
            <div className="max-w-xl">
              <span className="text-saffron font-bold uppercase tracking-widest text-sm mb-4 block">CURATED SELECTION</span>
              <h2 className="text-5xl lg:text-6xl font-serif font-bold text-forest">THE ESSENTIALS</h2>
            </div>
            <Link to="/shop" className="border-2 border-forest text-forest font-bold uppercase tracking-widest text-xs px-8 py-4 hover:bg-forest hover:text-white transition-colors">
              BROWSE FULL INVENTORY
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {heroProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: Prescribe Jammi (Partnership) */}
      <section className="bg-cream-dark py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
            <span className="text-saffron font-bold uppercase tracking-widest text-xs mb-6 block">FOR AYURVEDA PRACTITIONERS</span>
            <h2 className="font-serif leading-none mb-8">
              <span className="block text-forest font-bold text-5xl sm:text-6xl uppercase tracking-tight">PRESCRIBE</span>
              <span className="block text-saffron font-bold text-5xl sm:text-6xl uppercase tracking-tight mb-2">JAMMI.</span>
              <span className="block text-forest text-2xl sm:text-3xl tracking-tight mt-4 font-normal">Add 128 Years to Your Practice.</span>
            </h2>
            <p className="text-forest/80 text-lg leading-relaxed mb-12 max-w-xl font-medium">
              You heal the patient. We supply the medicine.<br /><br /> Jammi Pharmaceuticals invites qualified Ayurveda practitioners to partner with us commercially. Prescribe and retail our AYUSH-licensed, time-tested formulations through your clinic. Your patients get 128 years of proven results. You get a trusted product line and healthy margins — without the overhead of manufacturing.
              <br /><br />
              This is a straightforward business partnership. You focus on healing. We handle formulation, quality, compliance, and supply.
            </p>

            {/* Benefits Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 mb-12 pt-6 border-t border-forest/10">
              {[
                { title: '25–30% MARGINS', desc: 'Wholesale pricing on all 100+ formulations. The margin is yours to keep.', icon: 'payments' },
                { title: 'ZERO INVENTORY RISK', desc: 'Order what you need, when you need. No minimum stock. Pan-India delivery.', icon: 'inventory' },
                { title: 'AYUSH LICENSED', desc: 'Every formulation fully licensed and compliant. Prescribe with confidence.', icon: 'verified_user' },
                { title: '128-YEAR FORMULARY', desc: 'Clinically proven across generations. Results, not experiments.', icon: 'auto_stories' }
              ].map((benefit, i) => (
                <div key={i} className="flex gap-4">
                  <span className="material-symbols-outlined text-saffron text-3xl flex-shrink-0">{benefit.icon}</span>
                  <div>
                    <h4 className="text-forest font-bold text-sm tracking-wide mb-1">{benefit.title}</h4>
                    <p className="text-forest/70 text-xs leading-relaxed">{benefit.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link to="/partners" className="bg-saffron text-white font-bold px-8 py-5 flex justify-between items-center hover:-translate-y-1 transition-transform border border-saffron w-full sm:w-auto text-sm uppercase tracking-widest text-center shadow-lg leading-none">
                BECOME A PARTNER
                <span className="material-symbols-outlined ml-2">arrow_forward</span>
              </Link>
              <Link to="/shop" className="bg-transparent text-forest border-2 border-forest font-bold px-8 py-5 hover:bg-forest hover:text-white transition-colors w-full sm:w-auto text-sm uppercase tracking-widest flex justify-center items-center text-center leading-none">
                VIEW FORMULARY
              </Link>
            </div>

            {/* Trust Strip */}
            <div className="mt-12 flex flex-col sm:flex-row gap-6 items-start sm:items-center text-sm font-bold tracking-wide text-forest/50">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-saffron">location_on</span>
                TRUSTED BY 500+ PRACTITIONERS
              </div>
              <div className="hidden sm:block w-1.5 h-1.5 bg-saffron rounded-full"></div>
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-saffron">trending_up</span>
                AVG. 15-20% REVENUE UPLIFT
              </div>
            </div>
          </div>

          {/* Right Column (Image) */}
          <div className="relative mx-auto mt-12 lg:-mt-10 lg:-mr-10 xl:-mr-20">
            <div className="aspect-[4/5] overflow-hidden -rotate-2 w-full max-w-sm sm:max-w-md lg:max-w-lg shadow-2xl relative z-10 border-8 border-white group">
              <img
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&q=80&w=800"
                alt="Ayurveda Practitioner"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-8 -left-4 sm:-left-8 bg-forest p-6 sm:p-8 text-white z-20 shadow-2xl w-[90%] sm:max-w-xs rotate-2">
              <span className="material-symbols-outlined text-saffron text-3xl mb-4">format_quote</span>
              <p className="font-serif italic text-sm sm:text-base md:text-lg leading-relaxed">"Adding Jammi to my clinic was the best decision for my patients and my practice."</p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: The Federation */}
      <section className="bg-forest py-24 lg:py-32 relative overflow-hidden">
        {/* Subtle background texture/pattern */}
        <div className="absolute inset-0 opacity-5 grain-texture mix-blend-overlay"></div>
        <div className="absolute right-0 top-0 w-1/2 h-full bg-saffron/5 skew-x-12 -translate-x-32 hidden lg:block"></div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">

          {/* Left Column */}
          <div>
            <span className="text-saffron font-bold uppercase tracking-widest text-xs mb-6 block">JAMMI AYURVEDA MOVEMENT</span>
            <h2 className="font-serif leading-none mb-8">
              <span className="block text-white font-bold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight">STOP</span>
              <span className="block text-saffron font-bold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight">COMPETING.</span>
              <span className="block text-white font-bold text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight mt-2 pb-2">START LEADING.</span>
            </h2>
            <p className="text-white/80 text-xl font-medium leading-relaxed mb-12 max-w-md">
              Join India's most powerful collective of traditional healers. We share our 128-year legacy, you provide the authentic healing. Together, we take back Indian healthcare.
            </p>

            <ul className="space-y-6 mb-12">
              {[
                { title: 'BRING THE AYURVEDA BACK', desc: 'Regain the lost territory of Indian Healthcare through clinical heritage.' },
                { title: 'STOP THE QUACKERY', desc: 'Move away from commercial placeholders to research-backed formulations.' },
                { title: 'DIRECT HERITAGE ACCESS', desc: 'Plug into 128 years of clinical records and practitioner wisdom.' },
                { title: 'ECONOMIC SOVEREIGNTY', desc: 'Higher margins and direct referral networks for true practitioners.' }
              ].map((item, idx) => (
                <li key={idx} className="flex gap-4">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-saffron/20 border border-saffron flex items-center justify-center text-saffron">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </span>
                  <div>
                    <h4 className="text-white font-bold text-sm tracking-wide mb-1">{item.title}</h4>
                    <p className="text-white/60 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="w-full sm:w-max">
              <Link to="/federation" className="bg-saffron text-white font-bold px-10 py-5 rounded-sm hover:-translate-y-1 transition-transform w-full block sm:inline-block text-center uppercase tracking-widest shadow-xl shadow-saffron/20 leading-none">
                APPLY TO THE FEDERATION
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="relative mx-auto mt-12 lg:mt-0 w-full max-w-sm sm:max-w-md lg:max-w-full lg:ml-auto perspective-1000">
            <div className="absolute inset-0 bg-transparent border-4 border-saffron translate-x-6 translate-y-6 lg:translate-x-8 lg:translate-y-8 z-0"></div>
            <img
              src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&q=80&w=800"
              alt="Confident Practitioner"
              className="relative z-10 w-full aspect-square sm:aspect-[4/5] object-cover grayscale opacity-90 hover:grayscale-0 hover:opacity-100 transition-all duration-700 shadow-2xl"
            />
          </div>

        </div>
      </section>

    </div>
  );
};

export default Home;
