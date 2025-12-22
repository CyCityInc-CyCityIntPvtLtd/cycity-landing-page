"use client";
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere, MeshDistortMaterial, Float } from '@react-three/drei';

const QuantumSphere = () => {
    const sphereRef = useRef();

    useFrame((state) => {
        const time = state.clock.getElapsedTime();
        sphereRef.current.rotation.x = time * 0.2;
        sphereRef.current.rotation.y = time * 0.3;
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <Sphere ref={sphereRef} args={[1, 100, 100]} scale={2}>
                <MeshDistortMaterial
                    color="#ccff33"
                    speed={2}
                    distort={0.4}
                    radius={1}
                    metalness={0.8}
                    roughness={0.2}
                />
            </Sphere>
        </Float>
    );
};

const ThreeDCanvas = ({ children, className }) => {
    return (
        <div className={className}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={2} color="#ccff33" />
                <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} />
                {children || <QuantumSphere />}
            </Canvas>
        </div>
    );
};

export default ThreeDCanvas;
