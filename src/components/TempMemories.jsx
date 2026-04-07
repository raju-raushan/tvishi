import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// Importing your actual images
import t1 from '../images/T1.jpg';
import t2 from '../images/T2.jpg';
import t3 from '../images/T3.jpg';
import t4 from '../images/T1.jpg'; // Reusing or using unique ones as per your imports
import t5 from '../images/T2.jpg';
import t6 from '../images/T3.jpg';
import t7 from '../images/T2.jpg';
import t8 from '../images/T3.jpg';

const memories = [
  { id: 1, label: 'Opening Ceremony', src: t1 },
  { id: 2, label: 'Team Hacking', src: t2 },
  { id: 3, label: 'Mentoring Sessions', src: t3 },
  { id: 4, label: 'Late Night Coding', src: t4 },
  { id: 5, label: 'Project Demos', src: t5 },
  { id: 6, label: 'Award Ceremony', src: t6 },
  { id: 7, label: 'Team Photos', src: t7 },
  { id: 8, label: 'Networking', src: t8 },
];

function MemoryCard({ mem, onClick }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.04, zIndex: 10 }}
      onClick={() => onClick(mem)}
      style={{
        aspectRatio: '4/3',
        backgroundColor: '#001a33',
        borderRadius: '12px',
        border: '1px solid rgba(0, 170, 255, 0.2)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Actual Image Background */}
      <img 
        src={mem.src} 
        alt={mem.label}
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          position: 'absolute',
          inset: 0,
        }}
      />

      {/* Gradient Overlay for Text Readability */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(0,5,20,0.8) 0%, transparent 50%)',
        zIndex: 1
      }} />

      {/* Label */}
      <div style={{
        position: 'absolute',
        bottom: '12px',
        left: '0',
        right: '0',
        fontFamily: 'Exo 2, sans-serif',
        fontSize: '13px',
        color: '#fff',
        fontWeight: 600,
        textAlign: 'center',
        padding: '0 12px',
        zIndex: 2,
        textShadow: '0 2px 4px rgba(0,0,0,0.5)'
      }}>{mem.label}</div>

      {/* Shimmer effect */}
      <motion.div
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut', repeatDelay: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
          transform: 'skewX(-20deg)',
          zIndex: 3
        }}
      />

      {/* Hover overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
        style={{
          position: 'absolute',
          inset: 0,
          background: 'rgba(0, 144, 255, 0.3)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backdropFilter: 'blur(4px)',
          zIndex: 4
        }}
      >
        <span style={{
          fontFamily: 'Orbitron, sans-serif',
          fontSize: '11px',
          color: '#fff',
          letterSpacing: '2px',
          border: '1px solid #fff',
          padding: '6px 14px',
          borderRadius: '4px',
          background: 'rgba(0,0,0,0.3)'
        }}>VIEW</span>
      </motion.div>
    </motion.div>
  );
}

export default function Memories() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="memories" style={{ padding: '100px 24px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '60px' }}
        >
          <div style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            color: '#00aaff',
            letterSpacing: '4px',
            marginBottom: '12px',
          }}>// 07. MEMORIES</div>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #fff, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
          }}>TVISHI 1.0 Highlights</h2>
          <p style={{
            fontFamily: 'Exo 2, sans-serif',
            fontSize: '15px',
            color: 'rgba(224, 240, 255, 0.5)',
          }}>Relive the magic of our first edition</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))',
          gap: '16px',
        }}>
          {memories.map((mem) => (
            <MemoryCard key={mem.id} mem={mem} onClick={setSelected} />
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            style={{
              position: 'fixed',
              inset: 0,
              background: 'rgba(0, 5, 20, 0.98)',
              zIndex: 9999,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              backdropFilter: 'blur(15px)',
            }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              onClick={e => e.stopPropagation()}
              style={{
                width: 'min(800px, 90vw)',
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                boxShadow: '0 0 50px rgba(0,170,255,0.4)',
                border: '1px solid rgba(0,229,255,0.3)',
              }}
            >
              <button
                onClick={() => setSelected(null)}
                style={{
                  position: 'absolute', top: '20px', right: '20px',
                  background: 'rgba(0,0,0,0.6)', border: 'none',
                  color: '#fff', borderRadius: '50%',
                  width: '40px', height: '40px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', zIndex: 10
                }}
              >
                <FaTimes size={18} />
              </button>

              <img 
                src={selected.src} 
                alt={selected.label}
                style={{ width: '100%', height: 'auto', display: 'block' }}
              />

              <div style={{
                padding: '24px',
                background: 'rgba(0, 15, 40, 0.9)',
                borderTop: '1px solid rgba(0, 229, 255, 0.2)'
              }}>
                <div style={{
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '20px', color: '#00e5ff',
                  fontWeight: 700, marginBottom: '4px'
                }}>{selected.label}</div>
                <div style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '11px', color: 'rgba(255,255,255,0.5)',
                  letterSpacing: '2px',
                }}>TVISHI 1.0 · ARCHIVE_2024</div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}