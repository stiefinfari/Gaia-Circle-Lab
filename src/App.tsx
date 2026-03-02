import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import React, { Suspense } from 'react';
import { Analytics } from '@vercel/analytics/react';
import Home from './pages/Home';
import CustomCursor from './components/CustomCursor';
import ScrollToTop from './components/ScrollToTop';
import CookieBanner from './components/CookieBanner';
import { CookieProvider } from './context/CookieContext';

// Lazy load other pages to improve initial load time
const Studio16Page = React.lazy(() => import('./pages/Studio16Page'));
const AudioVideoPage = React.lazy(() => import('./pages/AudioVideoPage'));
const WebDesignPage = React.lazy(() => import('./pages/WebDesignPage'));
const GraphicDesignPage = React.lazy(() => import('./pages/GraphicDesignPage'));
const EventsPage = React.lazy(() => import('./pages/EventsPage'));
const GaiaIaPage = React.lazy(() => import('./pages/GaiaIaPage'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const StrategyPage = React.lazy(() => import('./pages/StrategyPage'));
const PrivacyPolicy = React.lazy(() => import('./pages/PrivacyPolicy'));
const CookiePolicy = React.lazy(() => import('./pages/CookiePolicy'));

function App() {
  return (
    <Router>
      <CookieProvider>
        <ScrollToTop />
        <div className="min-h-screen bg-transparent text-white selection:bg-white/30 selection:text-white md:cursor-none">
          <CustomCursor />
          <CookieBanner />
          <Suspense fallback={
            <div className="min-h-screen flex items-center justify-center bg-transparent text-white font-display uppercase tracking-widest">
              Loading...
            </div>
          }>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/studio16" element={<Studio16Page />} />
              <Route path="/servizi/audio-video" element={<AudioVideoPage />} />
              <Route path="/servizi/web-design" element={<WebDesignPage />} />
              <Route path="/servizi/graphic-design" element={<GraphicDesignPage />} />
              <Route path="/servizi/eventi" element={<EventsPage />} />
              <Route path="/gaia-x-ia" element={<GaiaIaPage />} />
              <Route path="/servizi/strategy" element={<StrategyPage />} />
              <Route path="/contatti" element={<ContactPage />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
            </Routes>
          </Suspense>
          <Analytics />
        </div>
      </CookieProvider>
    </Router>
  );
}

export default App;
