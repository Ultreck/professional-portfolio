import * as THREE from "three";
import img from '../images/software-2_1020x680 (1).webp';
import React, { useRef, Suspense, useState } from "react";
import Fullpage, {FullPageSections, FullpageSection, FullpageNavigation} from '@ap.cx/react-fullpage';
import HomeComp from "../components/HomeComp";
import Aboutcomp from "../components/Aboutcomp";
import Experience from "../components/Experience";
import Carousel from "../components/Carousel";

const HomePage = () => {
  // const [theme, settheme] = useState("text bg-slate-700 h-screen")
  return (
    <Fullpage>
      <FullpageNavigation />
        <FullPageSections>
            <FullpageSection >
                <HomeComp  />
            </FullpageSection>
            <FullpageSection  >
              <Aboutcomp/>
            </FullpageSection>
            <FullpageSection  >
              <Experience/>
            </FullpageSection>
            <FullpageSection  >
              <Carousel/>
            </FullpageSection>
        </FullPageSections>
    </Fullpage>
  );
};

export default HomePage
