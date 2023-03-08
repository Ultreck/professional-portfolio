import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/react-splide/css';
import Aos from 'aos';
import React from 'react';
import { Link } from 'react-router-dom';
import Images from './Images';

const Experience = () => {
  // Aos.init();
  const options = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    fixedHeight: '15rem',
    perPage: 4,
    perMove: 2,
     focus  : 'center',
     speed:100
  };
  const options2 = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    fixedHeight: '12rem',
    perPage: 2,
    perMove: 1,
     focus  : 'center',
    speed:100
  };
  const options3 = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    fixedHeight: '20rem',
    perPage: 2,
    perMove: 1,
     focus  : 'center',
      speed: 400,
  };
  const options4 = {
    type         : 'loop',
    gap          : '1rem',
    autoplay     : true,
    pauseOnHover : false,
    resetProgress: false,
    fixedHeight: '20rem',
    perPage: 1,
    perMove: 1,
     focus  : 'center',
      speed: 400,
  };
 
  return (
    <>
        <div className="text dark:bg-slate-800 h-screen bg-white">
          <div className="text">
            <div className="text" >
              <h1 className="text-center font-bold text-2xl pt-3 underline dark:text-orange-500 text-black">Skills/Tools</h1>
            </div>
             {/* Largger Screen scrolling for skills and Tools tab*/}
              <Splide hasTrack={ false } options={options} className=' hidden md:flex py-10'>
                <SplideTrack>
                {Images.map((val, index) => (
                  <SplideSlide>
                    <div className="text-center grid bg-sky-100 dark:text-white dark:bg-slate-600 w-full md:w-1/2 h-full px-5 py-4 rounded">
                    <img src={`${val.img}`} alt='' className="text" />
                    <span className="text font-bold">{val.title}</span>
                    </div>
                  </SplideSlide>
            ))}
              </SplideTrack>
              </Splide>

                  {/* Media Screen scrolling for skills and Tools tab*/}
              <Splide hasTrack={ false } options={options2} className='flex  md:hidden  pt-3 pb-8 '>
                <SplideTrack>
                {Images.map((val, index) => (
                  <SplideSlide>
                    <div className="text-center grid bg-sky-100 dark:bg-slate-600 dark:text-white w-full md:w-1/3 h-full px-5 py-5 rounded">
                    <img src={`${val.img}`} alt='' className="text" />
                    <span className="text-">{val.title}</span>
                    </div>
                  </SplideSlide>
            ))}
              </SplideTrack>
              </Splide>
          </div>
          <div className="text">
              <div className="text" >
                  <h1 className="text-center font-bold text-2xl pt-5 underline dark:text-orange-500 text-black">Projects</h1>
             </div>
             <Splide hasTrack={ false } options={options3} className=' hidden md:flex py-2'>
                <SplideTrack>
                {Images.map((val, index) => (
                  <SplideSlide>
                    <div class="flex justify-center">
                        <div
                         class="flex flex-col rounded-lg bg-white shadow-lg  dark:bg-slate-600 md:max-w-xl md:flex-row ">
                        <img
                        class="h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
                       src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                      alt="" />
                      <div class="flex flex-col justify-start p-6">
                       <h5
                      class="mb-2 text-xl font-medium text-neutral-800 dark:text-neutral-50">
                     {val.title}
                    </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                      This is a wider card with supporting text below as a natural
                       lead-in to additional content. This content is a little bit
                       longer.
                     </p>
                    <p class="text-xs text-neutral-500 dark:text-neutral-300">
                         Last updated 3 mins ago
                    </p>
                      <Link className='bg-blue-700 px-5 py-1 text-center mt-5  text-white' to="">Browse App</Link>
                 </div>
                 </div>
              </div>
                  </SplideSlide>
            ))}
              </SplideTrack>
              </Splide>



              <Splide hasTrack={ false } options={options4} className='flex  md:hidden py-2 '>
                <SplideTrack>
                {Images.map((val, index) => (
                  <SplideSlide>
                    <div class="flex justify-center">
                  <div
                    class="flex  rounded-lg bg-white shadow-lg dark:bg-slate-600 md:max-w-xl md:flex-row">
                    <img
                      class="h-full w-1/3 rounded-t-lg object-cover md:h-auto  md:rounded-none md:rounded-l-lg"
                      src="https://mdbootstrap.com/wp-content/uploads/2020/06/vertical.jpg"
                      alt="" />
                    <div class="flex flex-col justify-start p-6">
                      <h5
                        class="mb-2 text-xl font-medium text-neutral-800 dark:text-white">
                        {val.title}
                      </h5>
                      <p class="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        This is a wider card with supporting text below as a natural
                        lead-in to additional content. This content is a little bit
                        longer.
                      </p>
                      <p class="text-xs text-neutral-500 dark:text-neutral-300">
                        Last updated 3 mins ago
                      </p>
                      <Link className='bg-blue-700 px-5 py-1 text-center mt-5  text-white' to="">Browse App</Link>
                    </div>
                  </div>
                </div>
                  </SplideSlide>
            ))}
              </SplideTrack>
              </Splide>
          </div>
        </div>
    </>
  )
}

export default Experience