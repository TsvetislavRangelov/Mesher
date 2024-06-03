import Mesh from './Mesh';
import Renderer from './Renderer';
import { generateVertices, saveModelToHistory } from '../api/geometry/geometryGeneratorNonSampled';
import { useMutation, useQuery } from '@tanstack/react-query';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, CircularProgress, Grid } from '@mui/material';
import { useEffect } from 'react';
import { getHistoryForUser } from '../api/history/generatorHistory';
import Unauthenticated from './Unauthenticated';
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
  
  if(!isAuthenticated) return <Unauthenticated />;
  if(isPending) return <div>
    <Grid
  container
  spacing={0}
  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '100vh' }}><CircularProgress  size={150} />
  Loading...</Grid>
  </div>
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