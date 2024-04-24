import { Plane } from '@react-three/drei';
import {Model} from '../components/Model'
import Renderer from '../components/Renderer';

export default function Landing() {
  return (
    <div className="App">
      <Renderer mesh={<Model />}>
      </Renderer>
    </div>
  );
}
