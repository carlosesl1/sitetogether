"use client";

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { EffectComposer, DotScreen } from '@react-three/postprocessing';
import * as THREE from 'three';

function DitherScene() {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <group>
            <mesh ref={meshRef}>
                <torusKnotGeometry args={[2, 0.6, 128, 32]} />
                <meshStandardMaterial color="#fbbf24" metalness={0.5} roughness={0.2} />
            </mesh>
            <ambientLight intensity={1} />
            <pointLight position={[10, 10, 10]} intensity={200} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={100} color="#fbbf24" />
        </group>
    );
}

export function Dither({ className = "" }: { className?: string }) {
    return (
        <div className={`absolute inset-0 z-0 bg-white ${className}`}>
            <Canvas camera={{ position: [0, 0, 8], fov: 45 }}>
                <color attach="background" args={['#ffffff']} />
                <DitherScene />
                <EffectComposer>
                    <DotScreen
                        angle={Math.PI / 4}
                        scale={0.5}
                    />
                </EffectComposer>
            </Canvas>
        </div>
    );
}
