import { Canvas } from "@react-three/fiber"
import { Environment, OrbitControls, Stats } from "@react-three/drei";
import { Suspense } from "react";
import '../renderer-styles.css';

type Props = {
  mesh: React.ReactNode;
  children?: React.ReactNode;
}

const Renderer = (props: Props) => {
    return <div className="canvas-container">
    <Canvas>
      <Suspense fallback={false}>
      {props.mesh}
      <OrbitControls />
      <Stats />
      <Environment files={'/rustig_koppie_puresky_1k.hdr'} background/>
      </Suspense>
    </Canvas>
  </div>
}

export default Renderer;