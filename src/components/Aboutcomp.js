import * as THREE from "three";
import img from '../images/software-2_1020x680 (1).webp';
import React, { useRef, Suspense } from "react";
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { shaderMaterial } from "@react-three/drei";
import glsl from "babel-plugin-glsl/macro";

const WaveShaderMaterial = shaderMaterial(
      // Uniform
      {
        uTime: 0,
        uColor: new THREE.Color(0.0, 0.0, 0.0),
        uTexture: new THREE.Texture(),
      },
      // Vertex Shader
      glsl`
        precision mediump float;
        varying vec2 vUv;
        varying float vWave;
        uniform float uTime;
        #pragma glslify: snoise3 = require(glsl-noise/simplex/3d);
        void main() {
          vUv = uv;
          vec3 pos = position;
          float noiseFreq = 2.0;
          float noiseAmp = 0.4;
          vec3 noisePos = vec3(pos.x * noiseFreq + uTime, pos.y, pos.z);
          pos.z += snoise3(noisePos) * noiseAmp;
          vWave = pos.z;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);  
        }
      `,
      // Fragment Shader
      glsl`
        precision mediump float;
        uniform vec3 uColor;
        uniform float uTime;
        uniform sampler2D uTexture;
        varying vec2 vUv;
        varying float vWave;
        void main() {
          float wave = vWave * 0.2;
          vec3 texture = texture2D(uTexture, vUv + wave).rgb;
          gl_FragColor = vec4(texture, 1.0); 
        }
      `
    );
    
    extend({ WaveShaderMaterial });
    
    const Wave = () => {
      const ref = useRef();
      useFrame(({ clock }) => (ref.current.uTime = clock.getElapsedTime()));
    
      const [image] = useLoader(THREE.TextureLoader, [
        img,
      ]);
    
      return (
        <mesh>
          <planeBufferGeometry args={[0.4, 0.6, 20, 20]} />
          <waveShaderMaterial uColor={"hotpink"} ref={ref} uTexture={image} />
        </mesh>
      );
    };
    
    const Scene = () => {
      return (
        <Canvas camera={{ fov: 3, position: [0, 0, 5] }}>
          <Suspense fallback={null}>
            <Wave />
          </Suspense>
        </Canvas>
      );
    };
    
    const Aboutcomp = () => {
      return (
        <>
        <div className="text h-full  grid md:grid-cols-2 gap-4 content-center">
              <div className=" px-10 ">
                      <div className="text  px-10">I'm a highly-skilled and motivated full stack developer with a passion for building responsive and user-friendly web applications. My background includes a certificate  in Web development from SQI COLLEGE OF ICT  and 1 year of experience working in the tech industry. I'm always looking for new challenges and opportunities to expand my skills and experience.</div>
              </div>
              <div className="text">
                  <Scene />
              </div>
        </div>
        </>
      );
    };

export default Aboutcomp