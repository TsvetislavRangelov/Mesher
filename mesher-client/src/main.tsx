import ReactDOM from 'react-dom/client';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Auth0Provider } from '@auth0/auth0-react';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './routes/ErrorPage.tsx';
import Root from './routes/Root.tsx';
import GeneratorNonSampled from './components/GeneratorNonSampled.tsx';
import Landing from './routes/Landing.tsx';

const httpClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // disable fetching from server on losing focus.
    }
  }
});

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Landing /> ,
      },
      {
        path: "generator",
        element: <GeneratorNonSampled />
      }
    ]
  },
]);

const domain: string = `${import.meta.env.VITE_AUTH0_DOMAIN}`;
const clientId: string = `${import.meta.env.VITE_AUTH0_CLIENT_ID}`;

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Auth0Provider 
  domain={domain} cacheLocation='localstorage' useRefreshTokens={true} clientId={clientId} authorizationParams={{
    redirect_uri: `${import.meta.env.VITE_AUTH0_REDIRECT_URI}`,
    audience: "https://mesher.eu.auth0.com/api/v2/",
    scope: "openid profile email read:current_user update:current_user_metadata"
  }}>
  <QueryClientProvider client={httpClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
  </Auth0Provider>
)
