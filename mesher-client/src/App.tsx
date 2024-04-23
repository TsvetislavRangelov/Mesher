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
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';
function App() {
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
    <><Navbar />
    {data ? <Renderer mesh={<Mesh geometry={data!}></Mesh>}>
    </Renderer> : <h1>{error?.message}</h1>}
    </>

  );
}

export default App;