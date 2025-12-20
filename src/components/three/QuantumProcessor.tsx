import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ProcessorCore() {
  const coreRef = useRef<THREE.Mesh>(null);
  const ringsRef = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    const t = state.clock.elapsedTime;
    if (coreRef.current) {
      coreRef.current.rotation.y = t * 0.3;
      coreRef.current.rotation.x = Math.sin(t * 0.2) * 0.1;
    }
    if (ringsRef.current) {
      ringsRef.current.rotation.z = t * 0.1;
    }
  });

  return (
    <group>
      {/* Central Core */}
      <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
        <mesh ref={coreRef}>
          <icosahedronGeometry args={[1.2, 2]} />
          <MeshDistortMaterial
            color="#CBFF00"
            emissive="#CBFF00"
            emissiveIntensity={0.5}
            roughness={0.2}
            metalness={0.8}
            distort={0.3}
            speed={2}
          />
        </mesh>
      </Float>

      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshBasicMaterial color="#CBFF00" transparent opacity={0.3} />
      </mesh>

      {/* Rotating Rings */}
      <group ref={ringsRef}>
        <Ring radius={2} color="#CBFF00" rotationSpeed={0.5} />
        <Ring radius={2.5} color="#00FFFF" rotationSpeed={-0.3} rotationOffset={Math.PI / 4} />
        <Ring radius={3} color="#CBFF00" rotationSpeed={0.2} rotationOffset={Math.PI / 2} />
      </group>

      {/* Orbiting Nodes */}
      <OrbitingNodes />

      {/* Data Streams */}
      <DataStreams />
    </group>
  );
}

function Ring({ radius, color, rotationSpeed, rotationOffset = 0 }: { radius: number; color: string; rotationSpeed: number; rotationOffset?: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.x = Math.PI / 2 + rotationOffset;
      ringRef.current.rotation.z = state.clock.elapsedTime * rotationSpeed;
    }
  });

  return (
    <mesh ref={ringRef}>
      <torusGeometry args={[radius, 0.02, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

function OrbitingNodes() {
  const groupRef = useRef<THREE.Group>(null);
  const nodePositions = useMemo(() => {
    const positions: { angle: number; radius: number; speed: number; size: number; color: string }[] = [];
    for (let i = 0; i < 12; i++) {
      positions.push({
        angle: (i / 12) * Math.PI * 2,
        radius: 2 + Math.random() * 1.5,
        speed: 0.2 + Math.random() * 0.3,
        size: 0.05 + Math.random() * 0.08,
        color: i % 2 === 0 ? '#CBFF00' : '#00FFFF',
      });
    }
    return positions;
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        const pos = nodePositions[i];
        const t = state.clock.elapsedTime * pos.speed + pos.angle;
        child.position.x = Math.cos(t) * pos.radius;
        child.position.y = Math.sin(t * 1.5) * 0.5;
        child.position.z = Math.sin(t) * pos.radius;
      });
    }
  });

  return (
    <group ref={groupRef}>
      {nodePositions.map((pos, i) => (
        <mesh key={i}>
          <sphereGeometry args={[pos.size, 16, 16]} />
          <meshBasicMaterial color={pos.color} transparent opacity={0.9} />
        </mesh>
      ))}
    </group>
  );
}

function DataStreams() {
  const streamsRef = useRef<THREE.Group>(null);

  const streamData = useMemo(() => {
    const streams: { points: THREE.Vector3[]; color: string }[] = [];
    for (let i = 0; i < 6; i++) {
      const angle = (i / 6) * Math.PI * 2;
      const points = [];
      for (let j = 0; j < 20; j++) {
        const t = j / 20;
        const r = 1.5 + t * 2;
        points.push(
          new THREE.Vector3(
            Math.cos(angle + t * Math.PI) * r,
            (t - 0.5) * 3,
            Math.sin(angle + t * Math.PI) * r
          )
        );
      }
      streams.push({ points, color: i % 2 === 0 ? '#CBFF00' : '#00FFFF' });
    }
    return streams;
  }, []);

  useFrame((state) => {
    if (streamsRef.current) {
      streamsRef.current.rotation.y = state.clock.elapsedTime * 0.1;
    }
  });

  return (
    <group ref={streamsRef}>
      {streamData.map((stream, i) => {
        const curve = new THREE.CatmullRomCurve3(stream.points);
        return (
          <mesh key={i}>
            <tubeGeometry args={[curve, 64, 0.01, 8, false]} />
            <meshBasicMaterial color={stream.color} transparent opacity={0.4} />
          </mesh>
        );
      })}
    </group>
  );
}

function ParticleCloud() {
  const particlesRef = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(500 * 3);
    for (let i = 0; i < 500; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 4 + Math.random() * 2;
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y = state.clock.elapsedTime * 0.02;
      particlesRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.1) * 0.1;
    }
  });

  return (
    <points ref={particlesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={500}
          array={positions}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        color="#CBFF00"
        size={0.03}
        transparent
        opacity={0.4}
        sizeAttenuation
      />
    </points>
  );
}

export function QuantumProcessor() {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 50 }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.2} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#CBFF00" />
        <pointLight position={[-5, -5, -5]} intensity={0.5} color="#00FFFF" />
        <ProcessorCore />
        <ParticleCloud />
      </Canvas>
    </div>
  );
}
