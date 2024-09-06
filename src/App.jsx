import Navbar from './components/Navbar';
import './App.css';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Demo from './components/Demo';
import About from './components/About';
import Project from './components/Project';
import Footer from './components/Footer';
import Contact from './components/Contact';
import HomePage from './components/HomePage';
function App() {
  return (
    <>
    <div className='bg-zinc-950 '>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
     <Project/>
     <Contact/>
      <Footer/>
      {/* <Demo/> */}
      </div>
    </>
  );
}

export default App;
