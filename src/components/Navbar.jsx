import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
// Import the logo from your assets
import ieeeLogo from '../assets/IEEE.png';
import sageLogo from '../assets/SageLogo.png';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Tracks', href: '#tracks' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'Prizes', href: '#prizes' },
  { label: 'Sponsors', href: '#sponsors' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      style={{
        position: 'fixed',
        top: 0, left: 0, right: 0,
        zIndex: 1000,
        padding: '0 24px',
        background: scrolled
          ? 'rgba(0, 5, 15, 0.95)'
          : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0, 170, 255, 0.1)' : 'none',
        transition: 'all 0.4s ease',
        height: '70px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* Logo Section */}
      <a href="#hero" style={{ textDecoration: 'none' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {/* Replaced T2 box with IEEE.png */}
          <img 
            src={ieeeLogo} 
            alt="IEEE Logo" 
            style={{ 
              height: '40px', 
              width: 'auto',
              filter: 'drop-shadow(0 0 8px rgba(0, 170, 255, 0.4))'
            }} 
          />
          <div>
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '14px',
              fontWeight: 800,
              color: '#00e5ff',
              letterSpacing: '2px',
            }}>TVISHI 2.0</div>
            <div style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '8px',
              color: 'rgba(0,170,255,0.6)',
              letterSpacing: '2px',
            }}>IEEE-SUI Student Branch SAGE University INDORE</div>
          </div>
          
        </div>
      </a>

      {/* Desktop links */}
      <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}
        className="hidden md:flex">
        {navLinks.map(({ label, href }) => (
          <a
            key={label}
            href={href}
            data-hover="true"
            style={{
              fontFamily: 'Exo 2, sans-serif',
              fontSize: '13px',
              fontWeight: 600,
              color: 'rgba(224, 240, 255, 0.7)',
              textDecoration: 'none',
              letterSpacing: '1px',
              textTransform: 'uppercase',
              transition: 'color 0.3s ease',
              padding: '4px 0',
              borderBottom: '1px solid transparent',
              cursor: 'pointer', // Changed from 'none' to 'pointer' for usability
            }}
            onMouseEnter={e => {
              e.target.style.color = '#00e5ff';
              e.target.style.borderBottomColor = '#00e5ff';
              e.target.style.textShadow = '0 0 10px rgba(0,229,255,0.5)';
            }}
            onMouseLeave={e => {
              e.target.style.color = 'rgba(224, 240, 255, 0.7)';
              e.target.style.borderBottomColor = 'transparent';
              e.target.style.textShadow = 'none';
            }}
          >
            {label}
          </a>
        ))}

        <a
          href="#register"
          data-hover="true"
          style={{
            padding: '8px 20px',
            background: 'linear-gradient(135deg, #006699, #00aaff)',
            border: 'none',
            borderRadius: '4px',
            color: 'white',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '11px',
            fontWeight: 700,
            letterSpacing: '2px',
            textDecoration: 'none',
            textTransform: 'uppercase',
            boxShadow: '0 0 20px rgba(0, 170, 255, 0.4)',
            transition: 'all 0.3s ease',
            cursor: 'pointer',
          }}
          onMouseEnter={e => {
            e.target.style.boxShadow = '0 0 30px rgba(0, 229, 255, 0.6)';
            e.target.style.transform = 'translateY(-1px)';
          }}
          onMouseLeave={e => {
            e.target.style.boxShadow = '0 0 20px rgba(0, 170, 255, 0.4)';
            e.target.style.transform = 'translateY(0)';
          }}
        >
          Register
        </a>
      </div>

      {/* Mobile menu toggle */}
      <button
        className="md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
        style={{
          background: 'none',
          border: '1px solid rgba(0,170,255,0.4)',
          color: '#00e5ff',
          padding: '8px',
          borderRadius: '4px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {menuOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
      </button>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'absolute',
              top: '70px',
              left: 0, right: 0,
              background: 'rgba(0, 5, 20, 0.98)',
              backdropFilter: 'blur(20px)',
              borderBottom: '1px solid rgba(0, 170, 255, 0.2)',
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: '16px',
            }}
          >
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  color: 'rgba(224, 240, 255, 0.8)',
                  textDecoration: 'none',
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '12px',
                  letterSpacing: '2px',
                  textTransform: 'uppercase',
                  padding: '10px 0',
                  borderBottom: '1px solid rgba(0, 170, 255, 0.1)',
                }}
              >{label}</a>
            ))}
            <a href="#register" onClick={() => setMenuOpen(false)} style={{
              padding: '12px', textAlign: 'center',
              background: 'linear-gradient(135deg, #006699, #00aaff)',
              borderRadius: '4px',
              color: 'white',
              textDecoration: 'none',
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '11px',
              letterSpacing: '2px',
            }}>REGISTER NOW</a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}