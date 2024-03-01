import './App.css';
import Mesh from './components/Mesh';
import Renderer from './components/Renderer';

function App() {
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


  return (
   <Renderer mesh={
    <Mesh geometryX={randomGeometry[0]} 
    geometryY={randomGeometry[1]} 
    geometryZ={randomGeometry[2]}
    rotationX={randomOrientation[0]}
    rotationY={randomOrientation[1]}
    rotationZ={randomOrientation[2]}></Mesh>
   }>

   </Renderer>
  );
}

export default App;