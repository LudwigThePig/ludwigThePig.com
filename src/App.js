import React, { Component } from 'react';
import { Nav, Navbar, NavItem, MenuItem, NavProps, NavbarProps, NavItemProps, NavbarBrand, NavbarBrandProps } from 'react-bootstrap';
import './App.scss';
import brand from './img/favicon.png'

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

      <Navbar color="default-color" inverse collapseOnSelect fixedTop>
        <Navbar.Header>
    <Navbar.Brand>
      <a href="#"><img src={brand} alt='pig brand' /> ludwigThePig</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#home">
          Home
          </NavItem>
          <NavItem eventKey={2} href="#tech" title="Item">
            Technologies
          </NavItem>
          <NavItem eventKey={3} href="#projects">
            Projects
          </NavItem>
          <NavItem eventKey={3} href="#contact">
            Contact
          </NavItem>
        </Nav>
        </ Navbar.Collapse>
      </Navbar>
    )
  }
}

class Body extends Component{
  render(){
    return(
      <div>
      <Home />
      <Tech />
      <Projects />
      <Contact />
      </div>
    )
  }
}

class Home extends Component{
  render(){
    return(
      <div id="home" className="body">
        <h2>Howdy, my name is Morgan Galvin.</h2>
        <p>I am a freelance web developer and photographer. I have just moved to Wellington, NZ, from the United States, and am seeking employment as a developer.
          <br />On this site, you will find references to my work, projects, and expertise.
        </p>
      </div>
      
    )
  }
}

class Tech extends Component{
  render(){
    return(
      <div id="tech" className="body">
        <h1>Hey, I know how a lot about Javascript, React, Redux, d3.js, and, of course, HTML/CSS/SCSS</h1>
        <h2>Hire me!!!</h2>
        <p>this is a placeholderrrrr</p>
      </div>
    )
  }
}

class Projects extends Component{
  render(){
    return(
      <div id="projects" className="body">
        <h1>Yeah, I've done some pretty cool stuff</h1>
        <h2>Here is a list!</h2>
        <ul>
          <li>Markdown Previewer!</li>
          <li>Drum Machine!</li>
          <li>Klackers!</li>
        </ul>
        <p>Check out my Github and Codepen for more!</p>
      </div>
    )
  }
}

class Contact extends Component{
  render(){
    return(
      <div id="contact" className="body">
        <h1>Let's get in touch</h1>
        <h3>I am here to learn and help you build the kick ass platform that your company needs!</h3>
        <p>morgan@ludwigthepig.com
          <br />
          +64 21 029 81349 <i>(in New Zealand temporarily)</i>
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
