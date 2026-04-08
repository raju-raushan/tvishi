import { motion } from 'framer-motion';
import { useRef, useState } from 'react';
import {
    FaBuilding,
    FaDollarSign,
    FaGraduationCap,
    FaHeartbeat,
    FaLightbulb,
    FaLock, FaRobot,
    FaShieldAlt
} from 'react-icons/fa';

const tracks = [
  { id: 1, icon: <FaHeartbeat />, name: 'Healthcare', desc: 'Digital health, telemedicine, diagnostics, and medical innovation for better patient outcomes.', color: '#ff4d6d', gradient: 'from-red-900/30 to-pink-900/20' },
  { id: 2, icon: <FaDollarSign />, name: 'Finance', desc: 'FinTech, digital payments, blockchain, and financial inclusion solutions.', color: '#ffd700', gradient: 'from-yellow-900/30 to-amber-900/20' },
  { id: 3, icon: <FaShieldAlt />, name: 'Insurance', desc: 'InsurTech platforms, risk assessment tools, and smart insurance management.', color: '#00aaff', gradient: 'from-blue-900/30 to-cyan-900/20' },
  { id: 4, icon: <FaGraduationCap />, name: 'Education', desc: 'EdTech platforms, adaptive learning, and tools to democratize quality education.', color: '#7c3aed', gradient: 'from-violet-900/30 to-purple-900/20' },
  { id: 5, icon: <FaLock />, name: 'Cyber Security', desc: 'Threat detection, secure communications, privacy tools, and digital safety solutions.', color: '#00e5ff', gradient: 'from-cyan-900/30 to-teal-900/20' },
  { id: 6, icon: <FaRobot />, name: 'JobTech Automation', desc: 'AI-powered recruitment, workforce management, and career automation tools.', color: '#ff6b35', gradient: 'from-orange-900/30 to-red-900/20' },
  { id: 7, icon: <FaBuilding />, name: 'GovTech', desc: 'Digital governance, e-services, civic engagement, and smart city solutions.', color: '#10b981', gradient: 'from-green-900/30 to-emerald-900/20' },
  { id: 8, icon: <FaLightbulb />, name: 'Open Innovation', desc: 'Any domain! Build something extraordinary — your creativity sets the limits.', color: '#f0abfc', gradient: 'from-fuchsia-900/30 to-pink-900/20' },
];

function TrackCard({ track, index }) {
  const cardRef = useRef(null);
  const [transform, setTransform] = useState('');
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });

  const onMouseMove = (e) => {
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotX = ((y - cy) / cy) * -12;
    const rotY = ((x - cx) / cx) * 12;
    setTransform(`perspective(600px) rotateX(${rotX}deg) rotateY(${rotY}deg) scale3d(1.02, 1.02, 1.02)`);
    setGlowPos({ x: (x / rect.width) * 100, y: (y / rect.height) * 100 });
  };

  const onMouseLeave = () => {
    setTransform('perspective(600px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)');
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.5 }}
      ref={cardRef}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{
        transform,
        transition: transform === '' ? 'transform 0.5s ease' : 'transform 0.1s ease',
        background: 'rgba(0, 15, 40, 0.5)',
        border: `1px solid ${track.color}30`,
        borderRadius: '14px',
        padding: '28px',
        backdropFilter: 'blur(15px)',
        position: 'relative',
        overflow: 'hidden',
        cursor: 'none',
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Dynamic glow */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: `radial-gradient(circle at ${glowPos.x}% ${glowPos.y}%, ${track.color}15, transparent 60%)`,
        transition: 'opacity 0.3s ease',
        pointerEvents: 'none',
      }} />

      {/* Corner accent */}
      <div style={{
        position: 'absolute',
        top: 0, right: 0,
        width: '60px', height: '60px',
        background: `linear-gradient(225deg, ${track.color}25, transparent)`,
        borderRadius: '0 14px 0 0',
      }} />

      {/* Track number */}
      <div style={{
        position: 'absolute',
        top: '14px', right: '16px',
        fontFamily: 'Space Mono, monospace',
        fontSize: '10px',
        color: `${track.color}60`,
        letterSpacing: '1px',
      }}>
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Icon */}
      <div style={{
        width: '52px', height: '52px',
        background: `${track.color}15`,
        border: `1px solid ${track.color}40`,
        borderRadius: '12px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        marginBottom: '16px',
        fontSize: '22px',
        color: track.color,
        boxShadow: `0 0 20px ${track.color}20`,
      }}>
        {track.icon}
      </div>

      <h3 style={{
        fontFamily: 'Orbitron, sans-serif',
        fontSize: '15px',
        fontWeight: 700,
        color: '#fff',
        marginBottom: '10px',
      }}>{track.name}</h3>

      <p style={{
        fontFamily: 'Exo 2, sans-serif',
        fontSize: '13px',
        color: 'rgba(224, 240, 255, 0.6)',
        lineHeight: 1.7,
      }}>{track.desc}</p>

      {/* Bottom glow line */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '15%', right: '15%',
        height: '1px',
        background: `linear-gradient(90deg, transparent, ${track.color}60, transparent)`,
      }} />
    </motion.div>
  );
}

export default function Tracks() {
  return (
    <section id="tracks" style={{ padding: '100px 24px', position: 'relative', zIndex: 2 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          }}>// 02. PROBLEM TRACKS</div>
          <h2 style={{
            fontFamily: 'Orbitron, sans-serif',
            fontSize: 'clamp(28px, 5vw, 48px)',
            fontWeight: 900,
            background: 'linear-gradient(135deg, #fff, #00e5ff)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: '16px',
          }}>8 Innovation Tracks</h2>
          <p style={{
            fontFamily: 'Exo 2, sans-serif',
            fontSize: '16px',
            color: 'rgba(224, 240, 255, 0.6)',
            maxWidth: '500px',
            margin: '0 auto',
          }}>
            Choose your domain and build solutions that matter. Every track has real-world impact.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: '20px',
        }}>
          {tracks.map((track, i) => (
            <TrackCard key={track.id} track={track} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
