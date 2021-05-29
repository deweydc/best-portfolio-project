import React from 'react'
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import HireMe from './Components/HireMe';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <HireMe />


    </div>
  );
}

export default App;
