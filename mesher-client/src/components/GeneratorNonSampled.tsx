import Mesh from './Mesh';
import Renderer from './Renderer';
import { generateVertices } from '../api/geometry/geometryGeneratorNonSampled';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button } from '@mui/material';
function GeneratorNonSampled() {
  const queryClient = useQueryClient();
  const  { isAuthenticated } = useAuth0();
  const {isPending, data } = useQuery({
    queryKey: ['geometry'],
    queryFn: generateVertices,
  })

  const mutation = useMutation({
    mutationFn: generateVertices,
    onSuccess: () => {
      // Invalidate and refetch
      queryClient.invalidateQueries({ queryKey: ['geometry'] });
    },
  });

  const saveModelToHistory = (vertexData: number[], modelId: string): number => {
    return saveModelToHistory(vertexData, modelId);
  }
  
  if(isPending) return <div>Loading...</div>
  if(!isAuthenticated) return <h1>401 Forbidden</h1>
  return (
    <div>
    {data && isAuthenticated ? <><Renderer mesh={<Mesh geometry={data.vertexData} id={data.id}></Mesh>}>
      </Renderer><Button variant="contained" onClick={() => {
        mutation.mutate();
        saveModelToHistory(data.vertexData, data.id);
      }}>Generate</Button></> : <h1>An error has occured.</h1>}
    </div>

  );
}

export default GeneratorNonSampled;