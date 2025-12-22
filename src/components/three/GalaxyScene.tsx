import { useRef, useMemo, useCallback } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import * as THREE from 'three';

// Performance optimization: Use instanced rendering for better performance
const GALAXY_PARTICLES = 8000;
const STAR_PARTICLES = 2000;
const DUST_PARTICLES = 3000;

// Galaxy spiral arm generation
function generateGalaxyPositions(count: number) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  
  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    
    // Create spiral galaxy arms
    const radius = Math.random() * 8;
    const spinAngle = radius * 0.3;
    const branchAngle = ((i % 4) / 4) * Math.PI * 2;
    
    const angle = branchAngle + spinAngle;
    
    // Add randomness for natural look
    const randomX = (Math.random() - 0.5) * 0.5 * radius;
    const randomY = (Math.random() - 0.5) * 0.3 * radius;
    const randomZ = (Math.random() - 0.5) * 0.5 * radius;
    
    positions[i3] = Math.cos(angle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(angle) * radius + randomZ;
    
    // Color based on distance from center
    const colorIntensity = 1 - radius / 8;
    colors[i3] = 0.8 + colorIntensity * 0.2; // R
    colors[i3 + 1] = 1; // G (lime)
    colors[i3 + 2] = colorIntensity * 0.3; // B
  }
  
  return { positions, colors };
}

function GalaxyParticles({ count = GALAXY_PARTICLES }) {
  const ref = useRef<THREE.Points>(null);
  const { mouse } = useThree();
  const prefersReducedMotion = useReducedMotion();
  
  const { positions, colors } = useMemo(() => generateGalaxyPositions(count), [count]);
  
  useFrame((state) => {
    if (ref.current && !prefersReducedMotion) {
      // Slow galaxy rotation
      ref.current.rotation.y = state.clock.elapsedTime * 0.01;
      
      // Mouse parallax effect
      ref.current.rotation.x = mouse.y * 0.05;
      ref.current.rotation.z = mouse.x * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        vertexColors
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.8}
        blending={THREE.AdditiveBlending}
      />
      <bufferAttribute
        attach="geometry-attributes-color"
        array={colors}
        count={colors.length / 3}
        itemSize={3}
      />
    </Points>
  );
}

function StarField({ count = STAR_PARTICLES }) {
  const ref = useRef<THREE.Points>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current && !prefersReducedMotion) {
      // Subtle twinkling effect
      const time = state.clock.elapsedTime;
      const material = ref.current.material as THREE.PointsMaterial;
      material.opacity = 0.3 + Math.sin(time * 0.5) * 0.1;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.005}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function CosmicDust({ count = DUST_PARTICLES }) {
  const ref = useRef<THREE.Points>(null);
  const prefersReducedMotion = useReducedMotion();
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 15 + 5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.random() * Math.PI;
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = (Math.random() - 0.5) * 2;
      positions[i * 3 + 2] = radius * Math.sin(phi) * Math.sin(theta);
    }
    return positions;
  }, [count]);

  useFrame((state) => {
    if (ref.current && !prefersReducedMotion) {
      ref.current.rotation.y = state.clock.elapsedTime * 0.005;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#00FFFF"
        size={0.008}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  );
}

function NebulaCloud() {
  const ref = useRef<THREE.Mesh>(null);
  const prefersReducedMotion = useReducedMotion();
  
  useFrame((state) => {
    if (ref.current && !prefersReducedMotion) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.002;
      ref.current.rotation.y = state.clock.elapsedTime * 0.003;
      ref.current.rotation.z = state.clock.elapsedTime * 0.001;
    }
  });

  return (
    <mesh ref={ref} position={[0, 0, -10]}>
      <sphereGeometry args={[12, 32, 32]} />
      <meshBasicMaterial
        color="#CBFF00"
        transparent
        opacity={0.05}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function CameraController() {
  const { camera } = useThree();
  const prefersReducedMotion = useReducedMotion();
  
  useFrame((state) => {
    if (!prefersReducedMotion) {
      // Subtle camera orbital movement
      const time = state.clock.elapsedTime * 0.1;
      camera.position.x = Math.sin(time) * 0.5;
      camera.position.y = Math.cos(time * 0.7) * 0.3;
      camera.lookAt(0, 0, 0);
    }
  });
  
  return null;
}

export function GalaxyScene() {
  const prefersReducedMotion = useReducedMotion();
  
  // Reduce particle count for reduced motion preference or lower-end devices
  const particleMultiplier = prefersReducedMotion ? 0.5 : 1;
  
  return (
    <div className="absolute inset-0 z-0">
      <Canvas
        camera={{ position: [0, 2, 8], fov: 60 }}
        style={{ background: 'transparent' }}
        gl={{ 
          antialias: false, // Optimize for performance
          powerPreference: "high-performance"
        }}
      >
        {!prefersReducedMotion && <CameraController />}
        <StarField count={Math.floor(STAR_PARTICLES * particleMultiplier)} />
        <GalaxyParticles count={Math.floor(GALAXY_PARTICLES * particleMultiplier)} />
        <CosmicDust count={Math.floor(DUST_PARTICLES * particleMultiplier)} />
        <NebulaCloud />
      </Canvas>
    </div>
  );
}