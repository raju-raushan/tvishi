import { FaTrophy, FaMedal, FaAward } from 'react-icons/fa';

const prizes = [
  {
    rank: '2nd Runner Up',
    amount: '₹10,000',
    extra: '+ Certificate',
    icon: <FaAward size={32} />,
    color: '#cd7f32',
    glow: 'rgba(205, 127, 50, 0.4)',
    delay: 0.2,
    scale: 0.92,
  },
  {
    rank: '🏆 Winner',
    amount: '₹25,000',
    extra: '+ Certificate',
    icon: <FaTrophy size={40} />,
    color: '#ffd700',
    glow: 'rgba(255, 215, 0, 0.5)',
    delay: 0,
    scale: 1,
    featured: true,
  },
  {
    rank: 'Runner Up',
    amount: '₹15,000',
    extra: '+ Certificate',
    icon: <FaMedal size={32} />,
    color: '#c0c0c0',
    glow: 'rgba(192, 192, 192, 0.4)',
    delay: 0.1,
    scale: 0.95,
  },
];

// Reorder for visual: Runner-up, Winner (center), 2nd Runner
const displayOrder = [prizes[0], prizes[1], prizes[2]];

export default function Prizes() {
  return (
    <section id="prizes" style={{ padding: '100px 24px', position: 'relative', zIndex: 2 }}>
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
          }}>// 04. PRIZES</div>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #fff, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px',
          }}>Win Big</h2>
          <div style={{
            display: 'inline-block',
            padding: '8px 24px',
            background: 'rgba(255, 215, 0, 0.1)',
            border: '1px solid rgba(255, 215, 0, 0.3)',
            borderRadius: '100px',
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '14px',
            color: '#ffd700',
            letterSpacing: '2px',
          }}>
            Total Prize Pool: ₹50,000
          </div>
        </motion.div>

        <div style={{
          display: 'flex',
          gap: '20px',
          justifyContent: 'center',
          alignItems: 'flex-end',
          flexWrap: 'wrap',
        }}>
          {displayOrder.map((prize) => (
            <motion.div
              key={prize.rank}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: prize.delay, duration: 0.6, type: 'spring', stiffness: 100 }}
              whileHover={{
                y: -8,
                boxShadow: `0 0 50px ${prize.glow}`,
              }}
              style={{
                background: prize.featured
                  ? 'linear-gradient(180deg, rgba(255,215,0,0.08) 0%, rgba(0,20,50,0.7) 100%)'
                  : 'rgba(0, 15, 40, 0.5)',
                border: `1px solid ${prize.color}40`,
                borderRadius: '16px',
                padding: prize.featured ? '40px 32px' : '32px 28px',
                textAlign: 'center',
                backdropFilter: 'blur(20px)',
                width: prize.featured ? '280px' : '240px',
                position: 'relative',
                overflow: 'hidden',
                transition: 'box-shadow 0.3s ease',
                boxShadow: prize.featured ? `0 0 30px ${prize.glow}` : 'none',
              }}
            >
              {/* Top glow */}
              <div style={{
                position: 'absolute',
                top: 0, left: '25%', right: '25%',
                height: '2px',
                background: `linear-gradient(90deg, transparent, ${prize.color}, transparent)`,
              }} />

              {/* Radial bg */}
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0,
                height: '120px',
                background: `radial-gradient(ellipse at top, ${prize.color}15, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              {/* Icon */}
              <motion.div
                animate={prize.featured ? {
                  filter: [`drop-shadow(0 0 10px ${prize.color})`, `drop-shadow(0 0 25px ${prize.color})`, `drop-shadow(0 0 10px ${prize.color})`],
                } : {}}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ color: prize.color, marginBottom: '16px', position: 'relative', zIndex: 1 }}
              >
                {prize.icon}
              </motion.div>

              <div style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '12px',
                fontWeight: 600,
                color: 'rgba(224,240,255,0.7)',
                letterSpacing: '3px',
                marginBottom: '12px',
                textTransform: 'uppercase',
                position: 'relative', zIndex: 1,
              }}>{prize.rank}</div>

              <div style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: prize.featured ? '42px' : '34px',
                fontWeight: 900,
                color: prize.color,
                textShadow: `0 0 20px ${prize.glow}`,
                lineHeight: 1,
                marginBottom: '8px',
                position: 'relative', zIndex: 1,
              }}>{prize.amount}</div>

              <div style={{
                fontFamily: 'Exo 2, sans-serif',
                fontSize: '14px',
                color: 'rgba(224, 240, 255, 0.5)',
                position: 'relative', zIndex: 1,
              }}>{prize.extra}</div>
            </motion.div>
          ))}
        </div>

        {/* Additional perks */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: '48px',
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          {[
            '🏅 Certificates for All Participants',
            '🎁 Goodies & Swag',
            '🤝 Networking Opportunities',
            '⭐ IEEE Recognition',
          ].map((perk, i) => (
            <div key={i} style={{
              padding: '8px 20px',
              background: 'rgba(0, 30, 70, 0.4)',
              border: '1px solid rgba(0, 170, 255, 0.2)',
              borderRadius: '100px',
              fontFamily: 'Exo 2, sans-serif',
              fontSize: '13px',
              color: 'rgba(224, 240, 255, 0.7)',
              backdropFilter: 'blur(10px)',
            }}>{perk}</div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
