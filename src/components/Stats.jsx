import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

function Counter({ target, suffix = '', prefix = '', duration = 2000 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    const start = Date.now();
    const tick = () => {
      const elapsed = Date.now() - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  { label: 'Hours of Hacking', value: 24, suffix: '', prefix: '', icon: '⚡', color: '#00e5ff' },
  { label: 'Total Prize Pool', value: 50000, suffix: '', prefix: '₹', icon: '🏆', color: '#ffd700' },
  { label: 'Problem Tracks', value: 8, suffix: '+', prefix: '', icon: '🧩', color: '#00aaff' },
  { label: 'Hackers Expected', value: 300, suffix: '+', prefix: '', icon: '👨‍💻', color: '#00e5ff' },
];

export default function Stats() {
  return (
    <section style={{
      padding: '80px 24px',
      position: 'relative',
      zIndex: 2,
    }}>
      {/* Background line */}
      <div style={{
        position: 'absolute',
        top: '50%', left: 0, right: 0,
        height: '1px',
        background: 'linear-gradient(90deg, transparent, rgba(0,170,255,0.2), transparent)',
        transform: 'translateY(-50%)',
      }} />

      <div style={{
        maxWidth: '1100px',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
        gap: '24px',
      }}>
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            style={{
              background: 'rgba(0, 20, 50, 0.5)',
              border: '1px solid rgba(0, 170, 255, 0.2)',
              borderRadius: '12px',
              padding: '32px 24px',
              textAlign: 'center',
              backdropFilter: 'blur(20px)',
              position: 'relative',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
            }}
            whileHover={{
              borderColor: 'rgba(0, 229, 255, 0.5)',
              boxShadow: '0 0 30px rgba(0, 170, 255, 0.2)',
              y: -4,
            }}
          >
            {/* Glow corner */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0,
              width: '60px', height: '60px',
              background: `radial-gradient(circle at top left, ${s.color}20, transparent 70%)`,
            }} />

            <div style={{ fontSize: '32px', marginBottom: '12px' }}>{s.icon}</div>

            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: 'clamp(32px, 5vw, 52px)',
              fontWeight: 900,
              color: s.color,
              textShadow: `0 0 20px ${s.color}60`,
              lineHeight: 1,
              marginBottom: '8px',
            }}>
              <Counter target={s.value} suffix={s.suffix} prefix={s.prefix} />
            </div>

            <div style={{
              fontFamily: 'Exo 2, sans-serif',
              fontSize: '13px',
              color: 'rgba(224, 240, 255, 0.6)',
              letterSpacing: '2px',
              textTransform: 'uppercase',
            }}>
              {s.label}
            </div>

            {/* Bottom accent */}
            <div style={{
              position: 'absolute',
              bottom: 0, left: '20%', right: '20%',
              height: '2px',
              background: `linear-gradient(90deg, transparent, ${s.color}, transparent)`,
            }} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
