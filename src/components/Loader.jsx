import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  '> Initializing TVISHI 2.0...',
  '> Loading IEEE Systems...',
  '> Connecting to SAGE University...',
  '> Calibrating Hackathon Modules...',
  '> Deploying 300+ Hackers...',
  '> Activating Innovation Engine...',
  '> System Ready. Welcome.',
];

export default function Loader({ onComplete }) {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIdx = 0;
    const addLine = () => {
      if (lineIdx < BOOT_LINES.length) {
        setLines(prev => [...prev, BOOT_LINES[lineIdx]]);
        lineIdx++;
        setProgress(Math.round((lineIdx / BOOT_LINES.length) * 100));
      }
      if (lineIdx >= BOOT_LINES.length) {
        clearInterval(lineTimer);
        setTimeout(() => setDone(true), 600);
        setTimeout(() => onComplete(), 1400);
      }
    };
    const lineTimer = setInterval(addLine, 380);
    return () => clearInterval(lineTimer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.7, ease: 'easeInOut' }}
          style={{
            position: 'fixed', inset: 0, zIndex: 99999,
            background: '#00050f',
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', justifyContent: 'center',
            overflow: 'hidden',
          }}
        >
          {/* Background grid */}
          <div style={{
            position: 'absolute', inset: 0,
            backgroundImage: `linear-gradient(rgba(0,170,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,170,255,0.05) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
          }} />

          {/* Rotating rings */}
          {[80, 120, 160].map((size, i) => (
            <motion.div
              key={i}
              animate={{ rotate: i % 2 === 0 ? 360 : -360 }}
              transition={{ duration: 6 + i * 2, repeat: Infinity, ease: 'linear' }}
              style={{
                position: 'absolute',
                width: size * 2, height: size * 2,
                border: `1px solid rgba(0, 170, 255, ${0.1 + i * 0.05})`,
                borderRadius: '50%',
                borderTopColor: '#00e5ff',
              }}
            />
          ))}

          {/* IEEE Logo area */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginBottom: '40px', position: 'relative', zIndex: 2 }}
          >
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '11px',
              color: '#00aaff',
              letterSpacing: '4px',
              textAlign: 'center',
              marginBottom: '12px',
              opacity: 0.8,
            }}>
              IEEE STUDENT BRANCH
            </div>

            <motion.h1
              style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: 'clamp(48px, 10vw, 90px)',
                fontWeight: 900,
                textAlign: 'center',
                letterSpacing: '8px',
                background: 'linear-gradient(135deg, #00e5ff, #006699, #00aaff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                filter: 'drop-shadow(0 0 30px rgba(0,229,255,0.5))',
              }}
              animate={{
                filter: [
                  'drop-shadow(0 0 20px rgba(0,229,255,0.3))',
                  'drop-shadow(0 0 50px rgba(0,229,255,0.8))',
                  'drop-shadow(0 0 20px rgba(0,229,255,0.3))',
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              TVISHI 2.0
            </motion.h1>

            <div style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '13px',
              color: '#00e5ff',
              letterSpacing: '6px',
              textAlign: 'center',
              marginTop: '8px',
              opacity: 0.7,
            }}>
              CODE · CONQUER · WIN
            </div>
          </motion.div>

          {/* Terminal box */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            style={{
              width: 'min(500px, 90vw)',
              background: 'rgba(0, 10, 30, 0.9)',
              border: '1px solid rgba(0, 170, 255, 0.3)',
              borderRadius: '8px',
              padding: '20px 24px',
              fontFamily: 'Space Mono, monospace',
              fontSize: '12px',
              position: 'relative',
              zIndex: 2,
              boxShadow: '0 0 40px rgba(0, 102, 153, 0.3)',
            }}
          >
            <div style={{ color: '#006699', marginBottom: '12px', fontSize: '11px', letterSpacing: '2px' }}>
              ● SYSTEM BOOT SEQUENCE
            </div>
            {lines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                style={{
                  color: i === lines.length - 1 ? '#00e5ff' : 'rgba(0, 170, 255, 0.6)',
                  marginBottom: '4px',
                  fontSize: '11px',
                }}
              >
                {line}
                {i === lines.length - 1 && (
                  <motion.span
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                  >█</motion.span>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Progress bar */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            style={{
              marginTop: '30px',
              width: 'min(500px, 90vw)',
              position: 'relative',
              zIndex: 2,
            }}
          >
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              color: 'rgba(0, 170, 255, 0.6)',
              marginBottom: '8px',
            }}>
              <span>LOADING SYSTEMS</span>
              <span>{progress}%</span>
            </div>
            <div style={{
              height: '3px',
              background: 'rgba(0, 102, 153, 0.3)',
              borderRadius: '2px',
              overflow: 'hidden',
            }}>
              <motion.div
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.4 }}
                style={{
                  height: '100%',
                  background: 'linear-gradient(90deg, #006699, #00e5ff)',
                  boxShadow: '0 0 10px #00e5ff',
                  borderRadius: '2px',
                }}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
