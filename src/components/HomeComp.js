import React, { useRef, useMemo } from 'react';
import Typed  from 'typed.js';
import { Canvas, extend, useFrame, useLoader } from "@react-three/fiber";
import { MathUtils } from 'three';
import img from "../images/Spin-1s-299px.gif"
import vertexShader from './vertexShader';
import fragmentShader from './fragmentShader';
import 'animate.css';
import AOS from 'aos';

const Scene = () => {
      const mesh = useRef();
      const hover = useRef(false);

      const uniforms = useMemo(() =>{
        return{
          u_time: {value:0},
          u_intensity: {value: 0.3},
        }
      });
      
      useFrame((state) => {
        const {clock} = state;
        if (mesh.current) {
          mesh.current.material.uniforms.u_time.value =
            0.4 * clock.getElapsedTime();
    
          mesh.current.material.uniforms.u_intensity.value = MathUtils.lerp(
            mesh.current.material.uniforms.u_intensity.value,
            hover.current ? 1 : 0.15,
            0.02
          );
        }
      });

  return (
    <>
                <mesh 
                ref={mesh} 
                scale={0.8} 
                position={[0, 0, 0]}
                onPointerOver={() => (hover.current = true)}
                onPointerOut={() => (hover.current = false)} >
                    <icosahedronBufferGeometry args={[2, 20]}/>
                    <shaderMaterial 
                    vertexShader={vertexShader} 
                    fragmentShader={fragmentShader} 
                    uniforms={uniforms}
                    />
                </mesh>
               
    </>
  )
}


const HomeComp = () => {
  AOS.init();
    const el = React.useRef(null);
    // Create reference to store the Typed instance itself
        const typed = React.useRef(null);
  
    React.useEffect(() => {
      const options = {
            strings: [
          'EMMANUEL OLUWATAYESE A.',
          'A FULL STACK WEB DEVELOPER,',
          'A BLOGER,',
          'A DIGITAL MARKETER,',
          'A UI/UX DESIGNER.'
        ],
        typeSpeed: 100,
        backSpeed: 50,
        loop: true,
      };
      
      // elRef refers to the <span> rendered below
      typed.current = new Typed(el.current, options);
      
      return () => {
        // Make sure to destroy Typed instance during cleanup
        // to prevent memory leaks
        typed.current.destroy();
      }
    })
  return (
    <>
      {/* <div data-aos="zoom-in-left" className=" ">Hello World</div> */}
      <h1 className="mt-10 text-black dark:text-white bg-transparent mx-auto text-center font-bold  text-2xl py-5 absolute w-full animate__animated animate__heartBeat">Home</h1>
    <div className="text-black dark:text-white h-full flex bg-white dark:bg-slate-800  items-stretch">
                    <div className='self-center absolute md:relative  z-30 w-full md:w-1/2  px-2  md:text-lg bg-transparent'>
                            <h1 className="text-center px-10 animate__animated animate__flipInX ">Hi,   </h1>
                            <h1 className="text-center animate__animated animate__backInDown"> I AM  <span className="text-black text-lg font-semibold dark:text-orange-500"  ref={el}></span></h1>
                            <p className="text-lg font-medium px-10 mt-10 animate__animated animate__backInLeft">
                                Welcome to my professional portfolio! I am a web developer with  years of experience in creating responsive and user-friendly websites. I specialize in web development and am always looking for new challenges and opportunities to work on exciting projects.
                            </p>
                    </div>
                    <div className="text w-full md:w-1/2 
                    ">
                      <Canvas>
                            <Scene />
                      </Canvas>
                    </div>
    </div>
   
    </>
  )
}

export default HomeComp


