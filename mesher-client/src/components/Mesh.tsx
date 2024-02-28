import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import MeshProps from './props/MeshProps';

const Mesh = (props: MeshProps) => {
    const mesh = useRef<THREE.Mesh>(null!);
    useFrame(() => {
        mesh.current.rotation.x += 0.02;
        mesh.current.rotation.y += 0.02; 
    })
    return <mesh rotation-x={2} rotation-y={10} ref={mesh}>
        <boxGeometry args={[props.geometryX, props.geometryY, props.geometryZ]} />
        <meshStandardMaterial color={"lime"} />
    </mesh>
}

export default Mesh;