import React, { Component } from 'react';
import './App.scss';
import brand from './img/favicon.png';
import perins from './img/perins-fire-md.jpg'
import coffee from './img/Coffee-md.jpg'
import drc from './img/drc-site.jpg';
import rfi from './img/rf-site.jpg';
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
      portfolio: document.getElementById('portfolio').offsetTop - tenVh,
      about: document.getElementById('about').offsetTop - tenVh,
      contact: document.getElementById('contact').offsetTop - tenVh,
    };
    if (wind < offset.tech){
      if (this.state.active !== 'home' ){ 
        this.setState({
          active: 'home'
        });
      }
    } else if (wind > offset.tech && wind < offset.portfolio){
      if (this.state.active !== 'tech' ){
        this.setState({
          active: 'tech'
        });
      }
    } else if ( wind > offset.portfolio && wind < offset.about ){
      if (this.state.active !== 'portfolio' ){
        this.setState({
          active: 'portfolio'
        });
        }
    } else if ( wind > offset.about && wind < offset.contact ){
      if (this.state.active !== 'about' ){
        this.setState({
          active: 'about'
        });
        }
    }else if (wind > offset.contact){
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
          <a href="#portfolio" className={
            (this.state.active === 'portfolio')?'active':null}><span>Portfolio</span></a>
          <a href="#about" className={
            (this.state.active === 'about')?'active':null}><span>About</span></a>
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
      <Portfolio />
      <About />
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
          <h2>Howdy, my name is </h2>
          <h1>Morgan Galvin</h1>
          <h2 style={{textAlign: 'center'}}>Javascript Extraordinaire</h2> 
          <p>I am a web developer living Wellington, NZ. On this site, you will find references to my work, portfolio, and expertise. I am seeking new opportunities.
          </p>
          <h4><a href='https://www.duracellenergybank.com/'>INSP</a></h4>
        </div>
      </div>
      
    )
  }
}

class Tech extends Component{
  constructor(props){
    super(props);
    this.state = {
      tech: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      tech: !this.state.tech
    })
  }
  render(){
    if (this.state.tech){
      return(
        <div id="tech" className="body">
          <div className="left-col">
          <div className="mininav-wrapper">  
              <h1 onClick={this.handleClick}>Tech I Work With</h1>
              <h1 className='disabled' onClick={this.handleClick}>Credentials</h1>
            </div>
            <ul>
              <li>HTML5</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React  Redux</li>
              <li>Node.js & Express.js</li>
              <li>MongoDB & Mongoose</li>
              <li>C#</li>
              <li>Photoshop</li>
            </ul>
          </div>
          <div className="right-col">
          <img src={coffee} alt="81301 Coffee" />
            <h1>Tech I Want to Work With</h1>
            <ul>
                <li>Everything</li>
                <li></li>
                <li></li>
                <li></li>
              </ul>
            </div>
        </div>
    )
    } else {
      return(
        <div id="tech" className="body">
          <div className="left-col">
            <div className="mininav-wrapper">  
              <h1 className='disabled' onClick={this.handleClick}>Tech I Work With</h1>
              <h1 onClick={this.handleClick}>Credentials</h1>
            </div>
            <ul>
              <li>Bachelors of Art, Philosophy, 2016</li>
              <li><b>freeCodeCamp Certifications, 2018</b></li>
              <ul>
                <a href="https://www.freecodecamp.org/certification/ludwigthepig/front-end-libraries"><li>Front End Libraries</li></a>
                <a href="https://www.freecodecamp.org/certification/ludwigthepig/apis-and-microservices"><li>APIs and Microservices</li></a>
                <a href="https://www.freecodecamp.org/certification/ludwigthepig/javascript-algorithms-and-data-structures"><li>JavaScript Algorithms and Data Structures</li></a>          
                <a href="https://www.freecodecamp.org/certification/ludwigthepig/legacy-front-end"><li>Legacy Front End Development</li></a>
                
              </ul>
            </ul>
          </div>
          <div className="right-col">
          <img src={coffee} alt="81301 Coffee" />
            <h1>Tech I Want to Work With</h1>
            <ul>
                <li>Everything</li>
              </ul>
            </div>
        </div>
    )
    }
  }
}

class Portfolio extends Component{
  render(){
    return(
      <div id="portfolio" className="body">
         <div className="jumbo"> 

            <div className="left-col">
              <h1>Websites</h1>
              <h1 className="disabled">Projects</h1>
            </div>
            
            <div className='right-col'>

              <div className="portfolio-wrapper">
                <div className="link-wrapper">
                  <a href="roaringforkins.com">ROARING FORK INSURANCE</a>
                </div>
                <img src={rfi} alt="Roaring Fork Insurance"></img>
              </div>

              <div className="portfolio-wrapper">
                <div className="link-wrapper">
                  <a href="durangorunningclub.com"> DURANGO RUNNING CLUB</a>
                </div>
                <img src={drc} alt="Durango Running Club"></img>
              </div>
              
            </div>
        </div>
      </div>
    )
  }
}
class About extends Component{
  render(){
    return(
      <div id="about" className="body">
        <h2>About Morgan</h2>
        <p>My name is Morgan. I moved to Colorado from New York in Janurary 2012. In December 2018, I will be taking a one way flight to Wellington, New Zealand. When I'm not building web apps or taking photos, I am either running, skiing, biking, or running some more. The outdoors is what pulled me out to Colorado. 
        <br />
        I received my Bachelors of Arts from Fort Lewis College in Durango, studying philosophy. While I do retain interest, philosophy has never interested me as a career path for me. Although, I do find the critical and analytical skills that I have developed from studying philosophy have helped me flourish in other fields, such as programming.</p>

        <h2>About Ludwig</h2>
        <p>The name Ludwig The Pig stems from one of favorite philosophers, Ludwig Wittegenstein. Ludwig just so happens to rhyme with pig. Hence, the name 'Ludwig the Pig'. Ludwig has developed his own persona and the curious visitor may catch a rare glance of him.</p>
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
      </footer>
    )
  }
}

export default App;