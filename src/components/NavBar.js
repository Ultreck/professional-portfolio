import React, { useState, useEffect } from 'react';
import{moon} from 'react-icons-kit/feather/moon';
import {sun} from 'react-icons-kit/feather/sun';
import {Icon} from 'react-icons-kit'

const NavBar = ({setthemeMast, themeMast, setparent, setintro}) => {

      const [istrue, setistrue] = useState(true);
      // useEffect(() => {
      //       localStorage.setItem("White", JSON.stringify({light:themeOne, dark:themeTwo, slider:slider}));
          
      // }, [])
      
      const [slider, setslider] = useState("text w-20 h-7 -translate-x-2 bg-orange-500 shadow-inner rounded-full absolute border  border-orange-700")
      const [parentCon, setparentCon] = useState("text-white bg-black text-lg z-50 fixed flex right-10 mt-6 w-40 rounded-full px-2 border border-2 ");
      const [iconClass, seticonClass] = useState('text bg-black text-white px-6 ')

      const themeSunFunction = () =>{
            if(themeMast){
                  // localStorage.setItem("White", JSON.stringify({light:themeOne, dark:themeTwo, slider:slider}));

            }
            setthemeMast(JSON.parse(localStorage.getItem("White")).light)
            setistrue(true);
            setintro("text-lg spa font-bold text-white");
            setparent("bg-white")
            seticonClass('text bg-black text-white px-6 ')
            setparentCon("text-white bg-black text-lg z-50 fixed flex right-10 mt-6 w-40 rounded-full px-2 border border-2 border-black")
            setslider("text w-20 h-7 -translate-x-2 transition   duration-300 delay-150 ease-in-out bg-orange-500 shadow-inner rounded-full absolute  border  border-orange-700")
            // console.log("right on point");
      }
      const themeMoonFunction = () =>{
            setintro("text-lg spa font-bold text-black");
            setistrue(false);
            setparent("bg-slate-600")
            seticonClass('text bg-gray-200  text-black px-6 ')
            setparentCon("text-white bg-gray-200  text-lg z-50 fixed flex right-10 mt-6 w-40 rounded-full px-2 border border-2  ")
            setthemeMast(JSON.parse(localStorage.getItem("White")).dark)
            setslider("text w-20 h-7 translate-x-16 transition ease-in-out delay-150 duration-300 bg-orange-500 shadow-inner rounded-full absolute border  border-orange-700 ")
            // console.log("right on point");
      }

  return (
    <div className=''>
      <div className={parentCon}>
            <span className={slider}></span>
            <div className="text  bg-slate-900 rounded-full mx-auto">
                  <button className="text " onClick={themeSunFunction} title='Switch to Light mode'>
                        <Icon icon={sun} size={15} className={iconClass}/>
                  </button>
                  <button className="text " onClick={themeMoonFunction} title='Switch to Dark mode'>
                        <Icon icon={moon} size={15} className={iconClass}/>
                  </button>
            
            </div>
      </div>
    </div>
  )
}

export default NavBar