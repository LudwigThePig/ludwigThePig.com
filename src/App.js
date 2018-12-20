import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Header />
        <Body />
        <Footer />
      </div>
      
    )
  }
}

class Header extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="navbar">
      <div className="navbrand">  
        <img src="https://cdn2.iconfinder.com/data/icons/black-animal-svg-icons/512/pig_piggy_bank_money_finance-128.png" alt="pig-icon" />
        <span><b>LtP</b></span>
      </div>
      <div className="link-ctr">
          <span id='home' className="highlight">Home</span>
          <span id='code'>Code</span>
          <span id='photo'>Photo</span>
          <span id='contact'>Contact</span>
      </div>
    </div>
    )
  }
}


class Body extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <h2>Howdy, my name is Morgan Galvin.</h2>
        <p>I am a freelance web developer and photographer. I have just moved to Wellington, NZ, from the United States, and am seeking employment as a developer.
          <br />On this site, you will find references to my work, projects, and expertise.
        </p>
      </div>
      
    )
  }
}

class Footer extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <footer>		
        <a href="https://www.linkedin.com/in/morgangalvin" className="fab fa-linkedin-square"></a>
        <a href="https://codepen.io/moegain/" className="fab fa-codepen"></a>
        <a href="https://www.instagram.com/morgangalvinphoto/" className="fab fa-instagram"></a>
        <a href="https://www.strava.com/athletes/5897641" className="fab fa-strava"></a>
        <a href="mailto:morgan@ludwigthepig.com?Subject=Hello%20Ludwig!" target="_top" className="fas fa-envelope"></a>
      </footer>
    )
  }
}


export default App;
