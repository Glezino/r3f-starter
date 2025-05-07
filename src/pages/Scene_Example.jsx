import { Canvas } from "@react-three/fiber";
import { Box, Environment, OrbitControls } from "@react-three/drei";
import RobotModel from "../components/RobotModel";

export default function Scene_Example() {
  return (
    <>
      <Canvas
        shadows
        camera={{ position: [0, 0, 5], fov: 60 }}
        style={{ width: "100vw", height: "100vh" }}
      >
         <OrbitControls />
        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, -5]} receiveShadow>
          <planeGeometry args={[10, 10]} />
          <meshStandardMaterial color="#999" />
        </mesh>
         {/* <Box args={[1, 1, 1]} position={[0, 0, -5]} /> */}
        <RobotModel scale={0.5} position={[0, 0, -5]} />
        <ambientLight />
        <directionalLight castShadow position={[-10, 10, 0]} intensity={2} color="white" />
        <Environment
          files={["src/assets/golden_gate_hills_4k.hdr"]}
          background={true}
        />
      </Canvas>
    </>
  );
}
