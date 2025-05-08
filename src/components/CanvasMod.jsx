import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment, Stats } from '@react-three/drei'

export default function CanvasMod({ children, ...props }) {
    return (
        <Canvas {...props} shadows>
            {children}
            <Environment preset="night" background />
            <OrbitControls/>
            <Stats/>
        </Canvas>
    )
}