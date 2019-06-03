import React, { Component } from 'react';
import Home from './BodyComponents/Home.js';
import Tech from './BodyComponents/Tech.js';
import Portfolio from './BodyComponents/Portfolio.js';
import About from './BodyComponents/About.js';
import Contact from './BodyComponents/Contact.js';

const Body = () => {
  return(
    <div>
    <Home />
    <Tech />
    <Portfolio />
    <About />
    <Contact />    
    </div>
  )
}

export default Body;