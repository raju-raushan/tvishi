

const events = [
  { time: 'March 2026', title: 'Registrations Open', desc: 'Sign up your team on Unstop. Limited spots available — first come, first served.', icon: '📋', status: 'done' },
  { time: '5 April 2026', title: 'Registration Deadline', desc: 'Last date to register your team. Fee: ₹399 per team.', icon: '⏳', status: 'current' },
  { time: '12 April 2026', title: 'Pre-Hackathon Briefing', desc: 'Problem statements released. Venue orientation and team check-in begins.', icon: '📡', status: 'upcoming' },
  { time: '13 April 2026 — 9:00 AM', title: 'Hackathon Kick-off', desc: 'Opening ceremony. The clock starts. 24 hours of non-stop building begins!', icon: '🚀', status: 'upcoming' },
  { time: '13 April 2026 — 3:00 PM', title: 'Mid-Point Review', desc: 'Mentors available for guidance. Submit progress updates.', icon: '🔍', status: 'upcoming' },
  { time: '14 April 2026 — 6:00 AM', title: 'Final Submission', desc: 'Submit your project — code, demo, and presentation deck.', icon: '📦', status: 'upcoming' },
  { time: '14 April 2026 — 9:00 AM', title: 'Presentations & Judging', desc: 'Teams present their solutions to industry expert judges.', icon: '🎯', status: 'upcoming' },
  { time: '14 April 2026 — Afternoon', title: 'Award Ceremony', desc: 'Winners announced! ₹35,000 prize pool distributed. Certificates awarded.', icon: '🏆', status: 'upcoming' },
];

export default function Timeline() {
  return (
    <section id="timeline" style={{ padding: '100px 24px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
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
          }}>// 03. SCHEDULE</div>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #fff, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Event Timeline</h2>
        </motion.div>

        <div style={{ position: 'relative' }}>
          {/* Vertical line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              left: '28px',
              top: 0, bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, transparent, #00aaff 10%, #00e5ff 50%, #00aaff 90%, transparent)',
              transformOrigin: 'top',
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0px' }}>
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                style={{
                  display: 'flex',
                  gap: '24px',
                  alignItems: 'flex-start',
                  paddingBottom: '36px',
                  position: 'relative',
                }}
              >
                {/* Node */}
                <div style={{
                  width: '58px',
                  flexShrink: 0,
                  display: 'flex',
                  justifyContent: 'center',
                  paddingTop: '4px',
                  position: 'relative',
                  zIndex: 2,
                }}>
                  <motion.div
                    whileInView={{
                      boxShadow: ['0 0 0px rgba(0,229,255,0)', '0 0 20px rgba(0,229,255,0.8)', '0 0 10px rgba(0,229,255,0.4)'],
                    }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 + 0.3, duration: 0.6 }}
                    style={{
                      width: '36px', height: '36px',
                      borderRadius: '50%',
                      background: event.status === 'done'
                        ? 'linear-gradient(135deg, #006699, #00aaff)'
                        : event.status === 'current'
                        ? 'linear-gradient(135deg, #00aaff, #00e5ff)'
                        : 'rgba(0, 20, 50, 0.8)',
                      border: `2px solid ${event.status === 'upcoming' ? 'rgba(0, 170, 255, 0.4)' : '#00e5ff'}`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '14px',
                    }}
                  >
                    {event.icon}
                  </motion.div>
                </div>

                {/* Content */}
                <div style={{
                  flex: 1,
                  background: 'rgba(0, 15, 40, 0.4)',
                  border: `1px solid ${event.status === 'current' ? 'rgba(0,229,255,0.4)' : 'rgba(0, 170, 255, 0.15)'}`,
                  borderRadius: '10px',
                  padding: '18px 20px',
                  backdropFilter: 'blur(10px)',
                  boxShadow: event.status === 'current' ? '0 0 20px rgba(0,229,255,0.1)' : 'none',
                }}>
                  <div style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '10px',
                    color: '#00aaff',
                    letterSpacing: '2px',
                    marginBottom: '6px',
                  }}>{event.time}</div>
                  <h4 style={{
                    fontFamily: 'Orbitron, sans-serif',
                    fontSize: '14px',
                    fontWeight: 700,
                    color: event.status === 'current' ? '#00e5ff' : '#fff',
                    marginBottom: '6px',
                  }}>{event.title}</h4>
                  <p style={{
                    fontFamily: 'Exo 2, sans-serif',
                    fontSize: '13px',
                    color: 'rgba(224, 240, 255, 0.6)',
                    lineHeight: 1.6,
                  }}>{event.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
