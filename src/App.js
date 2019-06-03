import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';
import Footer from './components/Footer.js';

import styles from './App.scss';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'



library.add(fab);

class App extends Component{
  render(){
    return(
      <div>
        <Navbar />
        <Body />
        <Footer />
      </div>
    )
  }
}

export default App;