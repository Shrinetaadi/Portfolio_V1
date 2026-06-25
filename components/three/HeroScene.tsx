"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const mesh = useRef<Mesh>(null);

  useFrame((state) => {
    if (!mesh.current) return;
    mesh.current.rotation.x = state.clock.elapsedTime * 0.15;
    mesh.current.rotation.y = state.clock.elapsedTime * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1.5}>
      <mesh ref={mesh}>
        <icosahedronGeometry args={[1.8, 1]} />
        <meshStandardMaterial
          color="#00d4ff"
          wireframe
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#8b5cf6" />
      <pointLight position={[-10, -5, 5]} intensity={0.6} color="#00d4ff" />
      <Stars
        radius={80}
        depth={40}
        count={3000}
        factor={3}
        saturation={0}
        fade
        speed={0.5}
      />
      <Orb />
    </>
  );
}

export function HeroScene() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-60">
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Scene />
      </Canvas>
    </div>
  );
}
