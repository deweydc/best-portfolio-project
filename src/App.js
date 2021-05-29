import React from 'react'
import './App.css';
import Hero from './Components/Hero';
import About from './Components/About';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Nav from './Components/Nav';

function App() {
  return (
    <div className='App'>
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />

    </div>
  );
}

export default App;
