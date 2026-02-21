import React, { useRef, useMemo, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../../context/ThemeContext';
import * as THREE from 'three';

const generateParticles = (count) => {
    const temp = [];
    for (let i = 0; i < count; i++) {
        const x = (Math.random() - 0.5) * 60; // Spread horizontally
        const y = (Math.random() - 0.5) * 60; // Spread vertically
        const z = (Math.random() - 0.5) * 30 - 5; // Spread deep into the background
        const rx = Math.random() * Math.PI;
        const ry = Math.random() * Math.PI;
        const rz = Math.random() * Math.PI;
        const scale = Math.random() * 0.3 + 0.1;
        const speed = Math.random() * 0.2 + 0.05;
        temp.push({ x, y, z, rx, ry, rz, scale, speed, initialY: y });
    }
    return temp;
};

const FloatingTechNodes = ({ theme }) => {
    const isDark = theme === 'dark';
    const meshRef = useRef();

    const particleCount = 150;
    const dummy = useMemo(() => new THREE.Object3D(), []);

    // Generate initial random particle data using useState to keep component pure
    const [particles] = useState(() => generateParticles(particleCount));

    useFrame((state) => {
        if (!meshRef.current) return;

        particles.forEach((particle, i) => {
            const time = state.clock.getElapsedTime();

            // Slowly float upward and sway slightly
            particle.y = particle.initialY + (time * particle.speed * 3) % 60;
            if (particle.y > 30) particle.y -= 60; // Seamless loop

            particle.rx += 0.002;
            particle.ry += 0.003;

            // Slight mouse parallax
            const mouseOffsetX = state.pointer.x * 2;
            const mouseOffsetY = state.pointer.y * 2;

            dummy.position.set(particle.x + mouseOffsetX, particle.y + mouseOffsetY, particle.z);
            dummy.rotation.set(particle.rx, particle.ry, particle.rz);
            dummy.scale.set(particle.scale, particle.scale, particle.scale);
            dummy.updateMatrix();

            meshRef.current.setMatrixAt(i, dummy.matrix);
        });
        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh ref={meshRef} args={[null, null, particleCount]}>
            {/* Techy wireframe shape */}
            <octahedronGeometry args={[0.5, 0]} />
            <meshBasicMaterial
                color={isDark ? '#00f3ff' : '#2563eb'}
                wireframe={true}
                transparent={true}
                opacity={isDark ? 0.3 : 0.15}
            />
        </instancedMesh>
    );
};

const CyberGlobe = () => {
    const { theme } = useTheme();
    const isDark = theme === 'dark';

    return (
        <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
            <Canvas camera={{ position: [0, 0, 15], fov: 75 }} style={{ pointerEvents: 'none' }} dpr={[1, 1.5]}>
                <fog attach="fog" args={[isDark ? '#020617' : '#f8fafc', 5, 30]} />
                <FloatingTechNodes theme={theme} />
            </Canvas>
        </div>
    );
};

export default CyberGlobe;
