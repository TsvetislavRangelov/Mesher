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
function GeneratorNonSampled() {
  const  { isAuthenticated } = useAuth0();
  const {isPending, data, refetch } = useQuery(
  {
    queryKey: ['geometry'],
    queryFn: generateVertices,
    enabled: false
  });

  useEffect(() => {
    refetch();
  }, [])

  // const mutationGeometry = useMutation({
  //   mutationFn: generateVertices,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ['geometry'] });
  //   },
  // });

  const mutationSave = useMutation({
    mutationFn: saveModelToHistory
  });
  
  if(isPending) return <div>Loading...</div>
  if(!isAuthenticated) return <h1>401 Forbidden</h1>
  return (
    <div>
    {data && isAuthenticated ? <><Renderer mesh={<Mesh geometry={data.vertexData} id={data.id}></Mesh>}>
      </Renderer><Button variant="contained" onClick={() => {
        refetch();
        mutationSave.mutate({vertexData: data.vertexData, id: data.id});
      }}>Generate</Button></> : <h1>An error has occured.</h1>}
    </div>

  );
}

export default GeneratorNonSampled;