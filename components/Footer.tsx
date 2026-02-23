
import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const clickCount = useRef(0);
  // Using ReturnType<typeof setTimeout> instead of NodeJS.Timeout to fix the 'Cannot find namespace NodeJS' error in browser environments.
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAdminAccess = () => {
    clickCount.current += 1;
    
    // Clear previous reset timer if it exists
    if (clickTimer.current) {
      clearTimeout(clickTimer.current);
    }

    if (clickCount.current === 3) {
      clickCount.current = 0;
      const user = prompt("Username:");
      const pass = prompt("Password:");
      if (user === "Jammi" && pass === "Jammi") {
        navigate('/admin');
      } else if (user !== null) {
        alert("Unauthorized access attempt.");
      }
    } else {
      // Reset the counter if the user stops clicking for more than 1 second
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 1000);
    }
  };

  return (
    <footer className="bg-background-dark text-slate-400 py-20 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white cursor-pointer group select-none" onClick={handleAdminAccess}>
            <span className="material-symbols-outlined text-primary text-3xl transition-transform group-hover:scale-110">local_pharmacy</span>
            <h4 className="text-xl font-bold tracking-tight uppercase">JAMMI</h4>
          </div>
          <p className="text-sm leading-relaxed">
            Preserving 120 years of Ayurvedic excellence, blending the wisdom of the past with the science of the future.
          </p>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors" href="#">
              <span className="material-symbols-outlined text-xl">mail</span>
            </a>
          </div>
        </div>
        <div className="space-y-6">
          <h5 className="text-white font-bold uppercase tracking-widest text-xs">Explore</h5>
          <ul className="space-y-4 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#/shop">Shop All Products</a></li>
            <li><a className="hover:text-primary transition-colors" href="#/heritage">Our Story</a></li>
            <li><a className="hover:text-primary transition-colors" href="#/doctors">Doctor Community</a></li>
            <li><a className="hover:text-primary transition-colors" href="#/consultation">Consultation</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="text-white font-bold uppercase tracking-widest text-xs">Support</h5>
          <ul className="space-y-4 text-sm">
            <li><a className="hover:text-primary transition-colors" href="#">Contact Us</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Shipping & Returns</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Store Locator</a></li>
            <li><a className="hover:text-primary transition-colors" href="#">Wholesale</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h5 className="text-white font-bold uppercase tracking-widest text-xs">Newsletter</h5>
          <p className="text-sm">Receive ancient wisdom and modern updates.</p>
          <form className="flex flex-col gap-3" onSubmit={(e) => e.preventDefault()}>
            <input className="bg-white/5 border-white/10 rounded-lg text-sm px-4 py-2 focus:ring-primary focus:border-primary outline-none" placeholder="Your email" type="email"/>
            <button className="bg-primary text-white font-bold py-2 rounded-lg hover:brightness-110 transition-all">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] uppercase tracking-widest font-bold">
        <p>© 2024 Jammi Pharmaceuticals. All Rights Reserved.</p>
        <div className="flex gap-8">
          <a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-white transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-white transition-colors" href="#">Accessibility</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
