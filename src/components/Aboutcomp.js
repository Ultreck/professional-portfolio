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
        <div className="text h-full dark:bg-slate-300 dark:text-white bg-white text-black  grid md:grid-cols-2 gap-4 content-center">
             
<div id="indicators-carousel" class="relative" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item="active">
            <img src="/docs/images/carousel/carousel-1.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 2 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-2.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 3 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 4 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
        {/* <!-- Item 5 --> */}
        <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..."/>
        </div>
    </div>
    {/* <!-- Slider indicators --> */}
    <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
        <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
        <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-8 h-8 rounded-full sm:w-10 sm:h-10 bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg aria-hidden="true" class="w-5 h-5 text-white sm:w-6 sm:h-6 dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>
{/* 
              <div className="text">
                  <Scene />
              </div> */}
        </div>
        </>
      );
    };

export default Aboutcomp