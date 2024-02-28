import { Canvas } from "@react-three/fiber"
import Mesh from "./Mesh";
import { OrbitControls, Stats } from "@react-three/drei";


const Renderer = () => {
    const generateRandomGeometry = (thresholdLower: number, thresholdUpper: number): number[] => {
        const lowerCeiled = Math.ceil(thresholdLower);
        const upperCeiled = Math.ceil(thresholdUpper);
        let geometry: Array<number> = new Array<number>(3);
        for(let i: number = 0; i < 3; i++){
            geometry[i] = Math.floor(Math.random() * (upperCeiled - lowerCeiled) + lowerCeiled);
        }
        return geometry;
        
    }
    const randomGeometry = generateRandomGeometry(1, 5);
    const randomOrientation = generateRandomGeometry(0, 300);

    return <div className="canvas-container">
    <Canvas>
        <color attach="background" args={["black"]}></color>
      <ambientLight color="white" intensity={0.1} />
      <directionalLight position={[0, 0, 5]} />
      <Mesh geometryX={randomGeometry[0]} 
      geometryY={randomGeometry[1]} 
      geometryZ={randomGeometry[2]}
      rotationX={randomOrientation[0]}
      rotationY={randomOrientation[1]}
      rotationZ={randomOrientation[2]}></Mesh>
      <OrbitControls></OrbitControls>
      <Stats></Stats>
    </Canvas>
  </div>
}

export default Renderer;