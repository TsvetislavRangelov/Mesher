import Mesh from './Mesh';
import Renderer from './Renderer';
import { getGeometryVector } from '../api/geometry/geometryGeneratorNonSampled';
import { useQuery } from '@tanstack/react-query';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useAuth0 } from '@auth0/auth0-react';
function GeneratorNonSampled() {
  const  { user, isAuthenticated } = useAuth0();
  console.log(user);
  console.log(isAuthenticated);
  const {isPending, error, data } = useQuery({
    queryKey: ['geometry'],
    queryFn: getGeometryVector,
  })
  
  if(isPending) return <div>Loading...</div>
  if(!isAuthenticated) return <h1>401 Forbidden</h1>
  return (
    <div>
    {data && isAuthenticated ? <Renderer mesh={<Mesh geometry={data.vertexData} id={data.id}></Mesh>}>
    </Renderer> : <h1>A network error occured.</h1>}
    {user?.name}
    </div>

  );
}

export default GeneratorNonSampled;