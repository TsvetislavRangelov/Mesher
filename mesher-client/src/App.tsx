import './App.css';
import Mesh from './components/Mesh';
import Renderer from './components/Renderer';
import { getGeometryVector } from './api/geometry/geometryGeneratorNonSampled';
import { useQuery } from '@tanstack/react-query';

function App() {
  const {isPending, error, data } = useQuery({
    queryKey: ['geometry'],
    queryFn: getGeometryVector,
  })
  const generateRandomOrientation = (thresholdLower: number, thresholdUpper: number): number[] => {
    const lowerCeiled = Math.ceil(thresholdLower);
    const upperCeiled = Math.ceil(thresholdUpper);
    let orientation: Array<number> = new Array<number>(3);
    for(let i: number = 0; i < 3; i++){
        orientation[i] = Math.floor(Math.random() * (upperCeiled - lowerCeiled) + lowerCeiled);
    }
    return orientation;
    
}
const randomOrientation: number[] = generateRandomOrientation(1, 6);

  if(isPending) return <div>Loading...</div>
  if(error) return <div>An unexpected error occured: <br />
    <h1>{error.message}</h1>
    </div>

  return (
   <Renderer mesh={
    <Mesh geometryX={data[0]} 
    geometryY={data[1]} 
    geometryZ={data[2]}
    rotationX={randomOrientation[0]}
    rotationY={randomOrientation[1]}
    rotationZ={randomOrientation[2]}></Mesh>
   }>
   </Renderer>
  );
}

export default App;