import { motion } from 'framer-motion';

export default function Sponsors() {
  return (
    <section id="sponsors" style={{ padding: '100px 24px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
          }}>// 06. SPONSORS</div>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #fff, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px',
          }}>Our Sponsors</h2>
        </motion.div>

        {/* Revealing Soon card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            padding: '80px 40px',
            background: 'rgba(0, 15, 40, 0.5)',
            border: '1px solid rgba(0, 170, 255, 0.2)',
            borderRadius: '20px',
            backdropFilter: 'blur(20px)',
            position: 'relative',
            overflow: 'hidden',
          }}
        >
          {/* Animated corners */}
          {['top-left', 'top-right', 'bottom-left', 'bottom-right'].map((pos) => (
            <div key={pos} style={{
              position: 'absolute',
              width: '20px', height: '20px',
              ...(pos.includes('top') ? { top: '16px' } : { bottom: '16px' }),
              ...(pos.includes('left') ? { left: '16px' } : { right: '16px' }),
              borderTop: pos.includes('top') ? '2px solid #00e5ff' : 'none',
              borderBottom: pos.includes('bottom') ? '2px solid #00e5ff' : 'none',
              borderLeft: pos.includes('left') ? '2px solid #00e5ff' : 'none',
              borderRight: pos.includes('right') ? '2px solid #00e5ff' : 'none',
            }} />
          ))}

          {/* Scanning line */}
          <motion.div
            animate={{ y: ['-100%', '200%'] }}
            transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute',
              left: 0, right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, rgba(0,229,255,0.5), transparent)',
              pointerEvents: 'none',
            }}
          />

          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '11px',
              color: '#00aaff',
              letterSpacing: '4px',
              marginBottom: '20px',
            }}
          >
            ◈ INCOMING TRANSMISSION ◈
          </motion.div>

          <motion.h3
            animate={{
              textShadow: [
                '0 0 20px rgba(0,229,255,0.3)',
                '0 0 40px rgba(0,229,255,0.8)',
                '0 0 20px rgba(0,229,255,0.3)',
              ]
            }}
            transition={{ duration: 2, repeat: Infinity }}
            style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(22px, 4vw, 36px)',
              fontWeight: 900,
              color: '#00e5ff',
              marginBottom: '16px',
              letterSpacing: '4px',
            }}
          >
            SPONSORS REVEALING SOON
          </motion.h3>

          <p style={{
            fontFamily: 'Exo 2, sans-serif',
            fontSize: '15px',
            color: 'rgba(224, 240, 255, 0.5)',
            maxWidth: '400px',
            margin: '0 auto 40px',
          }}>
            Exciting brands and organizations are joining TVISHI 2.0. Stay tuned for the big reveal.
          </p>

          {/* Placeholder logo slots */}
          <div style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{ opacity: [0.2, 0.5, 0.2] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
                style={{
                  width: '120px',
                  height: '60px',
                  background: 'rgba(0, 170, 255, 0.05)',
                  border: '1px dashed rgba(0, 170, 255, 0.2)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <span style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '9px',
                  color: 'rgba(0, 170, 255, 0.3)',
                  letterSpacing: '2px',
                }}>SPONSOR</span>
              </motion.div>
            ))}
          </div>

          <div style={{
            marginTop: '40px',
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            color: 'rgba(0, 170, 255, 0.5)',
          }}>
            Interested in sponsoring? Contact us at{' '}
            <a href="mailto:ieee@sageuniversity.edu.in" style={{ color: '#00e5ff', textDecoration: 'none' }}>
              ieee@sageuniversity.edu.in
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
