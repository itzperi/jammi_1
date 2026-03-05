"use client";

import React, { useState } from 'react';
import { MOCK_PRODUCTS } from '../constants';

const Checkout: React.FC = () => {
  // Mock cart containing 1 item for demonstration
  const [cartItems, setCartItems] = useState([MOCK_PRODUCTS[0]]);

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
  const total = subtotal; // add taxes/shipping as needed

  // Get categories of items currently in cart
  const cartCategories = Array.from(new Set(cartItems.map(item => item.category)));

  // Bundle Suggestions: Find products in the same category that aren't already in the cart
  const suggestedProducts = MOCK_PRODUCTS.filter(
    option => cartCategories.includes(option.category) && !cartItems.find(item => item.id === option.id)
  ).slice(0, 2); // Show max 2 suggestions

  const handleAddBundle = (product: any) => {
    // Add product to cart with a 3% bundle discount
    const discountedProduct = {
      ...product,
      price: Math.round(product.price * 0.97),
      isBundleDiscount: true
    };
    setCartItems([...cartItems, discountedProduct]);
  };

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
                {cartItems.map((item, idx) => (
                  <div key={idx} className="flex gap-4 relative">
                    <img src={item.image} className="size-16 rounded-lg object-contain bg-cream-dark" alt={item.name} />
                    <div className="flex-1">
                      <p className="text-sm font-bold leading-tight">{item.name}</p>
                      <p className="text-xs text-[#927654]">Qty: 1</p>
                      <div className="flex items-baseline gap-2 mt-1">
                        <p className="text-sm font-bold text-primary">₹{item.price}</p>
                        {item.isBundleDiscount && (
                          <span className="text-[10px] bg-amber-100 text-amber-700 px-1.5 py-0.5 rounded font-bold uppercase tracking-wider">Bundle applied</span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-3 pt-4 border-t border-cream-dark">
                <div className="flex justify-between text-lg font-bold pt-2">
                  <span>Total</span>
                  <span className="text-primary">₹{total}</span>
                </div>
              </div>
              <button className="w-full bg-primary hover:bg-[#c07a28] text-white font-bold py-4 rounded-xl mt-6 transition-all shadow-lg flex items-center justify-center gap-2">
                <span className="material-symbols-outlined">lock</span>
                Place Order
              </button>
            </div>

            {/* Bundle Suggestions Widget */}
            {suggestedProducts.length > 0 && (
              <div className="bg-gradient-to-br from-cream to-white p-6 rounded-xl border border-primary/20 shadow-md">
                <div className="flex items-center gap-2 mb-4">
                  <span className="material-symbols-outlined text-primary text-xl">auto_awesome</span>
                  <h3 className="text-md font-bold text-forest">Pair & Save 3%</h3>
                </div>
                <p className="text-xs text-slate-600 mb-5">Complete your ritual with these perfectly matched complementary remedies.</p>

                <div className="space-y-4">
                  {suggestedProducts.map(product => (
                    <div key={product.id} className="flex items-center gap-4 bg-white p-3 rounded-lg border border-primary/10 shadow-sm transition-all hover:border-primary/30 hover:shadow-md">
                      <img src={product.image} className="size-14 rounded-md object-contain bg-cream" alt={product.name} />
                      <div className="flex-1">
                        <p className="text-xs font-bold text-forest line-clamp-1">{product.name}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-sm font-bold text-primary">₹{Math.round(product.price * 0.97)}</span>
                          <span className="text-xs text-slate-400 line-through">₹{product.price}</span>
                        </div>
                      </div>
                      <button
                        onClick={() => handleAddBundle(product)}
                        className="w-8 h-8 rounded-full bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors flex items-center justify-center"
                        title="Add to order"
                      >
                        <span className="material-symbols-outlined text-sm font-bold">add</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
