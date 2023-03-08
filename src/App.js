import { Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';
import Experience from './components/Experience';
import HomeComp from './components/HomeComp';
import HomePage from './pages/HomePage';



const App = () => {

  return (
    <>
    <div className=''>
      <Routes>
        <Route path="/home" element={<HomeComp/>} />
        <Route path="skills" element={<Experience/>} />
        <Route path="/contacts" element={<Carousel/>} />
      </Routes>
         
      <HomePage />
   
    </div>
    </>
  );
};

export default App;