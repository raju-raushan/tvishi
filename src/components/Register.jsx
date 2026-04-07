import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaRocket, FaUsers, FaClock, FaMapMarkerAlt } from 'react-icons/fa';

function MagneticButton({ children, href, style }) {
  const btnRef = useRef(null);

  const onMouseMove = (e) => {
    const rect = btnRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    btnRef.current.style.transform = `translate(${x * 0.25}px, ${y * 0.25}px)`;
  };

  const onMouseLeave = () => {
    btnRef.current.style.transform = 'translate(0,0)';
  };

  return (
    <a
      ref={btnRef}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-hover="true"
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        transition: 'transform 0.3s cubic-bezier(0.23,1,0.32,1), box-shadow 0.3s ease',
        cursor: 'none',
        textDecoration: 'none',
        ...style,
      }}
    >
      {children}
    </a>
  );
}

export default function Register() {
  return (
    <section id="register" style={{ padding: '100px 24px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '900px', margin: '0 auto' }}>
        {/* Main CTA block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, rgba(0,30,70,0.8) 0%, rgba(0,10,30,0.9) 100%)',
            border: '1px solid rgba(0, 170, 255, 0.3)',
            borderRadius: '24px',
            padding: 'clamp(40px, 6vw, 80px)',
            textAlign: 'center',
            backdropFilter: 'blur(30px)',
            position: 'relative',
            overflow: 'hidden',
            boxShadow: '0 0 60px rgba(0, 102, 153, 0.2)',
          }}
        >
          {/* Background glow */}
          <div style={{
            position: 'absolute',
            top: '-50%', left: '25%', right: '25%',
            height: '200%',
            background: 'radial-gradient(ellipse, rgba(0,102,153,0.15) 0%, transparent 70%)',
            pointerEvents: 'none',
          }} />

          {/* Animated border top */}
          <motion.div
            animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
            transition={{ duration: 4, repeat: Infinity }}
            style={{
              position: 'absolute',
              top: 0, left: 0, right: 0,
              height: '2px',
              background: 'linear-gradient(90deg, transparent, #006699, #00e5ff, #006699, transparent)',
              backgroundSize: '200% 100%',
            }}
          />

          <div style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            color: '#00aaff',
            letterSpacing: '4px',
            marginBottom: '20px',
            position: 'relative', zIndex: 1,
          }}>// 08. REGISTER NOW</div>

          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(28px, 6vw, 56px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #ffffff, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px',
            lineHeight: 1.1,
            position: 'relative', zIndex: 1,
          }}>
            Ready to<br />Conquer?
          </h2>

          <p style={{
            fontFamily: 'Exo 2, sans-serif',
            fontSize: 'clamp(15px, 2.5vw, 18px)',
            color: 'rgba(224, 240, 255, 0.65)',
            maxWidth: '500px',
            margin: '0 auto 40px',
            lineHeight: 1.7,
            position: 'relative', zIndex: 1,
          }}>
            Join 300+ hackers for 24 hours of innovation, collaboration, and competition. Register your team on Unstop and secure your spot.
          </p>

          {/* Info pills */}
          <div style={{
            display: 'flex',
            gap: '12px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginBottom: '40px',
            position: 'relative', zIndex: 1,
          }}>
            {[
              { icon: <FaUsers size={12} />, text: 'Team: 1–4 Members' },
              { icon: <FaClock size={12} />, text: '24 Hours' },
              { icon: <FaMapMarkerAlt size={12} />, text: 'SAGE University Indore' },
            ].map((item, i) => (
              <div key={i} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                padding: '7px 16px',
                background: 'rgba(0, 50, 100, 0.4)',
                border: '1px solid rgba(0, 170, 255, 0.25)',
                borderRadius: '100px',
                fontFamily: 'Exo 2, sans-serif',
                fontSize: '13px',
                color: 'rgba(224, 240, 255, 0.8)',
                backdropFilter: 'blur(10px)',
              }}>
                <span style={{ color: '#00aaff' }}>{item.icon}</span>
                {item.text}
              </div>
            ))}
          </div>

          {/* Price + Button */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '16px',
            position: 'relative', zIndex: 1,
          }}>
            <div style={{
              fontFamily: 'Exo 2, sans-serif',
              fontSize: '15px',
              color: 'rgba(224, 240, 255, 0.6)',
            }}>
              Registration Fee:{' '}
              <span style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '22px',
                fontWeight: 900,
                color: '#00e5ff',
                textShadow: '0 0 15px rgba(0,229,255,0.5)',
              }}>₹399</span>
              {' '}/ team
            </div>

            <MagneticButton
              href="https://unstop.com"
              style={{
                padding: '16px 48px',
                background: 'linear-gradient(135deg, #006699, #00aaff)',
                borderRadius: '8px',
                color: 'white',
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '14px',
                fontWeight: 700,
                letterSpacing: '3px',
                boxShadow: '0 0 40px rgba(0, 170, 255, 0.5)',
              }}
            >
              <FaRocket size={16} />
              REGISTER ON UNSTOP
              <FaExternalLinkAlt size={12} />
            </MagneticButton>

            <div style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '10px',
              color: 'rgba(0, 170, 255, 0.4)',
              letterSpacing: '2px',
            }}>
              DEADLINE: 5 APRIL 2026 · LIMITED SPOTS
            </div>
          </div>
        </motion.div>

        {/* Bottom mini-cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '16px',
          marginTop: '24px',
        }}>
          {[
            { icon: '🏆', title: '₹35,000', sub: 'Total Prize Pool' },
            { icon: '🧩', title: '8 Tracks', sub: 'Problem Domains' },
            { icon: '📜', title: 'Certificates', sub: 'For All Participants' },
            { icon: '🤝', title: 'Mentors', sub: 'Industry Experts' },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              style={{
                background: 'rgba(0, 15, 40, 0.5)',
                border: '1px solid rgba(0, 170, 255, 0.15)',
                borderRadius: '12px',
                padding: '20px',
                textAlign: 'center',
                backdropFilter: 'blur(10px)',
              }}
            >
              <div style={{ fontSize: '24px', marginBottom: '8px' }}>{card.icon}</div>
              <div style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '15px',
                fontWeight: 700,
                color: '#00e5ff',
                marginBottom: '4px',
              }}>{card.title}</div>
              <div style={{
                fontFamily: 'Exo 2, sans-serif',
                fontSize: '12px',
                color: 'rgba(224, 240, 255, 0.5)',
              }}>{card.sub}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
