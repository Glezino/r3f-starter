import { Canvas } from '@react-three/fiber'
import { Box, OrbitControls } from '@react-three/drei'

export default function Scene2() {
  return (
    <>
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ width: '100vw', height: '100vh' }}>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box args={[1, 1, 1]} position={[0, 0, -5]}/>
    <OrbitControls />
  </Canvas>
  </>
  )
}
