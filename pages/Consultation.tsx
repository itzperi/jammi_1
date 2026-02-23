
import React, { useState } from 'react';

const Consultation: React.FC = () => {
  const [step, setStep] = useState(1);
  const [specialty, setSpecialty] = useState('General Wellness');

  return (
    <div className="bg-background-light min-h-screen pt-24 pb-12">
      <main className="max-w-[1200px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="w-full h-64 bg-cover bg-center rounded-xl shadow-lg border-4 border-white" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBLJqdp4MaCMdowlnInPxVfMm9zit-rk5HY7Yss_bUsOipnH8pnLavfXbBNh-Qhr8WFEtqpY9qf7X8_mV9NCIzU3z_56o4FjRG3wfzXF-QV01PvbwVZ38xh4PSdaBz34j3jjB2v0siUaMyHNg40GsRuPCrLkmo1vQq-FWmlrGYs42H1SHeoHoAQa3BKo9SuKy8ELt-MdIfUH9twgJ1FJFO2Dn2uFhCP4yBivrAZ2I8PrVd2fKNEmx3TNaIpGp28Yw12M8mr5qkD9Ws')" }}></div>
            <div className="space-y-6">
              <h1 className="text-4xl font-black text-[#0d3b1d] leading-tight">Why Consult our Experts?</h1>
              <p className="text-lg text-slate-600">Experience personalized care and authentic Ayurveda from our specialists with over 100 years of legacy.</p>
              <ul className="space-y-4">
                {[
                  { icon: 'verified_user', text: 'Personalized Care Plans' },
                  { icon: 'spa', text: 'Authentic Ayurvedic Principles' },
                  { icon: 'support_agent', text: 'Ongoing Support & Follow-ups' }
                ].map(item => (
                  <li key={item.text} className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-2 rounded-full">{item.icon}</span>
                    <span className="font-semibold">{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="bg-white rounded-xl shadow-2xl p-8 border border-slate-100">
              <h2 className="text-2xl font-bold text-[#0d3b1d] mb-8 flex items-center gap-2">
                <span className="material-symbols-outlined">event_available</span> Book Your Consultation
              </h2>
              
              <section className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Step 1: Select Specialty</h3>
                <div className="flex gap-3 flex-wrap">
                  {['General Wellness', 'Skin & Hair', 'Therapeutics', 'Immunity'].map(s => (
                    <button 
                      key={s}
                      onClick={() => setSpecialty(s)}
                      className={`px-5 py-2 rounded-full font-semibold text-sm border-2 transition-all ${specialty === s ? 'bg-primary border-primary text-[#0d3b1d]' : 'bg-transparent border-slate-200 text-slate-600 hover:border-primary'}`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </section>

              <section className="mb-8">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">Step 2: Date & Time</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
                  <div className="bg-background-light p-4 rounded-xl border border-slate-200">
                    <div className="flex items-center justify-between mb-4">
                      <button className="p-1 hover:bg-slate-200 rounded-full"><span className="material-symbols-outlined">chevron_left</span></button>
                      <span className="font-bold">October 2023</span>
                      <button className="p-1 hover:bg-slate-200 rounded-full"><span className="material-symbols-outlined">chevron_right</span></button>
                    </div>
                    <div className="grid grid-cols-7 gap-1 text-center text-xs font-bold text-slate-400 mb-2">
                      {['S','M','T','W','T','F','S'].map(d => <div key={d}>{d}</div>)}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {[...Array(9)].map((_, i) => (
                        <button key={i} className={`h-8 w-8 flex items-center justify-center rounded-full text-sm ${i === 4 ? 'bg-[#0d3b1d] text-white font-bold ring-2 ring-[#f4a261]' : 'hover:bg-primary/20'}`}>{i+1}</button>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-bold text-slate-500">Available Slots</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM'].map((t, i) => (
                        <button key={t} className={`py-2 text-xs font-bold rounded-lg border-2 transition-all ${i === 0 ? 'border-[#f4a261] bg-[#f4a261]/10 text-slate-800' : 'border-slate-200 hover:border-primary'}`}>{t}</button>
                      ))}
                    </div>
                  </div>
                </div>
              </section>

              <div className="pt-8 mt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-6">
                <div>
                  <p className="text-xs text-slate-500 uppercase font-bold tracking-widest mb-1">Consultation Fee</p>
                  <p className="text-3xl font-black text-[#f4a261]">₹999.00</p>
                </div>
                <button className="w-full md:w-auto min-w-[240px] bg-primary hover:bg-primary/90 text-[#0d3b1d] py-4 rounded-full font-black text-lg shadow-xl shadow-primary/20 flex items-center justify-center gap-2">
                  Confirm Booking <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Consultation;
