import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stats } from "@react-three/drei";

type Props = {
  mesh: React.ReactNode;
}

const Renderer = (props: Props) => {
    return <div className="canvas-container">
    <Canvas>
        <color attach="background" args={["black"]}></color>
      <ambientLight color="white" intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      {props.mesh}
      <OrbitControls></OrbitControls>
      <Stats></Stats>
    </Canvas>
  </div>
}

export default Renderer;