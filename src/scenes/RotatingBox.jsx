import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useRef } from 'react'

function RotatingBox() {
  const boxRef = useRef()
  useFrame(() => {
    boxRef.current.rotation.y += 0.01
    boxRef.current.rotation.x += 0.01
  })
  return (
    <mesh ref={boxRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="tomato" />
    </mesh>
  )
}

export default function Scene_RotatingBox() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight />
      <directionalLight castShadow position={[-10, 10, 0]} intensity={2} color="white" />
      <RotatingBox />
      <OrbitControls />
    </Canvas>
  )
}
