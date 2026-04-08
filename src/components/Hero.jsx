import { PointMaterial, Points, Stage, useGLTF } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { motion } from "framer-motion";
import gsap from "gsap";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { FiArrowDown } from "react-icons/fi";
import sageModel from "../assets/sage.glb";
import { useWebGL } from "../hooks/useWebGL";

function SageModel() {
  const { scene } = useGLTF(sageModel);
  const modelRef = useRef(null);

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
      modelRef.current.rotation.x = 0;
      modelRef.current.rotation.z = 0;
    }
  });

  return (
    <primitive 
      object={scene} 
      ref={modelRef} 
      scale={11} // Reduced scale for a better background fit
      position={[0, 1.5, 0]} 
    />
  );
}

function ParticleField() {
  const ref = useRef(null);
  const count = 3000;

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20;
      arr[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.05;
      ref.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.03) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled>
      <PointMaterial
        transparent
        color="#0090ff"
        size={0.03}
        sizeAttenuation
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function GridPlane() {
  const linesRef = useRef(null);
  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.position.z = (state.clock.elapsedTime * 0.5) % 2;
    }
  });

  const lines = useMemo(() => {
    const result = [];
    for (let i = -10; i <= 10; i++) {
      result.push(
        <line key={`v${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([i, -3, -10, i, -3, 10]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#0090ff" opacity={0.15} transparent />
        </line>
      );
      result.push(
        <line key={`h${i}`}>
          <bufferGeometry>
            <bufferAttribute
              attach="attributes-position"
              args={[new Float32Array([-10, -3, i, 10, -3, i]), 3]}
            />
          </bufferGeometry>
          <lineBasicMaterial color="#0090ff" opacity={0.15} transparent />
        </line>
      );
    }
    return result;
  }, []);

  return <group ref={linesRef}>{lines}</group>;
}

function useCountdown() {
  const [time, setTime] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const target = new Date("2026-05-02T00:00:00+05:30").getTime();
    const tick = () => {
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        setTime({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }
      setTime({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return time;
}

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <motion.div
        key={value}
        className="w-14 h-14 sm:w-20 sm:h-20 glass-blue border border-blue-500/30 rounded-xl flex items-center justify-center font-orbitron text-xl sm:text-3xl font-bold text-white glow-blue"
      >
        {String(value).padStart(2, "0")}
      </motion.div>
      <span className="mt-1 text-[10px] sm:text-xs text-blue-400/70 font-mono tracking-widest uppercase">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const containerRef = useRef(null);
  const titleRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const time = useCountdown();
  const webglSupported = useWebGL();

  useEffect(() => {
    if (titleRef.current) {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-4 pb-10"
    >
      {/* Background Layer: Particles + 3D Model */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {webglSupported && (
          <Canvas camera={{ position: [0, 0, 8], fov: 60 }} dpr={[1, 1.5]}>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1.5} color="#0090ff" />
            <Suspense fallback={null}>
               <Stage environment="city" intensity={0.4} shadows={false} adjustCamera={false}>
                  <SageModel />
               </Stage>
            </Suspense>
            <ParticleField />
            <GridPlane />
          </Canvas>
        )}
      </div>

      {/* Radial overlay to make text pop against the background model */}
      <div className="absolute inset-0 z-1 pointer-events-none"
        style={{ background: "radial-gradient(circle at 50% 50%, rgba(0,10,30,0.4) 0%, transparent 80%)" }}
      />

      {/* Main UI Content Layer (Floats above the model) */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full flex flex-col items-center px-6 max-w-6xl mx-auto"
      >
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="inline-flex items-center gap-2 glass-blue border border-blue-500/30 rounded-full px-4 py-1 text-[10px] sm:text-xs font-mono text-cyan-400 mb-6 tracking-wider"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
          IEEE Student Branch · SAGE University Indore
        </motion.div>

        {/* 1. TVISHI 2.0 Title */}
        <div className="text-center mb-6">
          <h1
            ref={titleRef}
            className="font-orbitron text-6xl sm:text-8xl md:text-9xl font-black text-white leading-tight glitch"
            data-text="TVISHI 2.0"
          >
            <span className="gradient-text">TVISHI</span>{" "}
            <span className="text-white">2.0</span>
          </h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="font-orbitron text-xl sm:text-2xl text-cyan-400 font-medium tracking-[0.25em] -mt-2"
          >
            CODE · CONQUER · WIN
          </motion.p>
        </div>

        {/* 2. Countdown Timer */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="flex items-center justify-center gap-3 sm:gap-4 mt-4 mb-10"
        >
          <CountdownUnit value={time.days} label="Days" />
          <span className="text-blue-500 text-xl sm:text-3xl font-bold pb-5">:</span>
          <CountdownUnit value={time.hours} label="Hours" />
          <span className="text-blue-500 text-xl sm:text-3xl font-bold pb-5">:</span>
          <CountdownUnit value={time.minutes} label="Mins" />
          <span className="text-blue-500 text-xl sm:text-3xl font-bold pb-5">:</span>
          <CountdownUnit value={time.seconds} label="Secs" />
        </motion.div>

        {/* 3. CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <motion.a
            href="https://unstop.com"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-xl font-orbitron font-bold text-sm text-white bg-gradient-to-r from-blue-600 to-cyan-500 glow-blue transition-all"
          >
            Register Now — ₹1000
          </motion.a>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector("#tracks")?.scrollIntoView({ behavior: "smooth" })}
            className="px-10 py-4 rounded-xl font-orbitron font-bold text-sm text-blue-300 glass-blue border border-blue-500/30 hover:border-cyan-400/50 transition-all"
          >
            View Tracks
          </motion.button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 flex flex-col items-center text-blue-400/50 z-20">
        <span className="font-mono text-[10px] tracking-widest">SCROLL</span>
        <motion.div animate={{ y: [0, 8, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
          <FiArrowDown size={16} />
        </motion.div>
      </div>
    </section>
  );
}