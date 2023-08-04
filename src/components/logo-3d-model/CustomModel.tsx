import React, { useEffect, useRef } from 'react';
import * as BABYLON from '@babylonjs/core';
 import '@babylonjs/loaders'; // Import additional loader module for GLTF

interface BabylonSceneProps {
  modelPath: string;
}

const BabylonScene: React.FC<BabylonSceneProps> = ({ modelPath }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    // Create the Babylon.js engine and scene
    const canvas = canvasRef.current!;
    const engine = new BABYLON.Engine(canvas, true);
    const scene = new BABYLON.Scene(engine);

    scene.clearColor = new BABYLON.Color4(0, 0, 0, 0);
    scene.getEngine().setAlphaMode(BABYLON.Engine.ALPHA_DISABLE);


    // Create a camera and position it
    const camera = new BABYLON.ArcRotateCamera('camera', 0, 0, 10, new BABYLON.Vector3(0, 0, 0), scene);
    camera.setPosition(new BABYLON.Vector3(0, 0, -5));
    camera.attachControl(canvas, true);
    camera.setTarget(BABYLON.Vector3.Zero()); // Set the camera's target to the origin (center) of the scene


    camera.wheelPrecision = 50;

    camera.lowerRadiusLimit = 1.7; // Minimum distance from the target (in scene units)
    camera.upperRadiusLimit = 10;

    

    // Load the 3D model based on the file extension
    if (modelPath.endsWith('.gltf') || modelPath.endsWith('.glb')) {
        BABYLON.SceneLoader.ImportMesh('', modelPath, '', scene, function (meshes) {
          // Adjust lighting and material properties for each loaded mesh
          meshes.forEach(mesh => {
            // Add a directional light to the scene
            const light = new BABYLON.DirectionalLight('light', new BABYLON.Vector3(0, 1, 0), scene);
      
            // Create a material with a color for the mesh
            const material = new BABYLON.StandardMaterial('material', scene);
            material.diffuseColor = new BABYLON.Color3(1, 0, 0); // Red color (you can adjust the RGB values)
      
            // Apply the material to the mesh
            mesh.material = material;
          });
        });
      } else if (modelPath.endsWith('.obj')) {
      BABYLON.SceneLoader.ImportMesh('', '', modelPath, scene, function (meshes) {
        // Adjust lighting, material, or other properties if needed
      });
    } else {
      console.error('Unsupported file format');
    }

    const handleScroll = (event: Event) => {
        event.preventDefault();
    };

    const canvoos = canvasRef.current;
    canvoos?.addEventListener('wheel', handleScroll, { passive: false });
    

    // Render the scene
    engine.runRenderLoop(() => {
      scene.render();
    });

    // Handle window resize
    window.addEventListener('resize', () => {
      engine.resize();
    });

    return () => {
      // Clean up Babylon.js resources
      scene.dispose();
      engine.dispose();
      canvoos?.removeEventListener('wheel', handleScroll);
    };
    
  }, [modelPath]);

  return <canvas ref={canvasRef} style={{ width: '100%', height: '100%', outline: 'none' }} tabIndex={0} />;
};

export default BabylonScene;