"use client";

import React, { useRef, useMemo, Suspense } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import { Float, PerspectiveCamera, Environment, Points, PointMaterial } from "@react-three/drei";

const ambientParticlePositions = new Float32Array(
    Array.from({ length: 300 }, (_, index) => {
        const seed = Math.sin(index * 12.9898) * 43758.5453;
        return (seed - Math.floor(seed) - 0.5) * 20;
    }),
);

function DataGlobe() {
    const pointsRef = useRef<THREE.Points>(null!);
    const count = 4000; // Increased density

    const positions = useMemo(() => {
        const pos = new Float32Array(count * 3);
        const radius = 4.2;
        for (let i = 0; i < count; i++) {
            const phi = Math.acos(-1 + (2 * i) / count);
            const theta = Math.sqrt(count * Math.PI) * phi;
            pos[i * 3] = Math.cos(theta) * Math.sin(phi) * radius;
            pos[i * 3 + 1] = Math.sin(theta) * Math.sin(phi) * radius;
            pos[i * 3 + 2] = Math.cos(phi) * radius;
        }
        return pos;
    }, [count]);

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        pointsRef.current.rotation.y = t * 0.08;
        pointsRef.current.rotation.x = Math.sin(t * 0.05) * 0.1;
    });

    return (
        <group>
            {/* Main Glowing Points */}
            <Points ref={pointsRef} positions={positions} stride={3}>
                <PointMaterial
                    transparent
                    color="#fbbf24"
                    size={0.08}
                    sizeAttenuation={true}
                    depthWrite={false}
                    blending={THREE.AdditiveBlending}
                    opacity={0.8}
                />
            </Points>

            {/* Inner Core Glow */}
            <mesh>
                <sphereGeometry args={[4, 32, 32]} />
                <meshBasicMaterial
                    color="#fbbf24"
                    transparent
                    opacity={0.15}
                    blending={THREE.AdditiveBlending}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* Center Intense Pulse */}
            <Float speed={2} rotationIntensity={0} floatIntensity={0.5}>
                <mesh>
                    <sphereGeometry args={[2, 32, 32]} />
                    <meshBasicMaterial
                        color="#fbbf24"
                        transparent
                        opacity={0.05}
                        blending={THREE.AdditiveBlending}
                    />
                </mesh>
            </Float>
        </group>
    );
}

function Grid() {
    return (
        <gridHelper
            args={[40, 40, "#e5e5e5", "#f5f5f5"]}
            position={[0, -5, 0]}
            rotation={[0, 0, 0]}
        />
    );
}

function Scene() {
    const { viewport } = useThree();
    const isMobile = viewport.width < 10;
    const globeX = isMobile ? 0 : viewport.width / 4;

    return (
        <>
            <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />

            {/* Lights */}
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#fbbf24" />

            <Float speed={1.5} rotationIntensity={0.5} floatIntensity={0.5}>
                <group position={[globeX, 0, -2]}>
                    <DataGlobe />
                </group>
            </Float>

            {/* Ambient Technical Particles */}
            <Points positions={ambientParticlePositions}>
                <PointMaterial transparent color="#d1d5db" size={0.02} sizeAttenuation opacity={0.3} />
            </Points>
        </>
    );
}

export function ThreeBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            {/* Static Fallback Grid */}
            <div className="absolute inset-0 opacity-[0.03] z-0"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }}
            />

            <div className="absolute inset-0 z-10 opacity-100">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 50 }}>
                    <Suspense fallback={null}>
                        <Scene />
                        <Environment preset="city" />
                    </Suspense>
                </Canvas>
            </div>
        </div>
    );
}
