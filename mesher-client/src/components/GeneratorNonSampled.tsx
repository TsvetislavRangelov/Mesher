import Mesh from './Mesh';
import Renderer from './Renderer';
import { getGeometryVector } from '../api/geometry/geometryGeneratorNonSampled';
import { useQuery } from '@tanstack/react-query';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
function GeneratorNonSampled() {
  const  {user, isAuthenticated, getAccessTokenSilently} = useAuth0();
  const {isPending, error, data } = useQuery({
    queryKey: ['geometry'],
    queryFn: getGeometryVector,
  })
  useEffect(() => {
    const getToken = async () => {
      if(isAuthenticated){
        let token;
        try{
         token = await getAccessTokenSilently({
            authorizationParams: {
              audience: 'https://mesher.eu.auth0.com/api/v2/',
              scope: 'read:current_user'
            }
          });
        }
        catch(error: any){
          console.log("Token failure: " + error);
        }
        console.log("Successfully received token: " + token);
        return token;
      }
      }
    getToken();
  }, [getAccessTokenSilently, user?.sub])

  
  if(isPending) return <div>Loading...</div>
  return (
    <div>
    {data ? <Renderer mesh={<Mesh geometry={data.vertexData} id={data.id}></Mesh>}>
    </Renderer> : <h1>{error?.message}</h1>}
    </div>

  );
}

export default GeneratorNonSampled;