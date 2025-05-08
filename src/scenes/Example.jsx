import LightingRig from "../components/LightningRig";
import CanvasMod from "../components/CanvasMod";
import ModelLoader from "../components/ModelLoader";

export default function Scene_Example() {
  return (
      <CanvasMod camera={{ position: [4, 2.5, 5], fov: 50 }}>
        <LightingRig/>
        <ModelLoader animationName={"Dance"} url={"/models/RobotExpressive.glb"} scale={0.3} rotation={[0, Math.PI / 4, 0]}/>
        <ModelLoader url={"/models/urban_enviroment.glb"} scale={10} position={[0,0,-5.5]} />
      </CanvasMod>
  )
}
