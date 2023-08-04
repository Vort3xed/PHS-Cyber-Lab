import React from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import { GLTF } from 'three/examples/jsm/loaders/GLTFLoader';

interface ModelProps {
  url: string;
}


const Model: React.FC<ModelProps> = ({ url }) => {
  const { scene } = useGLTF(url) as unknown as GLTF;

  return <primitive object={scene} />;
};


const MyModel: React.FC = () => {
  return (
    <Canvas>
      <ambientLight intensity={1} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <Model url="assets/tinylaptop.glb" />
      <OrbitControls />
    </Canvas>
  );
};

export default MyModel;
