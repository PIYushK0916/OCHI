import React from 'react'
import Navbar from './components/Nabar';
import LandingPage from './components/LandingPage';
import Marque from './components/Marque';
import About from './components/About';
import Eyes from './components/Eyes';
import Feature from './components/Feature';
import Ready from './components/Ready';
import Footer from './components/Footer';
import LocomotiveScroll from 'locomotive-scroll';

export const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div className='w-full min-h-screen text-white bg-zinc-900'>
      <Navbar />
      <LandingPage />
      <Marque />
      <About />
      <Eyes />
      <Feature />
      <Ready />
      <Footer />
    </div>
  )
}
 export default App;