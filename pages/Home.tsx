
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
      <section className="relative min-h-[90vh] flex items-center bg-forest overflow-hidden mt-1">
        {/* Background Image - woman in yoga/stretch pose, silhouetted */}
        <div
          className="absolute inset-0 bg-cover bg-center md:bg-right opacity-60 mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=1920")' }}
        ></div>
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-forest via-forest/80 to-transparent"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 w-full py-20 flex flex-col justify-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 border border-saffron/50 rounded-full px-4 py-1.5 mb-8 w-max bg-forest/30 backdrop-blur-sm">
            <span className="material-symbols-outlined text-saffron text-sm">star</span>
            <span className="text-white text-[10px] sm:text-xs font-bold tracking-widest uppercase mt-0.5">128 Years of Authenticity</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif leading-none mb-6">
            <span className="block text-white font-bold text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight">INDIA'S</span>
            <span className="block text-saffron italic text-6xl sm:text-8xl md:text-9xl pl-2 tracking-tight -mt-4 sm:-mt-6">Healthcare</span>
            <span className="block text-white font-bold text-5xl sm:text-7xl md:text-8xl uppercase tracking-tight -mt-2 sm:-mt-4 relative z-10">RENAISSANCE.</span>
          </h1>

          {/* Subtext */}
          <p className="text-white/80 max-w-xl text-lg sm:text-xl font-medium leading-relaxed mb-10">
            We are not "Alternative Medicine." We are India's primary healthcare solution since 1897.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
            <Link to="/shop" className="bg-saffron text-white font-bold px-8 py-4 flex justify-between items-center rounded-sm hover:-translate-y-1 hover:shadow-xl transition-all w-full sm:w-auto min-w-[200px] border border-saffron text-sm tracking-widest leading-none">
              THE PHARMACY
              <span className="material-symbols-outlined ml-4">arrow_forward</span>
            </Link>
            <Link to="/federation" className="bg-transparent border-2 border-white text-white font-bold px-8 py-4 flex justify-center items-center rounded-sm hover:bg-white/10 transition-all w-full sm:w-auto text-sm tracking-widest leading-none">
              JOIN THE ARMY
            </Link>
          </div>
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
                'EXCLUSIVE WHOLESALE PRICING (25% MARGIN)',
                'DIRECT PATIENT REFERRAL NETWORK',
                'HERITAGE BRAND SUPPORT SINCE 1897',
                'CLINICAL EDUCATION & MENTORSHIP'
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-4 text-white font-bold text-xs sm:text-sm tracking-wide">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-saffron/20 border border-saffron flex items-center justify-center text-saffron">
                    <span className="material-symbols-outlined text-sm">check</span>
                  </span>
                  {item}
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
