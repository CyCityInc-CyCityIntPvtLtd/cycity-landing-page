import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function Particles({ count = 3000 }) {
  const ref = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.02;
      ref.current.rotation.y = state.clock.elapsedTime * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#CBFF00"
        size={0.02}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.6}
      />
    </Points>
  );
}

function FloatingOrbs() {
  const orb1 = useRef<THREE.Mesh>(null);
  const orb2 = useRef<THREE.Mesh>(null);
  const orb3 = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (orb1.current) {
      orb1.current.position.y = Math.sin(t * 0.5) * 0.5 + 1;
      orb1.current.position.x = Math.cos(t * 0.3) * 2;
    }
    if (orb2.current) {
      orb2.current.position.y = Math.cos(t * 0.4) * 0.5 - 0.5;
      orb2.current.position.x = Math.sin(t * 0.5) * 3;
    }
    if (orb3.current) {
      orb3.current.position.y = Math.sin(t * 0.6) * 0.8;
      orb3.current.position.z = Math.cos(t * 0.4) * 2;
    }
  });

  return (
    <>
      <mesh ref={orb1} position={[2, 1, -2]}>
        <sphereGeometry args={[0.15, 32, 32]} />
        <meshBasicMaterial color="#CBFF00" transparent opacity={0.8} />
      </mesh>
      <mesh ref={orb2} position={[-3, -0.5, -1]}>
        <sphereGeometry args={[0.1, 32, 32]} />
        <meshBasicMaterial color="#00FFFF" transparent opacity={0.6} />
      </mesh>
      <mesh ref={orb3} position={[0, 0, -3]}>
        <sphereGeometry args={[0.2, 32, 32]} />
        <meshBasicMaterial color="#CBFF00" transparent opacity={0.4} />
      </mesh>
    </>
  );
}

function QuantumRing() {
  const ringRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = state.clock.elapsedTime * 0.1;
      ringRef.current.rotation.z = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <mesh ref={ringRef} position={[0, 0, -5]}>
      <torusGeometry args={[3, 0.02, 16, 100]} />
      <meshBasicMaterial color="#CBFF00" transparent opacity={0.3} />
    </mesh>
  );
}

export function ParticleField() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.5} />
        <Particles count={2500} />
        <FloatingOrbs />
        <QuantumRing />
      </Canvas>
    </div>
  );
}
