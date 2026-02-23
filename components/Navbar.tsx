
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <header className="fixed top-0 z-50 w-full glass-header">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="text-primary transition-transform group-hover:rotate-12">
            <span className="material-symbols-outlined text-4xl">local_pharmacy</span>
          </div>
          <h1 className="text-xl font-extrabold tracking-tight uppercase text-slate-900">
            Jammi <span className="font-light">Pharmaceuticals</span>
          </h1>
        </Link>
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link className="hover:text-primary transition-colors" to="/shop">Shop</Link>
          <Link className="hover:text-primary transition-colors" to="/heritage">Our Heritage</Link>
          <Link className="hover:text-primary transition-colors" to="/doctors">Doctor Community</Link>
          <Link className="hover:text-primary transition-colors" to="/consultation">Book Consultation</Link>
        </nav>
        <div className="flex items-center gap-4">
          <div className="relative hidden sm:block">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-primary/60 text-xl">search</span>
            <input className="pl-10 pr-4 py-2 bg-primary/5 border-none rounded-full text-sm focus:ring-2 focus:ring-primary w-48 lg:w-64" placeholder="Search rituals..." type="text"/>
          </div>
          <Link to="/checkout" className="p-2 hover:bg-primary/10 rounded-full transition-colors relative">
            <span className="material-symbols-outlined text-2xl">shopping_bag</span>
            <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full"></span>
          </Link>
          <button className="p-2 hover:bg-primary/10 rounded-full transition-colors">
            <span className="material-symbols-outlined text-2xl">account_circle</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
