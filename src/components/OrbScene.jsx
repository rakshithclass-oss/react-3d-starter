import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, OrbitControls, Sparkles } from '@react-three/drei';

function Orb({ paused }) {
  const group = useRef(null);

  useFrame((state, delta) => {
    if (!group.current || paused) return;
    group.current.rotation.y += delta * 0.13;
    group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.28) * 0.12 + state.pointer.y * 0.08;
    group.current.rotation.z = state.pointer.x * 0.08;
  });

  return (
    <group ref={group}>
      <Float speed={paused ? 0 : 1.15} rotationIntensity={paused ? 0 : 0.28} floatIntensity={paused ? 0 : 0.35}>
        <mesh castShadow>
          <icosahedronGeometry args={[1.08, 5]} />
          <MeshDistortMaterial
            color="#9d88ff"
            roughness={0.16}
            metalness={0.62}
            clearcoat={1}
            clearcoatRoughness={0.12}
            distort={0.34}
            speed={1.65}
          />
        </mesh>
      </Float>

      <mesh rotation={[1.12, 0.2, -0.32]}>
        <torusGeometry args={[1.48, 0.012, 16, 180]} />
        <meshStandardMaterial color="#c6bbff" metalness={0.85} roughness={0.24} />
      </mesh>
      <mesh rotation={[0.45, 1.2, 0.75]}>
        <torusGeometry args={[1.63, 0.008, 12, 180]} />
        <meshStandardMaterial color="#6de8df" metalness={0.8} roughness={0.3} />
      </mesh>

      <mesh position={[1.38, 0.38, 0.2]}>
        <sphereGeometry args={[0.075, 24, 24]} />
        <meshStandardMaterial color="#f5c987" emissive="#b77937" emissiveIntensity={0.35} />
      </mesh>
      <mesh position={[-1.3, -0.52, 0.15]}>
        <sphereGeometry args={[0.045, 20, 20]} />
        <meshStandardMaterial color="#7dece3" emissive="#287e79" emissiveIntensity={0.4} />
      </mesh>
    </group>
  );
}

export default function OrbScene({ paused }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5.2], fov: 42 }}
      dpr={[1, 1.6]}
      gl={{ antialias: true, alpha: true }}
      fallback={<div className="scene-fallback">Your browser does not support WebGL.</div>}
    >
      <ambientLight intensity={1.05} />
      <directionalLight position={[3, 4, 4]} intensity={2.1} color="#ffffff" />
      <pointLight position={[-3, -1, 2]} intensity={2.8} color="#7661ff" />
      <pointLight position={[2, 2, -2]} intensity={2.2} color="#48d9d0" />
      <Orb paused={paused} />
      <Sparkles count={85} scale={4.5} size={2.2} speed={0.35} color="#d5ceff" />
      <OrbitControls enablePan={false} enableZoom={false} rotateSpeed={0.55} autoRotate={!paused} autoRotateSpeed={0.45} />
    </Canvas>
  );
}
