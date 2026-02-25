
import React, { useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom';

const Footer: React.FC = () => {
  const navigate = useNavigate();
  const clickCount = useRef(0);
  const clickTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleAdminAccess = () => {
    clickCount.current += 1;

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
      clickTimer.current = setTimeout(() => {
        clickCount.current = 0;
      }, 1000);
    }
  };

  return (
    <footer className="bg-forest text-white/80 py-16 border-t-2 border-saffron relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">

        {/* Column 1: Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-saffron cursor-pointer group select-none" onClick={handleAdminAccess}>
            <h4 className="text-3xl font-extrabold tracking-tight uppercase">JAMMI</h4>
          </div>
          <blockquote className="text-white italic text-lg leading-relaxed font-serif">
            "Medicine is not an experiment. It is a legacy. 128 years of proof that authentic healthcare belongs to the practitioners of India."
          </blockquote>
          <div className="flex gap-4 pt-4">
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron hover:text-white transition-colors" href="#" aria-label="Facebook">
              <span className="font-bold">f</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron hover:text-white transition-colors" href="#" aria-label="Instagram">
              <span className="font-bold">in</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron hover:text-white transition-colors" href="#" aria-label="LinkedIn">
              <span className="font-bold">li</span>
            </a>
            <a className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-saffron hover:text-white transition-colors" href="#" aria-label="YouTube">
              <span className="font-bold">yt</span>
            </a>
          </div>
        </div>

        {/* Column 2: Navigation */}
        <div className="space-y-6">
          <h5 className="text-white/50 font-bold uppercase tracking-widest text-xs">NAVIGATION</h5>
          <ul className="space-y-4 text-base font-serif text-white">
            <li><Link className="hover:text-saffron transition-colors" to="/heritage">Heritage</Link></li>
            <li><Link className="hover:text-saffron transition-colors" to="/shop">Pharmacy</Link></li>
            <li><Link className="hover:text-saffron transition-colors" to="/partners">Partner With Us (NEW)</Link></li>
            <li><Link className="hover:text-saffron transition-colors" to="/federation">Federation</Link></li>
            <li><Link className="hover:text-saffron transition-colors" to="/journal">Journal</Link></li>
          </ul>
        </div>

        {/* Column 3: The Fortress */}
        <div className="space-y-6">
          <h5 className="text-white/50 font-bold uppercase tracking-widest text-xs">THE FORTRESS</h5>
          <div className="space-y-2 font-serif text-white">
            <p className="font-bold leading-relaxed">
              ABHIRAMI 2B, DR. NAIR ROAD,<br />
              T. NAGAR, CHENNAI - 600 017
            </p>
            <p className="pt-2 hover:text-saffron transition-colors cursor-pointer">+91 90430 20764</p>
            <p className="hover:text-saffron transition-colors cursor-pointer">frontdesk@jammi.org</p>
          </div>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-[10px] sm:text-xs tracking-widest uppercase text-white/50 font-bold">
        <p>© 2025 JAMMI PHARMACEUTICALS. ALL RIGHTS RESERVED.</p>
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
          <a className="hover:text-white transition-colors" href="#">Quality Protocols</a>
          <span className="hidden sm:inline">|</span>
          <a className="hover:text-white transition-colors" href="#">Legal Charter</a>
          <span className="hidden sm:inline">|</span>
          <a className="hover:text-white transition-colors" href="#">Wholesale Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
