import React from 'react'
import Navbar from './components/Navbar';
import './App.css';
import Header from './components/Header';
import About from './components/About';
import Service from './components/Service';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Header />
      <About />
      <Service />
      <Contact />
      <Footer />
    </div>
  )
}

export default App