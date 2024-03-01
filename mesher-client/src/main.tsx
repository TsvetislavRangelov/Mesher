import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const httpClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false // disable fetching from server on losing focus.
    }
  }
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={httpClient}>
  <App />
  </QueryClientProvider>
)
