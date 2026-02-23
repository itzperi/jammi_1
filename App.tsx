
import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const DoctorHub = lazy(() => import('./pages/DoctorHub'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Admin = lazy(() => import('./pages/Admin'));
const Heritage = lazy(() => import('./pages/Heritage'));
const Consultation = lazy(() => import('./pages/Consultation'));
const BFF = lazy(() => import('./pages/products/BFF'));
const GlowComplexionCream = lazy(() => import('./pages/products/GlowComplexionCream'));
const FlawlessFirmingPack = lazy(() => import('./pages/products/FlawlessFirmingPack'));
const AACaps = lazy(() => import('./pages/products/AACaps'));
const CystEvit = lazy(() => import('./pages/products/CystEvit'));
const Combifore = lazy(() => import('./pages/products/Combifore'));

const LoadingFallback = () => (
  <div className="w-full h-screen bg-background-light flex flex-col items-center justify-center">
    <div className="w-12 h-12 rounded-xl bg-primary animate-spin mb-4" />
    <span className="serif text-forest text-lg animate-pulse">Loading Heritage...</span>
  </div>
);

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');

  return (
    <div className="min-h-screen flex flex-col">
      {!isAdminPage && <Navbar />}
      <main className={`flex-grow ${!isAdminPage ? 'pt-0' : ''}`}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/doctors" element={<DoctorHub />} />
            <Route path="/product/jammi-bff" element={<BFF />} />
            <Route path="/product/glow-complexion-cream" element={<GlowComplexionCream />} />
            <Route path="/product/flawless-firming-pack" element={<FlawlessFirmingPack />} />
            <Route path="/product/aa-caps" element={<AACaps />} />
            <Route path="/product/cyst-evit" element={<CystEvit />} />
            <Route path="/product/combifore" element={<Combifore />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      {!isAdminPage && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

export default App;
