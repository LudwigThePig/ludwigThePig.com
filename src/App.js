import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

import styles from './App.scss';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons'



library.add(fab);

class App extends Component{
  render(){
    return(
      <div>
      <Navbar />
        <div id="construction">
          <p>ludwigthepig.com is under construction!<br />
              <a href="https://github.com/LudwigThePig/LudwigThePig.com-2.0">Click here to see the future of ludwigthepig.com</a>
          </p>
        </div>
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;