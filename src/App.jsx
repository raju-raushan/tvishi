import { useState, lazy, Suspense } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import './index.css';

import Loader from './components/Loader';
import CustomCursor from './components/CustomCursor';
import MatrixRain from './components/MatrixRain';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import Tracks from './components/Tracks';
import Timeline from './components/Timeline';
import Prizes from './components/Prizes';
import Rules from './components/Rules';
import Sponsors from './components/Sponsors';
import Memories from './components/Memories';
import Register from './components/Register';
import Contact from './components/Contact';
import Footer from './components/Footer';

const Globe = lazy(() => import('./components/Globe'));

function Divider() {
  return (
    <div style={{
      height: '1px',
      background: 'linear-gradient(90deg, transparent, rgba(0,170,255,0.15), rgba(0,229,255,0.2), rgba(0,170,255,0.15), transparent)',
      margin: '0 40px',
      position: 'relative',
      zIndex: 2,
    }} />
  );
}

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />

      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          style={{ minHeight: '100vh', background: '#00050f', position: 'relative' }}
        >
          <MatrixRain />

          <div style={{
            position: 'fixed', inset: 0,
            background: `
              radial-gradient(ellipse 120% 80% at 50% 0%, rgba(0,50,100,0.12) 0%, transparent 60%),
              radial-gradient(ellipse 60% 40% at 20% 60%, rgba(0,80,140,0.08) 0%, transparent 50%),
              radial-gradient(ellipse 60% 40% at 80% 40%, rgba(0,60,120,0.08) 0%, transparent 50%)
            `,
            pointerEvents: 'none', zIndex: 0,
          }} />

          <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden' }}>
            {Array.from({ length: 80 }, (_, i) => (
              <div key={i} style={{
                position: 'absolute',
                width: (Math.sin(i * 13) * 0.5 + 1.2) + 'px',
                height: (Math.sin(i * 13) * 0.5 + 1.2) + 'px',
                background: '#fff', borderRadius: '50%',
                top: ((i * 31) % 97) + '%',
                left: ((i * 47) % 100) + '%',
                opacity: 0.15 + (i % 5) * 0.05,
                animation: `twinkle ${2 + (i % 4)}s ease-in-out infinite`,
                animationDelay: (i % 4) + 's',
              }} />
            ))}
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <Navbar />
            <main>
              <Hero />
              <Stats />
              <Divider />
              <Suspense fallback={
                <div style={{ height: '400px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'rgba(0,170,255,0.5)', fontFamily: 'Space Mono', fontSize: '12px', letterSpacing: '2px' }}>
                  INITIALIZING 3D SYSTEMS...
                </div>
              }>
                <Globe />
              </Suspense>
              <Divider />
              <About />
              <Divider />
              <Tracks />
              <Divider />
              <Timeline />
              <Divider />
              <Prizes />
              <Divider />
              <Rules />
              <Divider />
              <Sponsors />
              <Divider />
              <Memories />
              <Divider />
              <Register />
              <Divider />
              <Contact />
            </main>
            <Footer />
          </div>
        </motion.div>
      )}

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.4); }
        }
      `}</style>
    </>
  );
}
