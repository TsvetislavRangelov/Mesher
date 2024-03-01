import './App.css';
import Mesh from './components/Mesh';
import Renderer from './components/Renderer';
import { useState, useEffect } from 'react';
import { getGeometryVector } from './api/geometry/geometryGeneratorNonSampled';

function App() {
  const [geometry, setGeometry] = useState<number[]>([]);
    useEffect(() => {
      getGeometryVector().then((res) => {
        setGeometry(res);
      });
    }, [])
  const generateRandomOrientation = (thresholdLower: number, thresholdUpper: number): number[] => {
    const lowerCeiled = Math.ceil(thresholdLower);
    const upperCeiled = Math.ceil(thresholdUpper);
    let geometry: Array<number> = new Array<number>(3);
    for(let i: number = 0; i < 3; i++){
        geometry[i] = Math.floor(Math.random() * (upperCeiled - lowerCeiled) + lowerCeiled);
    }
    return geometry;
    
}
const randomOrientation: number[] = generateRandomOrientation(1, 6);


  return (
   <Renderer mesh={
    <Mesh geometryX={geometry[0]} 
    geometryY={geometry[1]} 
    geometryZ={geometry[2]}
    rotationX={randomOrientation[0]}
    rotationY={randomOrientation[1]}
    rotationZ={randomOrientation[2]}></Mesh>
   }>
   </Renderer>
  );
}

export default App;