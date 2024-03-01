import { GUI } from 'dat.gui';
import { useEffect, useRef } from 'react';

interface MeshProps {
    geometryX: number;
    geometryY: number;
    geometryZ: number;
    rotationX?: number;
    rotationY?: number;
    rotationZ?: number;
}

const Mesh = (props: MeshProps) => {

    const mesh = useRef<THREE.Mesh>(null!);

    useEffect(() => {
        const gui = new GUI()
        gui.add(mesh.current.rotation, 'x', 0, Math.PI * 2)
        gui.add(mesh.current.rotation, 'y', 0, Math.PI * 2)
        gui.add(mesh.current.rotation, 'z', 0, Math.PI * 2)
        return () => {
          gui.destroy()
        }
      }, [])
    return (
    <mesh rotation-x={props.rotationX} rotation-y={props.rotationY} ref={mesh}>
        <boxGeometry args={[props.geometryX, props.geometryY, props.geometryZ]} />
        <meshPhongMaterial color={"lime"} />
    </mesh>
    )
}

export default Mesh;