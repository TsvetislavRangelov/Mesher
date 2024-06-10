import Mesh from './Mesh';
import Renderer from './Renderer';
import { generateVertices } from '../api/geometry/geometryGeneratorNonSampled';
import { useMutation } from '@tanstack/react-query';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useAuth0 } from '@auth0/auth0-react';
import { Button, CircularProgress, Grid } from '@mui/material';
import Unauthenticated from './Unauthenticated';
import { useEffect, useState } from 'react';
function GeneratorNonSampled() {
  const  { isAuthenticated, user } = useAuth0();
  const [isPending, setIsPending] = useState<boolean>(true);
  const [model, setModel] = useState<GeometryModel>();

  const refetchMutation = useMutation({
    mutationFn: async (username: string | undefined) => {
      setIsPending(false);
      const model = await generateVertices(username);
      setModel(model);
    }
  });

  useEffect(() => {
    refetchMutation.mutate(user?.nickname);
  }, [user?.nickname])
  
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
    { isAuthenticated && user?.nickname && model ? <><Renderer mesh={<Mesh geometry={model.vertexData} id={model.id}></Mesh>}>
      </Renderer><Button variant="contained" onClick={() => {
        refetchMutation.mutate(user.nickname!);
      }}>Generate</Button></> : <h1>An error has occured.</h1>}
    </div>

  );
}

export default GeneratorNonSampled;