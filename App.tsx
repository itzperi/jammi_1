
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
const Partners = lazy(() => import('./pages/Partners'));
const Federation = lazy(() => import('./pages/Federation'));
const Consultation = lazy(() => import('./pages/Consultation'));
const TriphalaChurna = lazy(() => import('./pages/products/TriphalaChurna'));
const Yummunity = lazy(() => import('./pages/products/Yummunity'));
const TripCaps = lazy(() => import('./pages/products/TripCaps'));
const ZeerAlka = lazy(() => import('./pages/products/ZeerAlka'));
const WidariForte = lazy(() => import('./pages/products/WidariForte'));
const ThyroGard = lazy(() => import('./pages/products/ThyroGard'));
const Suventris = lazy(() => import('./pages/products/Suventris'));
const Redema = lazy(() => import('./pages/products/Redema'));
const PyrilDS = lazy(() => import('./pages/products/PyrilDS'));
const OrthoRaksha = lazy(() => import('./pages/products/OrthoRaksha'));
const Mahanarayana = lazy(() => import('./pages/products/Mahanarayana'));
const Nilomit = lazy(() => import('./pages/products/Nilomit'));
const DailyDew = lazy(() => import('./pages/products/DailyDew'));
const MadhuchariChurna = lazy(() => import('./pages/products/MadhuchariChurna'));
const LakshaCapsules = lazy(() => import('./pages/products/LakshaCapsules'));
const HepableenSyrup = lazy(() => import('./pages/products/HepableenSyrup'));
const HepableenTablets = lazy(() => import('./pages/products/HepableenTablets'));
const Livercure = lazy(() => import('./pages/products/Livercure'));
const Combifore = lazy(() => import('./pages/products/Combifore'));
const GTPMentalFitness = lazy(() => import('./pages/products/GTPMentalFitness'));
const AACaps = lazy(() => import('./pages/products/AACaps'));
const DTabs = lazy(() => import('./pages/products/DTabs'));
const CystEvit = lazy(() => import('./pages/products/CystEvit'));
const BFFBalm = lazy(() => import('./pages/products/BFFBalm'));
const UVSafeSunscreen = lazy(() => import('./pages/products/UVSafeSunscreen'));
const TimelessAntiAgeing = lazy(() => import('./pages/products/TimelessAntiAgeing'));
const SoftLips = lazy(() => import('./pages/products/SoftLips'));
const KumkumadiSerum = lazy(() => import('./pages/products/KumkumadiSerum'));
const KeshProOil = lazy(() => import('./pages/products/KeshProOil'));
const GlowComplexionCream = lazy(() => import('./pages/products/GlowComplexionCream'));
const FlawlessPack = lazy(() => import('./pages/products/FlawlessPack'));
const CrushNBrush = lazy(() => import('./pages/products/CrushNBrush'));
const ClearMarks = lazy(() => import('./pages/products/ClearMarks'));
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
            <Route path="/product/triphala-churna" element={<TriphalaChurna />} />
            <Route path="/product/yummunity" element={<Yummunity />} />
            <Route path="/product/trip-caps" element={<TripCaps />} />
            <Route path="/product/zeer-alka" element={<ZeerAlka />} />
            <Route path="/product/widari-forte" element={<WidariForte />} />
            <Route path="/product/thyrogard" element={<ThyroGard />} />
            <Route path="/product/suventris" element={<Suventris />} />
            <Route path="/product/redema" element={<Redema />} />
            <Route path="/product/pyril-ds" element={<PyrilDS />} />
            <Route path="/product/orthoraksha" element={<OrthoRaksha />} />
            <Route path="/product/mahanarayana" element={<Mahanarayana />} />
            <Route path="/product/nilomit" element={<Nilomit />} />
            <Route path="/product/daily-dew" element={<DailyDew />} />
            <Route path="/product/madhuchari-churna" element={<MadhuchariChurna />} />
            <Route path="/product/laksha-capsules" element={<LakshaCapsules />} />
            <Route path="/product/hepableen-syrup" element={<HepableenSyrup />} />
            <Route path="/product/hepableen-tablets" element={<HepableenTablets />} />
            <Route path="/product/livercure" element={<Livercure />} />
            <Route path="/product/combifore" element={<Combifore />} />
            <Route path="/product/gtp-mental-fitness" element={<GTPMentalFitness />} />
            <Route path="/product/aa-caps" element={<AACaps />} />
            <Route path="/product/d-tabs" element={<DTabs />} />
            <Route path="/product/cyst-evit" element={<CystEvit />} />
            <Route path="/product/bff-balm" element={<BFFBalm />} />
            <Route path="/product/uvsafe-sunscreen" element={<UVSafeSunscreen />} />
            <Route path="/product/timeless-anti-ageing" element={<TimelessAntiAgeing />} />
            <Route path="/product/soft-lips" element={<SoftLips />} />
            <Route path="/product/kumkumadi-serum" element={<KumkumadiSerum />} />
            <Route path="/product/keshpro-oil" element={<KeshProOil />} />
            <Route path="/product/glow-complexion-cream" element={<GlowComplexionCream />} />
            <Route path="/product/flawless-pack" element={<FlawlessPack />} />
            <Route path="/product/crush-n-brush" element={<CrushNBrush />} />
            <Route path="/product/clear-marks" element={<ClearMarks />} />
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
