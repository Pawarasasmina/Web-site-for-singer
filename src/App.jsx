import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Music from './components/Music';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary text-white min-h-screen">
      <Navbar />
      <Hero />
      <Music />
      <About />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;