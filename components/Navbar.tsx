
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <>
      {/* Top accent: thin orange/saffron stripe across the very top of the page */}
      <div className="h-1 w-full bg-saffron absolute top-0 left-0 z-[60]"></div>
      <header className="fixed top-1 z-50 w-full glass-header">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
          <Link to="/" className="flex flex-col items-center justify-center group relative mt-2">
            <h1 className="text-2xl font-extrabold tracking-tight uppercase text-forest leading-none">
              JAMMI
            </h1>
            <span className="text-[10px] font-bold tracking-widest text-forest mt-0.5">SINCE 1897</span>
            <div className="w-full h-0.5 bg-saffron mt-1"></div>
          </Link>
          <nav className="hidden md:flex items-center gap-8 text-sm font-bold text-forest tracking-wide">
            <Link className="hover:text-saffron transition-colors uppercase" to="/heritage">The Legacy</Link>
            <Link className="hover:text-saffron transition-colors uppercase" to="/shop">The Pharmacy</Link>
            <Link className="hover:text-saffron transition-colors uppercase relative" to="/partners">
              Partner With Us
              <span className="absolute -top-3 -right-3 bg-saffron text-white text-[8px] px-1.5 py-0.5 rounded-sm">NEW</span>
            </Link>
            <Link className="hover:text-saffron transition-colors uppercase" to="/federation">The Federation</Link>
            <Link className="hover:text-saffron transition-colors uppercase" to="/journal">The Journal</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/consultation" className="hidden sm:flex bg-saffron text-white px-5 py-2 rounded-full font-bold text-sm tracking-wide hover:bg-forest transition-colors">
              CONSULT NOW
            </Link>
            <Link to="/checkout" className="p-2 hover:bg-forest/10 rounded-full transition-colors relative text-forest">
              <span className="material-symbols-outlined text-2xl">shopping_cart</span>
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-[10px] flex justify-center items-center rounded-full font-bold">2</span>
            </Link>
            <button className="p-2 hover:bg-forest/10 rounded-full transition-colors text-forest hidden sm:block">
              <span className="material-symbols-outlined text-2xl">account_circle</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
