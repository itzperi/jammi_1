import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-cream/95 backdrop-blur-md border-b border-warm-gold/20 py-3 shadow-sm" data-purpose="main-navigation">
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Logo Container */}
        <Link to="/" className="flex items-center space-x-3 group" data-purpose="brand-identity">
          <div className="w-12 h-12 relative flex items-center justify-center">
            {/* Custom SVG Logo based on User Request */}
            <svg className="w-full h-full" viewBox="0 0 100 100">
              <circle cx="50" cy="50" fill="none" r="45" stroke="#C9922A" strokeWidth="1.5"></circle>
              <circle cx="50" cy="50" fill="none" r="42" stroke="#C9922A" strokeWidth="0.5"></circle>
              <text fill="#7B1C2E" fontFamily="Cormorant Garamond" fontSize="20" fontWeight="bold" textAnchor="middle" x="50" y="48">Jammi</text>
              <path d="M35 75 Q50 60 65 75 Q50 85 35 75" fill="#E8821A"></path>
              <path d="M42 75 Q50 68 58 75 Q50 78 42 75" fill="#C0392B"></path>
            </svg>
          </div>
          <div className="hidden md:block">
            <p className="font-subheading text-[10px] tracking-[0.2em] text-warm-gold leading-none">ESTD 1897</p>
            <p className="font-heading text-lg font-bold text-brand-red leading-tight uppercase">JAMMI AYURVEDA</p>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center space-x-8">
          <Link className="font-subheading text-xs tracking-widest text-charcoal hover:text-brand-red transition-colors" to="/heritage">THE LEGACY</Link>
          <Link className="font-subheading text-xs tracking-widest text-charcoal hover:text-brand-red transition-colors" to="/shop">THE PHARMACY</Link>
          <Link className="font-subheading text-xs tracking-widest text-charcoal hover:text-brand-red transition-colors" to="/partners">PARTNER WITH US</Link>
          <Link className="font-subheading text-xs tracking-widest text-charcoal hover:text-brand-red transition-colors" to="/federation">THE FEDERATION</Link>
          <Link className="font-subheading text-xs tracking-widest text-charcoal hover:text-brand-red transition-colors" to="/journal">THE JOURNAL</Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-4">
          <Link to="/consultation" className="hidden sm:inline-block font-subheading text-[10px] tracking-widest border border-brand-red px-5 py-2 text-brand-red hover:bg-brand-red hover:text-white transition-all">
            CONSULT NOW
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-brand-red p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <span className="material-symbols-outlined h-6 w-6">
              {isMobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-cream border-b border-warm-gold/20 py-6 px-6 flex flex-col gap-6 shadow-xl animate-fade-in-up">
          <Link className="font-subheading text-sm tracking-widest text-charcoal" to="/heritage" onClick={() => setIsMobileMenuOpen(false)}>THE LEGACY</Link>
          <Link className="font-subheading text-sm tracking-widest text-charcoal" to="/shop" onClick={() => setIsMobileMenuOpen(false)}>THE PHARMACY</Link>
          <Link className="font-subheading text-sm tracking-widest text-charcoal" to="/partners" onClick={() => setIsMobileMenuOpen(false)}>PARTNER WITH US</Link>
          <Link className="font-subheading text-sm tracking-widest text-charcoal" to="/federation" onClick={() => setIsMobileMenuOpen(false)}>THE FEDERATION</Link>
          <Link className="font-subheading text-sm tracking-widest text-charcoal" to="/journal" onClick={() => setIsMobileMenuOpen(false)}>THE JOURNAL</Link>
          <Link className="font-subheading text-sm tracking-widest text-brand-red border border-brand-red px-5 py-3 text-center" to="/consultation" onClick={() => setIsMobileMenuOpen(false)}>
            CONSULT NOW
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
