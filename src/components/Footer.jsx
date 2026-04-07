import { FaGithub, FaHeart, FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import ieeeLogo from '../assets/IEEE.png';

const links = {
  'Event': ['About', 'Tracks', 'Timeline', 'Prizes'],
  'Participate': ['Register', 'Rules', 'Sponsors', 'Contact'],
  'IEEE SB': ['About IEEE', 'SAGE University', 'Past Events', 'Team'],
};

export default function Footer() {
  return (
    <footer style={{
      background: 'rgba(0, 5, 15, 0.95)',
      borderTop: '1px solid rgba(0, 170, 255, 0.15)',
      padding: '60px 24px 30px',
      position: 'relative',
      zIndex: 2,
    }}>
      {/* Top glow */}
      <div style={{
        position: 'absolute',
        top: 0, left: '25%', right: '25%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, #00aaff, #00e5ff, #00aaff, transparent)',
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '40px',
          marginBottom: '50px',
        }}>
          {/* Brand */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '22px',
              fontWeight: 900,
              background: 'linear-gradient(135deg, #00e5ff, #006699)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '8px',
            }}>TVISHI 2.0</div>

            <div style={{
              fontFamily: 'Space Mono, monospace',
              fontSize: '9px',
              color: 'rgba(0, 170, 255, 0.5)',
              letterSpacing: '2px',
              marginBottom: '16px',
            }}>CODE · CONQUER · WIN</div>

            <p style={{
              fontFamily: 'Exo 2, sans-serif',
              fontSize: '13px',
              color: 'rgba(224, 240, 255, 0.45)',
              lineHeight: 1.7,
              maxWidth: '200px',
            }}>
              24-Hour Offline Hackathon<br />
              13 April 2026<br />
              SAGE University Indore
            </p>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              {[
                { icon: <FaLinkedin size={16} />, href: '#', color: '#0077b5' },
                { icon: <FaInstagram size={16} />, href: '#', color: '#e1306c' },
                { icon: <FaTwitter size={16} />, href: '#', color: '#1da1f2' },
                { icon: <FaGithub size={16} />, href: '#', color: '#aaa' },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  data-hover="true"
                  style={{
                    width: '34px', height: '34px',
                    background: 'rgba(0, 20, 50, 0.6)',
                    border: '1px solid rgba(0, 170, 255, 0.15)',
                    borderRadius: '6px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'rgba(224, 240, 255, 0.5)',
                    textDecoration: 'none',
                    transition: 'all 0.3s ease',
                    cursor: 'none',
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.color = s.color;
                    e.currentTarget.style.borderColor = s.color;
                    e.currentTarget.style.boxShadow = `0 0 10px ${s.color}40`;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.color = 'rgba(224, 240, 255, 0.5)';
                    e.currentTarget.style.borderColor = 'rgba(0, 170, 255, 0.15)';
                    e.currentTarget.style.boxShadow = 'none';
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <div style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '11px',
                fontWeight: 700,
                color: '#00aaff',
                letterSpacing: '3px',
                marginBottom: '18px',
                textTransform: 'uppercase',
              }}>{group}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {items.map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(/ /g, '-')}`}
                    data-hover="true"
                    style={{
                      fontFamily: 'Exo 2, sans-serif',
                      fontSize: '13px',
                      color: 'rgba(224, 240, 255, 0.45)',
                      textDecoration: 'none',
                      transition: 'color 0.3s ease',
                      cursor: 'none',
                    }}
                    onMouseEnter={e => { e.target.style.color = '#00e5ff'; }}
                    onMouseLeave={e => { e.target.style.color = 'rgba(224, 240, 255, 0.45)'; }}
                  >
                    → {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* IEEE Badge */}
        <div style={{
          padding: '24px',
          background: 'rgba(0, 15, 40, 0.4)',
          border: '1px solid rgba(0, 170, 255, 0.1)',
          borderRadius: '12px',
          display: 'flex',
          gap: '20px',
          alignItems: 'center',
          flexWrap: 'wrap',
          marginBottom: '30px',
        }}>
          <div style={{
            width: '50px', height: '50px',
            background: 'linear-gradient(135deg, #006699, #00aaff)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            boxShadow: '0 0 15px rgba(0, 170, 255, 0.3)',
          }}>
            <div><img src={ieeeLogo} alt="IEEE Logo" /></div>
          </div>
          <div>
            <div style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '13px',
              fontWeight: 700,
              color: '#fff',
              marginBottom: '4px',
            }}>IEEE Student Branch, SAGE University Indore</div>
            <div style={{
              fontFamily: 'Exo 2, sans-serif',
              fontSize: '12px',
              color: 'rgba(224, 240, 255, 0.5)',
            }}>
              Kailod Kartal, Indore, Madhya Pradesh – 452020, India
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(0, 170, 255, 0.08)',
        }}>
          <span style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '10px',
            color: 'rgba(224, 240, 255, 0.3)',
            letterSpacing: '1px',
          }}>
            © 2026 TVISHI 2.0 · IEEE SB SAGE University Indore · All Rights Reserved
          </span>
          <span style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '10px',
            color: 'rgba(224, 240, 255, 0.3)',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
          }}>
            Made with <FaHeart size={10} style={{ color: '#ff4d6d' }} /> for Innovation
          </span>
        </div>
      </div>
    </footer>
  );
}
