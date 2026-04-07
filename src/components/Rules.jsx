import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronDown } from 'react-icons/fa';

const rules = [
  {
    q: 'Team Composition',
    a: 'Teams can have 1 to 4 members. All team members must be currently enrolled students. Mixed-college teams are allowed and encouraged.',
  },
  {
    q: 'Registration & Fees',
    a: 'Registration fee is ₹399 per team, payable on Unstop. Registrations close on 5 April 2026. No refunds after submission.',
  },
  {
    q: 'Project Originality',
    a: 'All code must be written during the hackathon. Using open-source libraries and APIs is allowed. Pre-built projects will result in disqualification.',
  },
  {
    q: 'Submission Requirements',
    a: 'Teams must submit: working prototype or MVP, GitHub repository with code, presentation slides (max 10 slides), and a 3-minute demo video.',
  },
  {
    q: 'Judging Criteria',
    a: 'Projects are evaluated on: Innovation (25%), Technical Complexity (25%), Real-world Impact (20%), UI/UX Design (15%), and Presentation Quality (15%).',
  },
  {
    q: 'Code of Conduct',
    a: 'All participants must maintain a respectful and inclusive environment. Plagiarism, harassment, or any unethical conduct will result in immediate disqualification.',
  },
  {
    q: 'Intellectual Property',
    a: 'Teams retain full ownership of their projects. By participating, you grant IEEE SB SAGE University rights to feature your project in promotional materials.',
  },
  {
    q: 'Tools & Resources',
    a: 'Participants may use any programming language, framework, or tool. Internet access will be provided. Teams should bring their own laptops and chargers.',
  },
];

function RuleCard({ rule, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05 }}
      style={{
        border: `1px solid ${open ? 'rgba(0,229,255,0.3)' : 'rgba(0,170,255,0.15)'}`,
        borderRadius: '10px',
        overflow: 'hidden',
        backdropFilter: 'blur(15px)',
        transition: 'border-color 0.3s ease',
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        data-hover="true"
        style={{
          width: '100%',
          padding: '18px 24px',
          background: open ? 'rgba(0, 40, 80, 0.5)' : 'rgba(0, 20, 50, 0.4)',
          border: 'none',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          cursor: 'none',
          transition: 'background 0.3s ease',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '10px',
            color: open ? '#00e5ff' : 'rgba(0,170,255,0.5)',
            letterSpacing: '1px',
          }}>{String(index + 1).padStart(2, '0')}</span>
          <span style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            color: open ? '#fff' : 'rgba(224,240,255,0.85)',
            textAlign: 'left',
          }}>{rule.q}</span>
        </div>
        <motion.span
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          style={{ color: open ? '#00e5ff' : 'rgba(0,170,255,0.5)', flexShrink: 0 }}
        >
          <FaChevronDown size={14} />
        </motion.span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div style={{
              padding: '16px 24px 20px 52px',
              background: 'rgba(0, 10, 30, 0.3)',
              borderTop: '1px solid rgba(0, 170, 255, 0.1)',
            }}>
              <p style={{
                fontFamily: 'Exo 2, sans-serif',
                fontSize: '14px',
                color: 'rgba(224, 240, 255, 0.7)',
                lineHeight: 1.8,
              }}>{rule.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Rules() {
  return (
    <section id="rules" style={{ padding: '100px 24px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '50px' }}
        >
          <div style={{
            fontFamily: 'Space Mono, monospace',
            fontSize: '11px',
            color: '#00aaff',
            letterSpacing: '4px',
            marginBottom: '12px',
          }}>// 05. GUIDELINES</div>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #fff, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>Rules & Guidelines</h2>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {rules.map((rule, i) => (
            <RuleCard key={i} rule={rule} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
