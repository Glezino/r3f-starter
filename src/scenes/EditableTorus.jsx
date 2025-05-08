import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import { useRef, useEffect } from 'react'

function EditableSphere() {
    const materialRef = useRef()

    useEffect(() => {
        if (materialRef.current) {
            materialRef.current.color.set('white')
            materialRef.current.metalness = 1
            materialRef.current.roughness = 0
            materialRef.current.opacity = 1
            materialRef.current.transparent = true
            materialRef.current.wireframe = false
            // materialRef.current.emissive.set('red')
        }
    }, [])

    return (
        <mesh position={[0, 1, 0]}>
            <torusKnotGeometry args={[0.6, 0.2, 128, 32]} />
            <meshStandardMaterial
                ref={materialRef}
                color="white"
            />
        </mesh>
    )
}

export default function Scene_EditableTorus() {
    return (
        <Canvas camera={{ position: [0, 1, 5], fov: 60 }}>
            <ambientLight intensity={0.3} />
            <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
            <Environment
                background={true}
                preset="sunset"
                blur={0.4}
                ground={{ height: 5, radius: 60, scale: 100 }}
            />
            <EditableSphere />
            <OrbitControls />
        </Canvas>
    )
}