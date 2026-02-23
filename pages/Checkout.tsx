
import React from 'react';
import { MOCK_PRODUCTS } from '../constants';

const Checkout: React.FC = () => {
  return (
    <div className="max-w-[1200px] mx-auto px-6 py-12 mt-10">
      <div className="flex flex-wrap gap-2 py-2 mb-8 text-primary text-sm font-medium">
        <span>Cart</span>
        <span className="text-cream-dark">/</span>
        <span className="text-forest">Checkout</span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-8 flex flex-col gap-8">
          <section className="bg-white p-6 rounded-xl border border-cream-dark shadow-sm">
            <div className="flex items-center gap-2 mb-6">
              <span className="material-symbols-outlined text-primary">home_pin</span>
              <h2 className="text-xl font-bold serif">Delivery Address</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input className="rounded-xl border-cream-dark bg-transparent focus:ring-primary h-12 text-sm" placeholder="First Name" />
              <input className="rounded-xl border-cream-dark bg-transparent focus:ring-primary h-12 text-sm" placeholder="Last Name" />
              <input className="md:col-span-2 rounded-xl border-cream-dark bg-transparent focus:ring-primary h-12 text-sm" placeholder="Address line 1" />
              <input className="rounded-xl border-cream-dark bg-transparent focus:ring-primary h-12 text-sm" placeholder="Town / City" />
              <input className="rounded-xl border-cream-dark bg-transparent focus:ring-primary h-12 text-sm" placeholder="Pincode" />
            </div>
          </section>

          <section className="bg-white p-6 rounded-xl border border-cream-dark shadow-sm">
             <div className="flex items-center justify-between mb-6">
               <div className="flex items-center gap-2 font-bold serif text-xl">
                 <span className="material-symbols-outlined text-primary">account_balance_wallet</span>
                 Payment Method
               </div>
             </div>
             <div className="space-y-3">
               {['UPI (GPay, PhonePe)', 'Credit / Debit Cards', 'Cash on Delivery'].map((method, idx) => (
                 <label key={method} className={`flex items-center justify-between p-4 border rounded-xl cursor-pointer ${idx === 0 ? 'border-primary bg-primary/5' : 'border-cream-dark'}`}>
                   <div className="flex items-center gap-4">
                     <input defaultChecked={idx === 0} name="payment" type="radio" className="text-primary focus:ring-primary" />
                     <p className="font-bold">{method}</p>
                   </div>
                 </label>
               ))}
             </div>
          </section>
        </div>

        <div className="lg:col-span-4">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white p-6 rounded-xl border border-cream-dark shadow-md">
              <h3 className="text-lg font-bold serif mb-6 border-b border-cream-dark pb-3">Order Summary</h3>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <img src={MOCK_PRODUCTS[0].image} className="size-16 rounded-lg object-contain bg-cream-dark" />
                  <div>
                    <p className="text-sm font-bold">{MOCK_PRODUCTS[0].name}</p>
                    <p className="text-xs text-[#927654]">Qty: 1</p>
                    <p className="text-sm font-bold text-primary">₹{MOCK_PRODUCTS[0].price}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-3 pt-4 border-t border-cream-dark">
                <div className="flex justify-between text-lg font-bold pt-2">
                  <span>Total</span>
                  <span className="text-primary">₹{MOCK_PRODUCTS[0].price}</span>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-[#c07a28] text-white font-bold py-4 rounded-xl mt-6 transition-all shadow-lg flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">lock</span>
                Place Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
