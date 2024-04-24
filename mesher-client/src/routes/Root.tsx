import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';
import Landing from './Landing';
const Root = () => {
  return (
  <div>
  <Navbar />
  <Outlet />
  </div>
  );
}

export default Root;