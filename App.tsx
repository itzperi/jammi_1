import React, { Suspense, lazy } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AyurvedaChatbot from './components/AyurvedaChatbot';

// Lazy load pages
const Home = lazy(() => import('./pages/Home'));
const Shop = lazy(() => import('./pages/Shop'));
const DoctorHub = lazy(() => import('./pages/DoctorHub'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Checkout = lazy(() => import('./pages/Checkout'));
const Admin = lazy(() => import('./pages/Admin'));
const Heritage = lazy(() => import('./pages/Heritage'));
const Partners = lazy(() => import('./pages/Partners'));
const Federation = lazy(() => import('./pages/Federation'));
const Consultation = lazy(() => import('./pages/Consultation'));

const LoadingFallback = () => (
  <div className="w-full h-screen bg-white flex flex-col items-center justify-center">
    <div className="w-12 h-12 rounded-xl bg-brand-red animate-spin mb-4" />
    <span className="serif text-brand-red text-lg animate-pulse">Loading Heritage...</span>
  </div>
);

const AppContent: React.FC = () => {
  const location = useLocation();
  const isAdminPage = location.pathname.startsWith('/admin');
  const shouldHideFooter = isAdminPage;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      {!isAdminPage && <Navbar />}
      <main className={`flex-grow ${!isAdminPage ? 'pt-0' : ''}`}>
        <Suspense fallback={<LoadingFallback />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/doctors" element={<DoctorHub />} />

            {/* Dynamic Product Route */}
            <Route path="/product/:id" element={<ProductDetail />} />

            <Route path="/checkout" element={<Checkout />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/heritage" element={<Heritage />} />
            <Route path="/partners" element={<Partners />} />
            <Route path="/federation" element={<Federation />} />
            <Route path="/consultation" element={<Consultation />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </main>
      {!shouldHideFooter && <Footer />}
      <AyurvedaChatbot />
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
