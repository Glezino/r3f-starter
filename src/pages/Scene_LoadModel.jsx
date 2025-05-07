import { Canvas } from '@react-three/fiber'
import { OrbitControls, useGLTF } from '@react-three/drei'

function LoadedModel() {
  const { scene } = useGLTF('/src/assets/RobotExpressive.glb')
  return <primitive object={scene} scale={1.5} />
}

export default function Scene_LoadModel() {
  return (
    <Canvas camera={{ position: [0, 1, 5], fov: 60 }} style={{ width: '100vw', height: '100vh' }}>
      <ambientLight />
      <directionalLight position={[10, 10, 5]} intensity={2} />
      <LoadedModel />
      <OrbitControls />
    </Canvas>
  )
}
