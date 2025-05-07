import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'

function ClickableBox() {
  const [active, setActive] = useState(false)
  return (
    <mesh
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
    >
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={active ? 'hotpink' : 'steelblue'} />
    </mesh>
  )
}

export default function Scene_ClickableBox() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }} style={{ width: '100vw', height: '100vh' }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <ClickableBox />
      <OrbitControls />
    </Canvas>
  )
}
