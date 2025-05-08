import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'

export default function Scene_Environment() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} intensity={2} />

      <Environment
        background={true}
        blur={0}
        preset="sunset"
        files={null}
        path=""
        near={1}
        far={1000}
        resolution={256}
         ground={{
           height: 5,
           radius: 60,
           scale: 100,
         }}
      />

      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          metalness={0.7}
          roughness={0.2}
          color="orange"
        />
      </mesh>

      <OrbitControls />
    </Canvas>
  )
}
