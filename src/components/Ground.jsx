import { useMemo } from 'react'
import * as THREE from 'three'

export default function Ground({ size = 20, color = '#999' }) {
  const planeGeometry = useMemo(() => new THREE.PlaneGeometry(size, size), [size])

  return (
    <mesh
      rotation={[-Math.PI / 2, 0, 0]}
      receiveShadow
      geometry={planeGeometry}
    >
      <meshStandardMaterial color={color} />
    </mesh>
  )
}