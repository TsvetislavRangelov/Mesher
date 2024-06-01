import Mesh from './Mesh';
import Renderer from './Renderer';
import { generateVertices, saveModelToHistory } from '../api/geometry/geometryGeneratorNonSampled';
import { useMutation, useQuery } from '@tanstack/react-query';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import { getHistoryForUser } from '../api/history/generatorHistory';
function GeneratorNonSampled() {
  const  { isAuthenticated, user } = useAuth0();
  console.log(user);
  const {isPending, data, refetch } = useQuery(
  {
    queryKey: ['geometry'],
    queryFn: generateVertices,
    enabled: false
  });

  useEffect(() => {
    refetch();
    getHistoryForUser(user?.nickname);
  }, [])

  const mutationSave = useMutation({
    mutationFn: saveModelToHistory
  });
  
  if(isPending) return <div>Loading...</div>
  if(!isAuthenticated) return <h1>401 Forbidden</h1>
  return (
    <div>
    {data && isAuthenticated && user?.nickname ? <><Renderer mesh={<Mesh geometry={data.vertexData} id={data.id}></Mesh>}>
      </Renderer><Button variant="contained" onClick={() => {

        refetch();
        mutationSave.mutate({vertexData: data.vertexData, id: data.id, generatedFor: user.nickname });
      }}>Generate</Button></> : <h1>An error has occured.</h1>}
    </div>

  );
}

export default GeneratorNonSampled;