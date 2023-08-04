import { Suspense, useRef} from 'react';
import { useGLTF, OrbitControls } from '@react-three/drei';
import { Canvas, useFrame  } from '@react-three/fiber';

function Model() {
    // const { scene } = useGLTF('assets/Laptop.gltf')
    const { scene } = useGLTF('assets/laptopWithImage.gltf')
    scene.position.y = -0.056;
    return <primitive object={scene}/>;
}

export function ShowModel() {
    return (
        <div style= {{height:"50vh"}}>
            <Canvas camera={{position: [-2,2,4], fov:3.5 }}>
                <pointLight position={[10, 10, 10]} intensity={1.3} />
                <Suspense fallback={null}>
                    <Model />
                </Suspense>
                <OrbitControls
                    autoRotate={true}
                    autoRotateSpeed={2}
                />
            </Canvas>
        </div>
    );
}