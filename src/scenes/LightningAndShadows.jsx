import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stage } from '@react-three/drei'

function ShadowCastingBox() {
  return (
    <mesh castShadow position={[0, 1, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  )
}

function ShadowReceivingPlane() {
  return (
    <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
      <planeGeometry args={[10, 10]} />
      <shadowMaterial opacity={0.3} />
    </mesh>
  )
}

export default function Scene_LightingAndShadows() {
  return (
    <Canvas
      shadows
      camera={{ position: [4, 4, 6], fov: 60 }}
    >
      <ambientLight castShadow intensity={3} />
      <directionalLight
        castShadow
        position={[5, 10, 5]}
        intensity={1.2}
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
        shadow-bias={-0.0005}
        shadow-camera-left={-10}
        shadow-camera-right={10}
        shadow-camera-top={10}
        shadow-camera-bottom={-10}
        shadow-camera-far={50}
      />
      <ShadowCastingBox />
      <ShadowReceivingPlane />
      <OrbitControls />
    </Canvas>
  )
}
