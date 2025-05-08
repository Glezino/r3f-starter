export default function LightingRig() {
    return (
        <>
            <ambientLight intensity={0.3} />
            <spotLight shadow-bias={-0.01} castShadow distance={20} decay={1} position={[2, 3, -2]} angle={Math.PI / 4} penumbra={0.1} intensity={10} color={"yellow"} />
            <directionalLight
                castShadow
                position={[-5, 10, 5]}
                intensity={1.2}
                shadow-mapSize-width={2048}
                shadow-mapSize-height={2048}
                shadow-bias={-0.005}
                shadow-camera-left={-10}
                shadow-camera-right={10}
                shadow-camera-top={10}
                shadow-camera-bottom={-10}
                shadow-camera-far={50}
            />
        </>
    )
}  