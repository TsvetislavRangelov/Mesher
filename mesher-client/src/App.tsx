import Mesh from './components/Mesh';
import Renderer from './components/Renderer';
import { getGeometryVector } from './api/geometry/geometryGeneratorNonSampled';
import { useQuery } from '@tanstack/react-query';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


import './App.css';
import Navbar from './components/Navbar';
function App() {
  const {isPending, error, data } = useQuery({
    queryKey: ['geometry'],
    queryFn: getGeometryVector,
  })

  if(isPending) return <div>Loading...</div>

  return (
    <><Navbar />
    {data ? <Renderer mesh={<Mesh geometry={data!}></Mesh>}>
    </Renderer> : <h1>{error?.message}</h1>}
    </>

  );
}

export default App;