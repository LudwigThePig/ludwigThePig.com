import React, { Component } from 'react';
import './App.scss';
import brand from './img/favicon.png';
import perins from './img/perins-fire-md.jpg'
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

class Navbar extends Component {
  constructor(){
    super();
    this.state = {
    active: 'home',
    burg: false,
    mobile: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.burgFunc = this.burgFunc.bind(this);

    
  }
  componentDidMount(){
    document.addEventListener('scroll', this.handleScroll);
  }
 componentWillUnmount(){
    document.removeEventListener('scroll', this.handleScroll);
  }

  //offset values are location of elements minus the navbar (10vh)
  handleScroll = ()=>{
    let wind = window.pageYOffset;
    let tenVh = window.innerHeight / 10;
    let offset = {
      home: document.getElementById('home').offsetTop - tenVh,
      tech: document.getElementById('tech').offsetTop - tenVh,
      projects: document.getElementById('projects').offsetTop - tenVh,
      contact: document.getElementById('contact').offsetTop - tenVh,
    };
    if (wind < offset.tech){
      if (this.state.active !== 'home' ){ 
        this.setState({
          active: 'home'
        });
      }
    } else if (wind > offset.tech && wind < offset.projects){
      if (this.state.active !== 'tech' ){
        this.setState({
          active: 'tech'
        });
      }
    } else if ( wind > offset.projects && wind < offset.contact ){
      if (this.state.active !== 'projects' ){
        this.setState({
          active: 'projects'
        });
        }
    } else if (wind > offset.contact){
      if (this.state.active !== 'contact' ){
        this.setState({
          active: 'contact'
        });
      }
    }
  }
  burgFunc = ()=>{
    this.setState({
      burg: !this.state.burg
    })  
    // x.classList.toggle("change");
  }
  render(){
    return(
      <div className="navbar" >
        <div className="navbrand">  
        <a href="#home">
          <img src={brand} alt='pig brand' />
        </a>
        <span id='ltp'>LtP</span>
        </div>
        <div className={(this.state.burg)?'dropdown':'no-dropdown'} >
          <a href="#home" className={
            (this.state.active ==='home')?'active':null}>
            <span>Home</span></a>
          <a href="#tech" className={
            (this.state.active === 'tech')?'active':null}><span>Tech</span></a>
          <a href="#projects" className={
            (this.state.active === 'projects')?'active':null}><span>Projects</span></a>
          <a href="#contact" className={
            (this.state.active === 'contact')?'active':null}><span>Contact</span></a>
        </div>
        <div className={(this.state.burg)?'hamburger, change':'hamburger'} onClick={this.burgFunc}>
          <div className="bar1"></div>
          <div className="bar2"></div>
          <div className="bar3"></div>
        </div>
    </div>
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
      <div className='left-col'>
        <img src={perins} alt='perins peak on fire'></img>
      </div>
      <div className='right-col'>
          <h4>Howdy, my name is </h4>
          <h1>Morgan Galvin</h1>
          <h2>I am web developer</h2> 
          <p>I have just moved to Wellington, NZ, from the United States, and am seeking employment as a developer. On this site, you will find references to my work, projects, and expertise.
          </p>
        </div>
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
  render(){
    return(
      <footer id='footer'>		
      <a href="https://www.linkedin.com/in/morgangalvin">
        <FontAwesomeIcon icon={['fab', 'linkedin']} className='fa' size="3x" />
      </a>
      <FontAwesomeIcon icon={['fab', 'github']} className='fa' size="3x" />
      <a href="https://codepen.io/moegain/">
        <FontAwesomeIcon icon={['fab', 'codepen']} className='fa'  size="3x" />
      </a>
      <a href="https://www.instagram.com/morgangalvinphoto/">
      <FontAwesomeIcon icon={['fab', 'instagram']} className='fa' size="3x" />
      </a>
      <a href="https://www.strava.com/athletes/5897641">
      <FontAwesomeIcon icon={['fab', 'strava']} className='fa' size="3x" />
      </a>
      </footer>
    )
  }
}

export default App;