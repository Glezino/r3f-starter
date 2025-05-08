import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { useState } from 'react'

function ClickableBox() {
  const [active, setActive] = useState(false)
  return (
    <mesh
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      position={[0, 1, 0]}
    >
      <sphereGeometry args={[1, 64, 64]} />
      <meshStandardMaterial color={active ? 'hotpink' : 'steelblue'} />
    </mesh>
  )
}

export default function Scene_ClickableSphere() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ambientLight />
      <directionalLight position={[5, 5, 5]} intensity={1.5} />
      <ClickableBox />
      <OrbitControls />
    </Canvas>
  )
}