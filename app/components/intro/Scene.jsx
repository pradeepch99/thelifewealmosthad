"use client";

import { Canvas } from "@react-three/fiber";
import { Environment } from "@react-three/drei";

import { EffectComposer, Bloom } from "@react-three/postprocessing";

import FloatingTexts from "./FloatingTexts";

export default function Scene({ phase }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 7], fov: 55 }}
      gl={{ antialias: true }}
    >
      {/* Background */}
      <color attach="background" args={["#020204"]} />

      {/* Fog atmosphere */}
      <fog attach="fog" args={["#020204", 6, 18]} />

      {/* Lights */}
      <ambientLight intensity={0.3} />

      <directionalLight
        position={[3, 5, 2]}
        intensity={2}
        color="#ff6ea9"
      />

      <Environment preset="night" />

      {/* Birthday intro text */}
      {phase === "birthdayRain" && (
        <FloatingTexts />
      )}

      {/* Bloom */}
      <EffectComposer>
        <Bloom
          luminanceThreshold={0.2}
          luminanceSmoothing={0.9}
          intensity={1.4}
        />
      </EffectComposer>
    </Canvas>
  );
}