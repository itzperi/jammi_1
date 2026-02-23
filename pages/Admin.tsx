
import React, { useState } from 'react';

type AdminView = 'dashboard' | 'inventory' | 'doctors' | 'addProduct-1' | 'addProduct-2' | 'addProduct-3';

const Admin: React.FC = () => {
  const [view, setView] = useState<AdminView>('dashboard');

  const renderSidebar = () => (
    <aside className="w-64 bg-[#1A1A18] flex flex-col shrink-0 text-white fixed h-full z-20">
      <div className="p-6 flex items-center gap-3">
        <div className="bg-primary rounded-lg p-1.5 flex items-center justify-center">
          <span className="material-symbols-outlined text-white font-bold">medical_services</span>
        </div>
        <div className="flex flex-col">
          <h1 className="text-white text-sm font-bold leading-tight">Jammi Pharma</h1>
          <p className="text-[#9c8649] text-[10px] uppercase tracking-widest font-semibold">Admin Panel</p>
        </div>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1">
        {[
          { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
          { id: 'inventory', label: 'Inventory', icon: 'inventory_2' },
          { id: 'doctors', label: 'Doctors & Moderation', icon: 'group' }
        ].map((item) => (
          <div 
            key={item.id} 
            onClick={() => setView(item.id as AdminView)}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-lg cursor-pointer transition-colors ${view.startsWith(item.id) ? 'bg-primary text-[#1A1A18] font-bold' : 'text-gray-400 hover:bg-white/5 hover:text-white'}`}
          >
            <span className={`material-symbols-outlined text-xl ${view.startsWith(item.id) ? 'fill-icon' : ''}`}>{item.icon}</span>
            <p className="text-sm font-medium">{item.label}</p>
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-white/10 mt-auto">
        <div className="flex items-center gap-3 p-2">
          <div className="size-8 rounded-full bg-cover bg-center border border-white/20" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAGeb8UZcjdtSm_9wGKab0wTNuadguL8XkKSvfilD4WSYfrO_bxu_78mvdSi4EWVQMszfSeGSF3poUYqrZ_vhxbYMy4OMRajcFfOjPIfK5pPc115K28TXJYcYK2XMD_5qvWUzD_TYmlq-1zw9tE8HFvot5UYmruAhHK_hDgwEh61Injj_BzKJ1yw6EyFlLKP-MFwjO5W2GozRC-1rP7MU6UVCU9hhHb25S5Vd3hzKEQJXZZ2hNK1w_c2Cx4AUn03JMKM04rJWBmpq0')"}}></div>
          <div className="flex-1 overflow-hidden">
            <p className="text-white text-xs font-semibold truncate">Alex Jammi</p>
            <p className="text-gray-500 text-[10px] truncate">Head Administrator</p>
          </div>
        </div>
      </div>
    </aside>
  );

  const renderDashboard = () => (
    <div className="flex-1 flex flex-col min-h-screen bg-background-light">
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
        <h2 className="serif text-2xl font-bold">Dashboard Overview</h2>
        <div className="flex items-center gap-4">
          <button className="size-10 flex items-center justify-center rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100"><span className="material-symbols-outlined">notifications</span></button>
          <button className="size-10 flex items-center justify-center rounded-lg bg-gray-50 text-gray-600 hover:bg-gray-100"><span className="material-symbols-outlined">settings</span></button>
        </div>
      </header>
      <main className="p-8 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { label: 'Orders Today', val: '128', trend: '+12%', up: true },
            { label: 'Revenue', val: '₹1,24,500', trend: '-5%', up: false },
            { label: 'New Doctors', val: '12', trend: '+8%', up: true },
            { label: 'Active Articles', val: '45', trend: '+2%', up: true }
          ].map(kpi => (
            <div key={kpi.label} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-2">
              <p className="text-gray-500 text-sm font-medium">{kpi.label}</p>
              <div className="flex items-end justify-between">
                <p className="text-dark-ink text-3xl font-bold">{kpi.val}</p>
                <span className={`${kpi.up ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'} text-xs font-bold px-2 py-1 rounded-full flex items-center gap-0.5`}>
                  <span className="material-symbols-outlined text-[14px]">{kpi.up ? 'trending_up' : 'trending_down'}</span> {kpi.trend}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
            <h3 className="text-dark-ink font-bold text-lg mb-6">7-Day Revenue</h3>
            <div className="h-64 w-full bg-background-light/30 rounded-lg flex items-center justify-center relative">
              <svg className="w-full h-full p-4" viewBox="0 0 400 100">
                <path d="M0 80 Q 50 20, 100 70 T 200 40 T 300 80 T 400 30" fill="none" stroke="#d58a30" strokeWidth="3" />
              </svg>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm flex flex-col gap-6">
            <h3 className="text-dark-ink font-bold text-lg">Order Status</h3>
            <div className="flex-1 flex items-center justify-center relative">
              <div className="size-44 rounded-full border-[16px] border-gray-100 relative">
                <div className="absolute inset-0 rounded-full border-[16px] border-primary border-t-transparent border-r-transparent rotate-45"></div>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <p className="text-2xl font-bold leading-none">542</p>
                  <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-1">Total</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-primary"></span><p className="text-xs font-semibold">Shipped</p></div>
              <div className="flex items-center gap-2"><span className="size-3 rounded-full bg-green-500"></span><p className="text-xs font-semibold">Delivered</p></div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  const renderInventory = () => (
    <div className="flex-1 flex flex-col min-h-screen bg-background-light">
      <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-100 sticky top-0 z-10">
        <h2 className="text-xl font-bold tracking-tight">Inventory Management</h2>
        <button 
          onClick={() => setView('addProduct-1')}
          className="bg-primary text-background-dark px-5 py-2.5 rounded-xl font-bold text-sm flex items-center gap-2 hover:opacity-90 transition-all shadow-md shadow-primary/20"
        >
          <span className="material-symbols-outlined text-[20px]">add</span>
          <span>Add New Product</span>
        </button>
      </header>
      <main className="p-8 space-y-6">
        <div className="flex gap-4">
          <div className="flex-1 relative">
            <span className="material-symbols-outlined absolute inset-y-0 left-0 flex items-center pl-4 text-slate-400">search</span>
            <input className="w-full bg-white border border-slate-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-primary focus:border-transparent outline-none" placeholder="Search by SKU, name or chemical compound..." />
          </div>
          <button className="flex items-center gap-2 px-4 py-3 bg-white border border-slate-200 rounded-xl text-sm font-medium hover:bg-slate-50">Category <span className="material-symbols-outlined text-[18px]">expand_more</span></button>
        </div>
        <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50 border-b border-slate-200 uppercase text-[10px] font-bold text-slate-500 tracking-wider">
                <th className="px-6 py-4">Product</th><th className="px-6 py-4">Category</th><th className="px-6 py-4">Stock Level</th><th className="px-6 py-4 text-right">Price</th><th className="px-6 py-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {[
                { name: 'Jammi Liver Tonic', sku: 'LIV-001', cat: 'Digestive', stock: '1,240 units', price: '₹450.00', status: 'In Stock', sColor: 'green' },
                { name: 'Kesa Vardhini Oil', sku: 'HAIR-102', cat: 'Hair Care', stock: '12 units left', price: '₹1,800.00', status: 'Low Stock', sColor: 'red' },
                { name: 'Mandoora Bhasma', sku: 'DIG-009', cat: 'Digestive', stock: '156 units', price: '₹850.00', status: 'In Stock', sColor: 'green' }
              ].map(p => (
                <tr key={p.sku} className="hover:bg-slate-50 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-4">
                      <div className="size-12 rounded-lg bg-slate-100 shrink-0 border border-slate-200"></div>
                      <div className="flex flex-col">
                        <span className="font-semibold text-slate-900">{p.name}</span>
                        <span className="text-[10px] text-slate-500 uppercase tracking-tighter">SKU: {p.sku}</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4"><span className="px-3 py-1 bg-slate-100 rounded-full text-xs font-medium text-slate-600">{p.cat}</span></td>
                  <td className="px-6 py-4">
                    <div className={`px-3 py-1 inline-flex rounded-full text-xs font-bold items-center gap-1.5 ${p.sColor === 'green' ? 'bg-green-50 text-green-600' : 'bg-red-50 text-red-600'}`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${p.sColor === 'green' ? 'bg-green-500' : 'bg-red-500'}`}></span> {p.status}
                    </div>
                    <span className="text-xs text-slate-400 mt-1 block">{p.stock}</span>
                  </td>
                  <td className="px-6 py-4 text-right font-bold text-slate-900">{p.price}</td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-center gap-2">
                      <button className="p-2 hover:bg-slate-200 rounded-lg text-slate-500"><span className="material-symbols-outlined">edit_note</span></button>
                      <button className="p-2 hover:bg-red-50 rounded-lg text-red-400"><span className="material-symbols-outlined">delete</span></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );

  const renderModeration = () => (
    <div className="flex-1 flex flex-col min-h-screen bg-background-light">
      <header className="flex items-center justify-between px-10 py-3 bg-white border-b border-gray-100 sticky top-0 z-10">
        <h2 className="text-lg font-bold">Jammi Internal Control</h2>
        <div className="flex items-center gap-4">
          <button className="size-10 bg-slate-100 rounded-lg flex items-center justify-center"><span className="material-symbols-outlined">notifications</span></button>
          <div className="size-10 rounded-full border-2 border-primary/20 bg-slate-200"></div>
        </div>
      </header>
      <main className="p-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-black tracking-tight">Community Moderation</h1>
            <p className="text-gray-500 text-lg">Review professional credentials and manage platform expertise levels.</p>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2 space-y-6">
              <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 flex items-center justify-between bg-slate-50/30">
                  <h2 className="text-xl font-bold">Pending Approvals Queue</h2>
                  <span className="bg-amber-100 text-amber-700 text-xs font-bold px-2 py-1 rounded-full">12 Actions Required</span>
                </div>
                <div className="divide-y divide-gray-100">
                  {['Dr. Elena Rodriguez', 'Dr. Marcus Thorne', 'Dr. Sarah Jenkins'].map(name => (
                    <div key={name} className="p-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-4">
                        <div className="size-12 rounded-full bg-slate-200 border border-slate-100"></div>
                        <div><p className="font-bold">{name}</p><p className="text-xs text-gray-500">Neurology • Applied 2h ago</p></div>
                      </div>
                      <button className="bg-primary text-[#1A1A18] text-sm font-bold px-6 py-2 rounded-lg hover:brightness-105 transition-all">Review</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="bg-primary rounded-xl p-6 text-[#1A1A18] shadow-lg shadow-primary/20">
                <h4 className="text-sm font-bold opacity-80 uppercase tracking-widest mb-4">Platform Overview</h4>
                <div className="grid grid-cols-2 gap-4">
                  <div><p className="text-2xl font-black">1,420</p><p className="text-xs opacity-80 font-bold uppercase">Verified Doctors</p></div>
                  <div><p className="text-2xl font-black">89</p><p className="text-xs opacity-80 font-bold uppercase">Pending Articles</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );

  const renderAddProductStep1 = () => (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold">Step 1 of 3: Basic Info</p>
          <p className="text-primary font-bold text-sm">33% Complete</p>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{width: '33%'}}></div></div>
      </div>
      <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">
        <h2 className="text-2xl font-bold mb-6">1. Basic Information</h2>
        <div className="space-y-6">
          <div className="flex flex-col gap-2"><label className="font-bold text-sm">Product Name</label><input className="w-full px-4 py-3 rounded-lg bg-background-light border-slate-200 focus:ring-primary focus:border-primary outline-none" placeholder="e.g. Ashwagandha Gold Tablets" /></div>
          <div className="flex flex-col gap-2"><label className="font-bold text-sm">Category</label><select className="w-full px-4 py-3 rounded-lg bg-background-light border-slate-200 focus:ring-primary focus:border-primary outline-none"><option>Wellness & Vitality</option><option>Skin & Hair Care</option><option>Digestive Health</option></select></div>
          <div className="flex flex-col gap-2"><label className="font-bold text-sm">Short Description</label><input className="w-full px-4 py-3 rounded-lg bg-background-light border-slate-200 focus:ring-primary focus:border-primary outline-none" placeholder="Brief 1-sentence summary" /></div>
        </div>
        <div className="flex justify-between pt-8 border-t border-gray-50">
          <button onClick={() => setView('inventory')} className="px-6 py-2.5 rounded-lg border border-slate-200 font-bold hover:bg-slate-50 transition-colors">Cancel</button>
          <button onClick={() => setView('addProduct-2')} className="bg-primary text-[#1A1A18] px-10 py-3 rounded-xl font-bold shadow-lg shadow-primary/20 hover:brightness-105 transition-all">Save & Continue</button>
        </div>
      </div>
    </div>
  );

  const renderAddProductStep2 = () => (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold">Step 2 of 3: Media & Ingredients</p>
          <p className="text-primary font-bold text-sm">66% Complete</p>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{width: '66%'}}></div></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col gap-4">
          <h3 className="text-xl font-bold">Product Photography</h3>
          <div className="aspect-[16/15] rounded-xl border-2 border-dashed border-slate-200 bg-background-light flex flex-col items-center justify-center text-center p-8 group cursor-pointer hover:border-primary transition-all">
            <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">cloud_upload</span>
            <p className="font-bold">Click or drag to upload</p>
            <p className="text-xs text-slate-400 mt-2">PNG, JPG or WEBP (Max. 5MB)</p>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-8 flex flex-col gap-4">
          <h3 className="text-xl font-bold">Key Ingredients</h3>
          <div className="space-y-3">
             {['Tulsi (Holy Basil)', 'Ashwagandha', 'Saffron'].map(ing => (
               <div key={ing} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                 <div className="flex items-center gap-3"><span className="material-symbols-outlined text-green-600">eco</span><span className="font-bold text-sm">{ing}</span></div>
                 <button className="text-slate-400 hover:text-red-500"><span className="material-symbols-outlined">delete</span></button>
               </div>
             ))}
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-8">
        <button onClick={() => setView('addProduct-1')} className="flex items-center gap-2 font-bold px-6 py-2.5 rounded-lg border border-slate-200"><span className="material-symbols-outlined">arrow_back</span> Back</button>
        <button onClick={() => setView('addProduct-3')} className="bg-primary text-[#1A1A18] px-10 py-3 rounded-xl font-bold shadow-lg shadow-primary/20">Continue to Pricing</button>
      </div>
    </div>
  );

  const renderAddProductStep3 = () => (
    <div className="p-8 max-w-5xl mx-auto space-y-8">
      <div className="bg-white rounded-xl p-6 border border-slate-200 mb-8">
        <div className="flex justify-between items-center mb-4">
          <p className="font-bold">Step 3 of 3: Inventory & Pricing</p>
          <p className="text-primary font-bold text-sm">100% Complete</p>
        </div>
        <div className="h-2 bg-slate-100 rounded-full overflow-hidden"><div className="h-full bg-primary" style={{width: '100%'}}></div></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">
          <h3 className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-primary">payments</span> Pricing</h3>
          <div className="space-y-4">
            <div><label className="block text-xs font-bold mb-1.5 uppercase opacity-60">Regular Price (INR)</label><input className="w-full bg-background-light rounded-lg border-none px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="₹0.00" type="number" /></div>
            <div><label className="block text-xs font-bold mb-1.5 uppercase opacity-60">SKU Code</label><input className="w-full bg-background-light rounded-lg border-none px-4 py-3 focus:ring-2 focus:ring-primary" placeholder="JAM-AYU-001" /></div>
          </div>
        </div>
        <div className="bg-white rounded-xl border border-slate-200 p-8 space-y-6">
          <h3 className="font-bold flex items-center gap-2"><span className="material-symbols-outlined text-primary">search_check</span> SEO Preview</h3>
          <div className="p-4 bg-slate-50 rounded-lg border border-dashed border-slate-200 space-y-2">
            <p className="text-blue-600 font-bold truncate">Jammi's New Product | 100% Natural</p>
            <p className="text-green-700 text-xs">www.jammipharma.com/products/new</p>
            <p className="text-slate-500 text-xs line-clamp-2">Experience 125 years of heritage with our latest Ayurvedic formulation...</p>
          </div>
        </div>
      </div>
      <div className="flex justify-between pt-8 border-t border-slate-100">
        <button onClick={() => setView('addProduct-2')} className="flex items-center gap-2 font-bold px-6 py-2.5 rounded-lg border border-slate-200"><span className="material-symbols-outlined">arrow_back</span> Back</button>
        <div className="flex gap-4">
          <button onClick={() => { alert('Draft Saved'); setView('inventory'); }} className="px-6 py-2.5 rounded-lg font-bold text-gray-500 hover:bg-slate-100">Save as Draft</button>
          <button onClick={() => { alert('Product Published Successfully!'); setView('inventory'); }} className="bg-primary text-[#1A1A18] px-12 py-3 rounded-xl font-black shadow-lg shadow-primary/30">Publish Product</button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen bg-background-light overflow-hidden">
      {renderSidebar()}
      <div className="flex-1 ml-72 flex flex-col overflow-y-auto min-h-screen">
        {view === 'dashboard' && renderDashboard()}
        {view === 'inventory' && renderInventory()}
        {view === 'doctors' && renderModeration()}
        {view === 'addProduct-1' && renderAddProductStep1()}
        {view === 'addProduct-2' && renderAddProductStep2()}
        {view === 'addProduct-3' && renderAddProductStep3()}
      </div>
    </div>
  );
};

export default Admin;
