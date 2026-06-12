"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, ContactShadows } from "@react-three/drei";
import { useRef, useMemo, useState, useEffect } from "react";
import * as THREE from "three";

function Cube({ position, scale, rotationOffset, mouseRef, index }: any) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (!meshRef.current) return;
        const t = state.clock.getElapsedTime();

        // Base rotation
        meshRef.current.rotation.x = Math.sin(t / 4 + rotationOffset) * 0.5;
        meshRef.current.rotation.y = Math.cos(t / 3 + rotationOffset) * 0.5;

        // Parallax effect based on mouse
        const targetX = (mouseRef.current.x * window.innerWidth * 0.001) * (index % 3 + 1);
        const targetY = -(mouseRef.current.y * window.innerHeight * 0.001) * (index % 3 + 1);

        meshRef.current.position.x = THREE.MathUtils.lerp(meshRef.current.position.x, position[0] + targetX, 0.05);
        meshRef.current.position.y = THREE.MathUtils.lerp(meshRef.current.position.y, position[1] + targetY, 0.05);
    });

    return (
        <Float floatIntensity={2} rotationIntensity={1.5} speed={2}>
            <mesh ref={meshRef} position={position} scale={scale} castShadow receiveShadow>
                <boxGeometry args={[1, 1, 1]} />
                <meshPhysicalMaterial
                    color="#ffffff"
                    roughness={0.1}
                    transmission={0.9}
                    thickness={0.5}
                    envMapIntensity={2}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    ior={1.5}
                />
                {/* Colorful inner core to give the amber reflection */}
                <mesh scale={0.6}>
                    <boxGeometry args={[1, 1, 1]} />
                    <meshBasicMaterial color="#fbbf24" opacity={0.15} transparent />
                </mesh>
            </mesh>
        </Float>
    );
}

function Scene({ mouseRef }: { mouseRef: React.MutableRefObject<{ x: number, y: number }> }) {
    const cubes = useMemo(() => {
        return Array.from({ length: 15 }).map((_, i) => ({
            position: [
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10 - 5
            ],
            scale: Math.random() * 1.5 + 0.5,
            rotationOffset: Math.random() * Math.PI * 2,
        }));
    }, []);

    return (
        <>
            <ambientLight intensity={1.5} />
            <directionalLight position={[10, 10, 10]} intensity={2} color="#ffffff" castShadow />
            <directionalLight position={[-10, -10, -10]} intensity={1} color="#fbbf24" />
            <pointLight position={[0, 0, 0]} intensity={2} color="#f59e0b" distance={10} />

            {cubes.map((cube, i) => (
                <Cube key={i} index={i} {...cube} mouseRef={mouseRef} />
            ))}

            <ContactShadows position={[0, -8, 0]} opacity={0.4} scale={40} blur={2} far={10} color="#fbbf24" />
            <Environment preset="city" />
        </>
    );
}

export function FloatingCubes() {
    const mouseRef = useRef({ x: 0, y: 0 });
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: -(e.clientY / window.innerHeight) * 2 + 1
            };
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    if (!mounted) return <div className="absolute inset-0 bg-neutral-50" />;

    return (
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-neutral-50 to-white overflow-hidden pointer-events-none">
            <Canvas
                camera={{ position: [0, 0, 15], fov: 45 }}
                dpr={[1, 2]} // Support high dpi for crisp 3D
                gl={{ antialias: true, alpha: true }}
            >
                <Scene mouseRef={mouseRef} />
            </Canvas>
        </div>
    );
}
