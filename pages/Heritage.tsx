
import React from 'react';
import { Link } from 'react-router-dom';

const Heritage: React.FC = () => {
  return (
    <div className="bg-background-light text-forest transition-colors duration-300">
      <section className="relative w-full min-h-[600px] flex items-center justify-center bg-[#FAF6F0] overflow-hidden pt-20">
        <div className="absolute inset-0 opacity-40 mix-blend-multiply bg-cover bg-center" style={{backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBob0v3KOCKbMvFHtXLw9B2tKq4_CYDNQwAV8drQEE3v5E9sfF8-Qrfk3NDGUKXydiRUy86maBoUjgP24ekZrCz4oU7cZ7UKGV5LhW5XfPSBEBgiR-R059b_Fjq2uihCGlRxb8A52sHR_PvvIFGy9CrNHsIgXHWLySWdJH74Seqbrk_DDSGntCSCiF9eQSCzXN32gam2_1lHDW3QsbVEmhRR-4cRRDl9fDUEIi6P3Po2BougJBbVoX-pha2Z6SkcaJEK39ZP8qo2q4')`}}></div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#FAF6F0] via-[#FAF6F0]/60 to-transparent"></div>
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <p className="text-primary font-bold tracking-widest uppercase text-sm mb-4">Est. 1890</p>
          <h1 className="font-serif text-6xl md:text-8xl text-[#2E5339] leading-tight mb-6">A Legacy of Healing</h1>
          <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Honoring the visionary Dr. Jammi Venkataramanayya. Over a century of bridging ancient Ayurvedic wisdom with the rigor of modern science.
          </p>
          <div className="mt-10 flex justify-center gap-4">
            <button className="bg-[#2E5339] text-white px-8 py-3 rounded-lg font-bold hover:bg-opacity-90 transition-all">Our Full Story</button>
            <button className="border-2 border-[#2E5339] text-[#2E5339] px-8 py-3 rounded-lg font-bold hover:bg-[#2E5339] hover:text-white transition-all">View Archive</button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-[960px] mx-auto px-4">
          <h2 className="font-serif text-4xl text-center mb-16 text-[#2E5339]">Our Journey Through Time</h2>
          <div className="relative flex flex-col gap-0">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-[#d0e7d6]"></div>
            
            <div className="relative grid grid-cols-2 gap-x-12 mb-20 items-center">
              <div className="text-right">
                <span className="text-3xl font-bold text-primary font-serif">1890</span>
              </div>
              <div className="relative">
                <div className="absolute -left-[54px] top-1/2 transform -translate-y-1/2 size-4 rounded-full bg-primary border-4 border-background-light"></div>
                <h3 className="text-xl font-bold mb-2">Founding in Vijayanagaram</h3>
                <p className="text-gray-600">Dr. Jammi Venkataramanayya begins his quest to modernize traditional healing practices.</p>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-x-12 mb-20 items-center">
              <div className="order-2 pl-4">
                <span className="text-3xl font-bold text-primary font-serif">1940</span>
              </div>
              <div className="relative order-1 text-right">
                <div className="absolute -right-[54px] top-1/2 transform -translate-y-1/2 size-4 rounded-full bg-primary border-4 border-background-light"></div>
                <h3 className="text-xl font-bold mb-2">Tamil Nadu Govt Award</h3>
                <p className="text-gray-600">Recognition for pioneering work in public health and standardized Ayurveda.</p>
              </div>
            </div>

            <div className="relative grid grid-cols-2 gap-x-12 mb-20 items-center">
              <div className="text-right">
                <span className="text-3xl font-bold text-primary font-serif">1990</span>
              </div>
              <div className="relative">
                <div className="absolute -left-[54px] top-1/2 transform -translate-y-1/2 size-4 rounded-full bg-primary border-4 border-background-light"></div>
                <h3 className="text-xl font-bold mb-2">IIT Collaborations</h3>
                <p className="text-gray-600">Jammi partners with premier technical institutes to validate ancient molecules.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <div className="flex flex-col items-center mb-12">
            <h2 className="font-serif text-4xl text-[#2E5339] mb-4">The Archival Gallery</h2>
            <div className="w-20 h-0.5 bg-primary"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-square paper-grain">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFltJsbpshxH2o8rJ8L6p4Xc5Mytru3y02LObgGdiXUBzoqD6ysY3uoQB8PRt2jZ0RdaKpjh6rbKD45eVNEO0pdufn0OFsRBlN0t3fxf5bY0je9fIjoMsxdWUO5T3JEub0DxmlCDos6r_OKzcRJnrftHxyQFs4Pvsh6xDntEbRGT7pBmTfD42WYe70qkPVbcoHdmHAQ0Qf2EZRkLo9LjL2TWRjV0BWkGZq__NcFLcG5J0q-zlC4trrf3RRXw9tNnqFFMr8jluINZM" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">Sacred Manuscripts</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-square paper-grain">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC4uvU4XxHK-xvZ9o1FeVt2wmeSLT2ngfV3PRw4tG1M3aZ_K-bbeVqo-L0KxIgAn6Qqxnwl5R_lMxTR6_zUlNaO3ApxtjQtqAYXFCfxhPVzHzF3DZNfkqnC8LtXfjgGn3bLniyfA_zNY3VhlJhDZmHmj8WpDBqgNmENVr8N1IUUN6kZ41Zp3o8IoiDbrNdIZSDhSlZdYlqRSf9dstAyIQrlLWkxhpcBlkFypB2QIvuydlQtcrDmFeCN_mbByGPooYkPvAugyu5QpDc" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">1920s Tincture Bottles</p>
              </div>
            </div>
            <div className="group relative overflow-hidden rounded-lg shadow-md aspect-square paper-grain">
              <img className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoCUeoljl8h_UyxyrRdyiGKezJpsJaJxALQMz6zxO1MAVw-FDlLXK_wMmeknvNNDfAm7PNlrc8gYMZNMKGWo4ZrSZ0JWrfJl3rtxpv2bII7__OwX22zWvHYFTf4TZCtFrHE2fRPpfWGx-Ff-ru133fhPYhbKWkpVkeTkWbI3vdemLkayMWJa7eJ5t0h0wjYI1u43b03Mo0pBNDvabkigrqmoussKgkJ_kIgystGboLorMlZkItTLidHC_7OOy8boOLrq6XfwtfFDM" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
                <p className="text-white text-sm font-medium">First Laboratory (1895)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Heritage;
