import { useLoader } from '@react-three/fiber';
import { GUI } from 'dat.gui';
import { useEffect, useRef, useState } from 'react';
import { TextureLoader } from 'three';

interface MeshProps {
    geometryX: number;
    geometryY: number;
    geometryZ: number;
    rotationX?: number;
    rotationY?: number;
    rotationZ?: number;
}

const Mesh = (props: MeshProps) => {
    const [wireframe, setWireframe] = useState<boolean>();
    const mesh = useRef<THREE.Mesh>(null!);
    //TODO: generate textures as well???? for now kept as default. could also load random from a pool of defaults.
    const colorMap = useLoader(TextureLoader, 'rough-architect-structure-stonewall-superb_1323-42.avif');
    var obj = {Wireframe: function() {setWireframe(!wireframe)}};
    useEffect(() => {
        const gui = new GUI();
        gui.add(mesh.current.rotation, 'x', 0, Math.PI * 2);
        gui.add(mesh.current.rotation, 'y', 0, Math.PI * 2);
        gui.add(mesh.current.rotation, 'z', 0, Math.PI * 2);
        gui.add(obj, 'Wireframe');
        return () => {
          gui.destroy()
        }
      }, [wireframe])
      
    return (
    <mesh rotation-x={props.rotationX} rotation-y={props.rotationY} ref={mesh}>
        <boxGeometry args={[props.geometryX, props.geometryY, props.geometryZ]} />
        <meshPhysicalMaterial metalness={3} roughness={0.36} clearcoat={1} 
        transmission={1} ior={1.53} thickness={5} 
        map={colorMap} wireframe={wireframe}/>
    </mesh>
    
    )
}

export default Mesh;