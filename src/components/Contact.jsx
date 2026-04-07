import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPaperPlane, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('idle'); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    // Simulate sending (replace with EmailJS or similar)
    setTimeout(() => {
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 4000);
    }, 1500);
  };

  return (
    <section id="contact" style={{ padding: '100px 24px', position: 'relative', zIndex: 2 }}>
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
          }}>// 09. CONTACT</div>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #fff, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '12px',
          }}>Ask Us Anything</h2>
          <p style={{
            fontFamily: 'Exo 2, sans-serif',
            fontSize: '15px',
            color: 'rgba(224, 240, 255, 0.5)',
          }}>Have questions? We're here to help.</p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px',
        }}>
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}
          >
            <div style={{
              background: 'rgba(0, 15, 40, 0.5)',
              border: '1px solid rgba(0, 170, 255, 0.2)',
              borderRadius: '16px',
              padding: '32px',
              backdropFilter: 'blur(15px)',
            }}>
              <h3 style={{
                fontFamily: 'Orbitron, sans-serif',
                fontSize: '15px',
                fontWeight: 700,
                color: '#00e5ff',
                marginBottom: '24px',
                letterSpacing: '2px',
              }}>GET IN TOUCH</h3>

              {[
                {
                  icon: <FaEnvelope size={16} />,
                  label: 'Email',
                  value: 'ieee.sageindore@gmail.com',
                  href: 'mailto:ieee.sageindore@gmail.com',
                },
                {
                  icon: <FaPhone size={16} />,
                  label: 'Phone',
                  value: '+91 XXXXX XXXXX',
                  href: '#',
                },
                {
                  icon: <FaMapMarkerAlt size={16} />,
                  label: 'Location',
                  value: 'SAGE University, Kailod Kartal, Indore, MP 452020',
                  href: '#',
                },
              ].map((item, i) => (
                <div key={i} style={{
                  display: 'flex',
                  gap: '14px',
                  alignItems: 'flex-start',
                  marginBottom: '20px',
                }}>
                  <div style={{
                    width: '40px', height: '40px',
                    background: 'rgba(0, 102, 153, 0.3)',
                    border: '1px solid rgba(0, 170, 255, 0.3)',
                    borderRadius: '8px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#00aaff',
                    flexShrink: 0,
                  }}>{item.icon}</div>
                  <div>
                    <div style={{
                      fontFamily: 'Space Mono, monospace',
                      fontSize: '9px',
                      color: 'rgba(0, 170, 255, 0.5)',
                      letterSpacing: '2px',
                      marginBottom: '3px',
                    }}>{item.label}</div>
                    <div style={{
                      fontFamily: 'Exo 2, sans-serif',
                      fontSize: '14px',
                      color: 'rgba(224, 240, 255, 0.8)',
                    }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social */}
            <div style={{
              background: 'rgba(0, 15, 40, 0.5)',
              border: '1px solid rgba(0, 170, 255, 0.2)',
              borderRadius: '12px',
              padding: '20px 24px',
              backdropFilter: 'blur(15px)',
            }}>
              <div style={{
                fontFamily: 'Space Mono, monospace',
                fontSize: '10px',
                color: 'rgba(0, 170, 255, 0.5)',
                letterSpacing: '3px',
                marginBottom: '16px',
              }}>FOLLOW US</div>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                {[
                  { label: 'LinkedIn', color: '#0077b5', href: '#' },
                  { label: 'Instagram', color: '#e1306c', href: '#' },
                  { label: 'Twitter/X', color: '#1da1f2', href: '#' },
                  { label: 'Unstop', color: '#ff6b35', href: '#' },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    data-hover="true"
                    style={{
                      padding: '6px 14px',
                      background: `${s.color}15`,
                      border: `1px solid ${s.color}40`,
                      borderRadius: '6px',
                      color: s.color,
                      fontFamily: 'Exo 2, sans-serif',
                      fontSize: '12px',
                      textDecoration: 'none',
                      transition: 'all 0.3s ease',
                      cursor: 'none',
                    }}
                    onMouseEnter={e => {
                      e.target.style.background = `${s.color}30`;
                      e.target.style.boxShadow = `0 0 12px ${s.color}40`;
                    }}
                    onMouseLeave={e => {
                      e.target.style.background = `${s.color}15`;
                      e.target.style.boxShadow = 'none';
                    }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{
              background: 'rgba(0, 15, 40, 0.5)',
              border: '1px solid rgba(0, 170, 255, 0.2)',
              borderRadius: '16px',
              padding: '36px',
              backdropFilter: 'blur(20px)',
            }}
          >
            <h3 style={{
              fontFamily: 'Orbitron, sans-serif',
              fontSize: '15px',
              fontWeight: 700,
              color: '#00e5ff',
              marginBottom: '28px',
              letterSpacing: '2px',
            }}>SEND A MESSAGE</h3>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
              {[
                { name: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                { name: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
              ].map((field) => (
                <div key={field.name}>
                  <label style={{
                    fontFamily: 'Space Mono, monospace',
                    fontSize: '9px',
                    color: 'rgba(0, 170, 255, 0.6)',
                    letterSpacing: '2px',
                    display: 'block',
                    marginBottom: '6px',
                    textTransform: 'uppercase',
                  }}>{field.label}</label>
                  <input
                    type={field.type}
                    name={field.name}
                    value={form[field.name]}
                    onChange={handleChange}
                    placeholder={field.placeholder}
                    required
                    style={{
                      width: '100%',
                      padding: '12px 16px',
                      background: 'rgba(0, 10, 30, 0.6)',
                      border: '1px solid rgba(0, 170, 255, 0.2)',
                      borderRadius: '8px',
                      color: '#e0f0ff',
                      fontFamily: 'Exo 2, sans-serif',
                      fontSize: '14px',
                      outline: 'none',
                      transition: 'border-color 0.3s ease',
                      cursor: 'text',
                    }}
                    onFocus={e => e.target.style.borderColor = '#00e5ff'}
                    onBlur={e => e.target.style.borderColor = 'rgba(0, 170, 255, 0.2)'}
                  />
                </div>
              ))}

              <div>
                <label style={{
                  fontFamily: 'Space Mono, monospace',
                  fontSize: '9px',
                  color: 'rgba(0, 170, 255, 0.6)',
                  letterSpacing: '2px',
                  display: 'block',
                  marginBottom: '6px',
                  textTransform: 'uppercase',
                }}>Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Your question or message..."
                  required
                  rows={5}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'rgba(0, 10, 30, 0.6)',
                    border: '1px solid rgba(0, 170, 255, 0.2)',
                    borderRadius: '8px',
                    color: '#e0f0ff',
                    fontFamily: 'Exo 2, sans-serif',
                    fontSize: '14px',
                    outline: 'none',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease',
                    cursor: 'text',
                  }}
                  onFocus={e => e.target.style.borderColor = '#00e5ff'}
                  onBlur={e => e.target.style.borderColor = 'rgba(0, 170, 255, 0.2)'}
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(0,229,255,0.5)' }}
                whileTap={{ scale: 0.98 }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '14px',
                  background: status === 'sent'
                    ? 'linear-gradient(135deg, #006633, #00aa55)'
                    : 'linear-gradient(135deg, #006699, #00aaff)',
                  border: 'none',
                  borderRadius: '8px',
                  color: 'white',
                  fontFamily: 'Orbitron, sans-serif',
                  fontSize: '12px',
                  fontWeight: 700,
                  letterSpacing: '3px',
                  cursor: status === 'sending' ? 'wait' : 'none',
                  boxShadow: '0 0 20px rgba(0, 170, 255, 0.4)',
                  transition: 'background 0.3s ease',
                }}
              >
                {status === 'sending' ? (
                  <>TRANSMITTING...</>
                ) : status === 'sent' ? (
                  <>✓ MESSAGE SENT</>
                ) : (
                  <><FaPaperPlane size={13} /> SEND MESSAGE</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
