import { motion } from 'framer-motion';
import { FaInfoCircle, FaUniversity, FaUsers, FaLaptopCode } from 'react-icons/fa';

export default function About() {
  return (
    <section id="about" style={{ padding: '100px 24px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        {/* Section header */}
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
          }}>// 01. ABOUT THE EVENT</div>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #fff, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>What is TVISHI 2.0?</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '28px',
          alignItems: 'start',
        }}>
          {/* Main card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{
              background: 'rgba(0, 20, 50, 0.5)',
              border: '1px solid rgba(0, 170, 255, 0.2)',
              borderRadius: '16px',
              padding: '36px',
              backdropFilter: 'blur(20px)',
              gridColumn: 'span 1',
            }}
          >
            <div style={{
              width: '50px', height: '50px',
              background: 'linear-gradient(135deg, #006699, #00aaff)',
              borderRadius: '12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: '20px',
              boxShadow: '0 0 20px rgba(0, 170, 255, 0.4)',
            }}>
              <FaLaptopCode size={24} color="white" />
            </div>

            <h3 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#00e5ff',
              marginBottom: '14px',
            }}>The Hackathon</h3>

            <p style={{
              fontFamily: 'Exo 2, sans-serif',
              fontSize: '15px',
              color: 'rgba(224, 240, 255, 0.75)',
              lineHeight: 1.8,
            }}>
              TVISHI 2.0 is a <strong style={{ color: '#00aaff' }}>24-hour offline hackathon</strong> organized by
              the IEEE Student Branch, SAGE University Indore. Build groundbreaking solutions,
              push the boundaries of innovation, and compete for ₹35,000 in prizes.
            </p>

            <div style={{ marginTop: '24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { k: 'Mode', v: 'Offline — In Person' },
                { k: 'Date', v: '13 April 2026' },
                { k: 'Duration', v: '24 Hours Non-Stop' },
                { k: 'Team Size', v: '1 to 4 Members' },
                { k: 'Fee', v: '₹399 per Team' },
              ].map(({ k, v }) => (
                <div key={k} style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                  <span style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '11px',
                    color: 'rgba(0, 170, 255, 0.5)',
                    minWidth: '90px',
                  }}>{k}:</span>
                  <span style={{
                    fontFamily: 'Exo 2, sans-serif',
                    fontSize: '14px',
                    color: 'rgba(224, 240, 255, 0.85)',
                  }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Cards column */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              {
                icon: <FaUniversity size={20} />,
                title: 'About IEEE SB SAGE',
                text: 'The IEEE Student Branch at SAGE University Indore fosters technical excellence, innovation, and professional development among students through workshops, hackathons, and industry collaborations.',
              },
              {
                icon: <FaUsers size={20} />,
                title: 'Who Can Participate?',
                text: 'Open to all college students — B.Tech, MBA, BCA, MCA and beyond. Solo participants and teams of up to 4 members are welcome. Any stream, any year, any level of experience.',
              },
              {
                icon: <FaInfoCircle size={20} />,
                title: 'Why TVISHI 2.0?',
                text: 'Following the massive success of TVISHI 1.0, we\'re back with bigger challenges, larger prize pools, more tracks, and an even more electrifying atmosphere. TVISHI 2.0 is where legends are born.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                whileHover={{ borderColor: 'rgba(0, 229, 255, 0.4)', y: -2 }}
                style={{
                  background: 'rgba(0, 15, 40, 0.4)',
                  border: '1px solid rgba(0, 170, 255, 0.15)',
                  borderRadius: '12px',
                  padding: '24px',
                  backdropFilter: 'blur(15px)',
                  transition: 'all 0.3s ease',
                }}
              >
                <div style={{ display: 'flex', gap: '12px', marginBottom: '10px', alignItems: 'center' }}>
                  <span style={{ color: '#00e5ff' }}>{card.icon}</span>
                  <h4 style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '13px',
                    fontWeight: 700,
                    color: '#fff',
                  }}>{card.title}</h4>
                </div>
                <p style={{
                  fontFamily: 'Exo 2, sans-serif',
                  fontSize: '14px',
                  color: 'rgba(224, 240, 255, 0.65)',
                  lineHeight: 1.7,
                }}>{card.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
