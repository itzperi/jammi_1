
import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAdminAccess = () => {
    clickCount.current += 1;
    if (clickTimer.current) clearTimeout(clickTimer.current);

    if (clickCount.current === 3) {
      clickCount.current = 0;
      const user = prompt("Username:");
      const pass = prompt("Password:");
      if (user === "Jammi" && pass === "Jammi") navigate('/admin');
    } else {
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 1000);
    }
  };

  return (
    <footer className="relative bg-white pt-24 pb-12 overflow-hidden">
      {/* Premium Top Border (Gold Thread) */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-warm-gold/40 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Upper Footer: Branding & Newsletter */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-20 border-b border-brand-red/5">

          {/* Brand Vision */}
          <div className="lg:col-span-5 space-y-8">
            <div className="w-24 h-24 border-[0.5px] border-brand-red/20 rounded-full flex items-center justify-center cursor-help select-none transition-transform hover:scale-110 active:scale-95" onClick={handleAdminAccess}>
              <img
                src="/images/WhatsApp Image 2026-02-09 at 17.08.01.jpeg"
                alt="Jammi Logo"
                className="w-[70%] h-auto grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-500"
              />
            </div>

            <div className="space-y-4">
              <h4 className="font-subheading text-brand-red text-xs font-bold tracking-[0.3em] uppercase">The Jammi Creed</h4>
              <p className="font-heading text-2xl text-charcoal leading-snug italic max-w-sm">
                "We do not sell hope; we sell 128 years of clinical results. Authentic Ayurveda demands respect, not belief."
              </p>
            </div>

            {/* Social Circle */}
            <div className="flex gap-4">
              {['facebook', 'instagram', 'linkedin', 'youtube'].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-full border border-brand-red/10 flex items-center justify-center group transition-all duration-500 hover:border-brand-red hover:bg-brand-red"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${social}/121212`}
                    alt={social}
                    className="w-4 h-4 opacity-40 group-hover:invert group-hover:opacity-100 transition-all"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Links Grid */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <div className="space-y-6">
              <h5 className="font-subheading text-brand-red/40 text-[10px] font-bold tracking-[0.2em] uppercase">Institution</h5>
              <ul className="space-y-4 font-body text-sm text-charcoal/70">
                <li><Link to="/heritage" className="hover:text-brand-red transition-colors">Our Heritage</Link></li>
                <li><Link to="/federation" className="hover:text-brand-red transition-colors">The Federation</Link></li>
                <li><Link to="/partners" className="hover:text-brand-red transition-colors">Clinical Partners</Link></li>
                <li><Link to="/journal" className="hover:text-brand-red transition-colors">The Journal</Link></li>
              </ul>
            </div>
            <div className="space-y-6">
              <h5 className="font-subheading text-brand-red/40 text-[10px] font-bold tracking-[0.2em] uppercase">Pharmacy</h5>
              <ul className="space-y-4 font-body text-sm text-charcoal/70">
                <li><Link to="/shop" className="hover:text-brand-red transition-colors">All Formulations</Link></li>
                <li><Link to="/shop?cat=Therapeutics" className="hover:text-brand-red transition-colors">Therapeutics</Link></li>
                <li><Link to="/shop?cat=Wellness" className="hover:text-brand-red transition-colors">Wellness</Link></li>
                <li><Link to="/consultation" className="hover:text-brand-red transition-colors">Consultation</Link></li>
              </ul>
            </div>
          </div>

          {/* Newsletter / Fortress */}
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-brand-red/5 p-8 rounded-sm space-y-4 border border-brand-red/5">
              <h5 className="font-subheading text-brand-red text-[10px] font-bold tracking-[0.2em] uppercase">Join The Registry</h5>
              <p className="font-body text-xs text-charcoal/60 leading-relaxed">Receive clinical insights and heritage stories monthly.</p>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Eminence's Email"
                  className="w-full bg-white border border-brand-red/10 px-4 py-3 text-xs focus:outline-none focus:border-brand-red transition-colors font-body"
                />
                <button className="absolute right-2 top-1/2 -translate-y-1/2 text-brand-red hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-lg">arrow_forward</span>
                </button>
              </div>
            </div>

            <div className="pt-4 space-y-4">
              <h5 className="font-subheading text-brand-red/40 text-[10px] font-bold tracking-[0.2em] uppercase">The Fortress</h5>
              <p className="font-body text-xs text-charcoal/70 leading-relaxed">
                Abhirami 2B, Dr. Nair Road,<br />
                T. Nagar, Chennai - 600 017
              </p>
            </div>
          </div>
        </div>

        {/* Lower Footer: Legal & Copyright */}
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 border-t border-brand-red/5">
          <p className="font-subheading text-[9px] font-bold tracking-[0.2em] text-brand-red/30 uppercase text-center md:text-left">
            © 2025 Jammi Pharmaceuticals. <span className="mx-2">|</span> Authenticity Preserved Since 1897
          </p>

          <div className="flex flex-wrap justify-center gap-6 font-subheading text-[9px] font-bold tracking-[0.2em] text-brand-red/30 uppercase">
            <a href="#quality" className="hover:text-brand-red transition-colors">Quality Protocols</a>
            <a href="#legal" className="hover:text-brand-red transition-colors">Legal Charter</a>
            <a href="#wholesale" className="hover:text-brand-red transition-colors">Wholesale Policy</a>
          </div>
        </div>
      </div>

      {/* Background Decorative Text (Ghosted) */}
      <div className="absolute -bottom-20 -right-20 pointer-events-none select-none">
        <span className="text-[20rem] font-heading font-bold text-brand-red/[0.02] leading-none uppercase">Jammi</span>
      </div>
    </footer>
  );
};

export default Footer;
