import React from 'react';
import { Canvas } from '@react-three/fiber';
import { BakeShadows, OrbitControls, Stage } from '@react-three/drei';

const ReactThreefibre = () => {
  return (
    <div id={"canvas-container"}>
    <Canvas>
          <ambientLight intensity={0.1}/>
          <directionalLight color={'hotpink'} position={[5, 5, 5]}/>
      <mesh scale={1} rotation-x={1}>
          <boxGeometry args={[2, 2, 2]}/>
          <meshStandardMaterial/>
      </mesh>
      <OrbitControls autoRotate />
    </Canvas>
    <Canvas>
          <ambientLight intensity={0.1}/>
          <directionalLight color={'orange'} position={[5, 5, 5]}/>
      <mesh >
          <sphereGeometry args={[1, 32]}/>
          <meshPhysicalMaterial />
      </mesh>
      <OrbitControls autoRotate />
    </Canvas>
    <Canvas>
          <ambientLight intensity={0.1}/>
          <directionalLight color={'orange'} position={[0, 0, 5]}/>
          <mesh rotation={[Math.PI / 2, 0, 0]}>
          <octahedronGeometry args={[2, 2, 2]}/>
          <meshBasicMaterial />
          <OrbitControls autoRotate />
      </mesh>
    </Canvas>
    </div>
  )
}

export default ReactThreefibre