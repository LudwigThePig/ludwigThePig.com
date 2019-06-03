import React, { Component } from 'react';
import Navbar from './components/Navbar.js';
import Body from './components/Body.js';

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

class Footer extends Component{
  render(){
    return(
      <footer id='footer'>		
      <a href="https://www.linkedin.com/in/morgangalvin">
        <FontAwesomeIcon icon={['fab', 'linkedin']} className='fa' size="3x" />
      </a>
      <a href="https://github.com/LudwigThePig">
        <FontAwesomeIcon icon={['fab', 'github']} className='fa' size="3x" />
      </a>
      <a href="https://codepen.io/moegain/">
        <FontAwesomeIcon icon={['fab', 'codepen']} className='fa'  size="3x" />
      </a>
      <a href="https://www.instagram.com/morgangalvinphoto/">
      <FontAwesomeIcon icon={['fab', 'instagram']} className='fa' size="3x" />
      </a>
      <a href="https://www.strava.com/athletes/5897641">
      <FontAwesomeIcon icon={['fab', 'strava']} className='fa' size="3x" />
      </a>
      <br /> <br />
      </footer>
    )
  }
}
export default App;