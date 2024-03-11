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

  if(isPending) return <div>Loading...</div>
  if(error) return <div>An unexpected error occured: <br />
    <h1>{error.message}</h1>
    </div>

  return (
   <Renderer mesh={
    <Mesh geometry={data!}></Mesh>
   }>
   </Renderer>
  );
}

export default App;