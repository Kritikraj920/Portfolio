import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Experience from './components/Experiance';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <About />
      <Experience/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
