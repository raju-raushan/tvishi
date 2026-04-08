import { useRef, Suspense, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Stars } from '@react-three/drei';
import * as THREE from 'three';

function GlobeMesh() {
  const meshRef = useRef();
  const wireRef = useRef();

  useFrame(({ clock, mouse }) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = clock.getElapsedTime() * 0.15;
      meshRef.current.rotation.x = mouse.y * 0.05;
    }
    if (wireRef.current) {
      wireRef.current.rotation.y = clock.getElapsedTime() * 0.12;
      wireRef.current.rotation.x = -clock.getElapsedTime() * 0.04;
    }
  });

  return (
    <>
      </>
  );
}

function GlobeParticles() {
  const ref = useRef();
  const count = 200;

  // eslint-disable-next-line react-hooks/purity
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.2 + Math.random() * 0.8;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, [])

  useFrame(({ clock }) => {
    if (ref.current) {
      ref.current.rotation.y = clock.getElapsedTime() * 0.05;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={positions}
          count={count}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#00e5ff"
        size={0.03}
        opacity={0.6}
        transparent
        sizeAttenuation
      />
    </points>
  );
}

export default function Globe() {
  return (
    <div></div>
  );
}
