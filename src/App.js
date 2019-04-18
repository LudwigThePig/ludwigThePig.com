import React, { Component } from 'react';
import styles from './App.scss';
import classNames from 'classnames';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fab } from '@fortawesome/free-brands-svg-icons'
//image imports
import brand from './img/favicon.png';
import perins from './img/perins-fire-300w.jpg'
import coffee from './img/Coffee-700w.jpg'
import drc from './img/drc-500w.jpg';
import rfi from './img/rf-500w.jpg';
import exercise from './img/exercise-300w.jpg';
import klackers from './img/klackers-300w.jpg';
import game from './img/game-300w.jpg';
import drum from './img/drum-300w.jpg';
import contact from './img/contact-300w.jpg';



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
    const spanStyle = {
      color: '#888',
      fontWeight: '100'
    }
    return(
      <div id="home" className="body">
      <div className='left-col'>
        <img src={perins} alt='perins peak on fire'></img>
      </div>
      <div className='right-col'>
          <h2>Howdy, my name is </h2>
          <h1>Morgan Galvin</h1>
          <h2 style={{textAlign: 'center'}}>the JavaScript Extraordinaire</h2> 
          <p>I am a full stack web developer living in Boulder, CO. On this site, you will find references to my work, credentials, and expertise. I am open to new opportunities here in Boulder, <br /> <span style={spanStyle}> or wherever the tech meets the mountains <span role="img">🏔💻</span>.</span>
          </p>
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
            <p>CLICK CREDENTIALS TO SEE MORE</p>
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
            </div>
        </div>
    )
    }
  }
}

class Portfolio extends Component{
  constructor(props){
    super(props);
    this.state = {
      websites: true
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(){
    this.setState({
      websites: !this.state.websites
    })
  }
  render(){
    if (this.state.websites){
      return(
        <div id="portfolio" className="body">
          <h1 className="header">Portfolio</h1>
           <div className="jumbo"> 
              <div className="left-col">
                <h1>Websites</h1>
                <h1 className="disabled" onClick={this.handleClick}>Projects</h1>
              </div>
              
              <div className='right-col'>
  
                <a href="https://www.roaringforkins.com/">
                  <div className="portfolio-wrapper">
                    <div className="link-wrapper">
                      <p>ROARING FORK INSURANCE</p>
                    </div>
                    <img src={rfi} alt="Roaring Fork Insurance"></img>
                  </div>
                </a>
                <a href="https://www.durangorunningclub.org/">
                  <div className="portfolio-wrapper">
                    <div className="link-wrapper">
                      <p> DURANGO RUNNING CLUB</p>
                    </div>
                    <img src={drc} alt="Durango Running Club"></img>
                  </div>
                </a>
  
              </div>
          </div>
        </div>
      )
    } else {
      return(
        <div id="portfolio" className="body">
          <h1 className="header">Portfolio</h1>
           <div className="jumbo"> 
              <div className="left-col">
                <h1 className="disabled" onClick={this.handleClick}>Websites</h1>
                <h1>Projects</h1>
              </div>
              
              <div className='grid'>
  
                <div className="proj-wrapper">
                  <a href="https://receptive-explanation.glitch.me/">
                    <img src={exercise} alt="Exercise Tracker"></img>
                    <p><span>Exercise Tracker</span><br /> built with Node, Express, Mongoose, and MongoDB</p>
                  </a>
                </div>

                <div className="proj-wrapper">
                  <a href="https://codepen.io/moegain/pen/WLGrqd">
                    <img src={drum} alt="Drum Machine"></img>
                    <p><span>Drum Machine</span><br /> built with React</p>
                  </a>
                </div>

                <div className="proj-wrapper">
                  <a href="/games/dancefloor.html">
                    <img src={game} alt="Markdown Previewer"></img>
                    <p><span>Falling Blocks Game</span><br /> built with HTML5 Canvas</p>
                  </a>
                </div>

                <div className="proj-wrapper">
                  <a href="https://codepen.io/moegain/pen/dQvYpa">
                    <img src={klackers} alt="Klackers the Game"></img>
                    <p><span>Klackers Game</span><br /> built with vanilla JavaScript</p>
                  </a>
                </div>


  
              </div>
          </div>
        </div>
      )
    }

  }
}
class About extends Component{
  constructor(props){
    super(props);
    this.state = {
      more: false
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({
      more: !this.state.more
    })
  }
 

  render(){
    if(!this.state.more){
      return(
      <div id="about">
        <h2>About Morgan</h2>
        <p>
            In 2012, I began studying philosophy and knew that I would not pursue it professionally. I knew that the critical and analytical skills that I would develop as a philosopher would guide me in whatever profession I decided to pursue.
            </p>
        <span id='more' onClick={this.handleClick}>See More</span>            

        <h2>About Ludwig</h2>
        <p>The name Ludwig The Pig stems from one of favorite philosophers, Ludwig Wittegenstein. Ludwig just so happens to rhyme with pig. Hence, the name 'Ludwig the Pig'. Ludwig has developed his own persona and the curious visitor may catch a rare glance of him.</p>
      </div>
    ) 
    } else {
      const longClasses = classNames('body', 'long');
    return(
      <div id="about" className={longClasses}>
        <h2>About Morgan</h2>
        <p>
            In 2012, I began studying philosophy and knew that I would not pursue it professionally. I knew that the critical and analytical skills that I would develop as a philosopher would guide me in whatever profession I decided to pursue.
            <br /><br />
            Fast forward to a February of 2018, I was building a website for my photography and I couldn't find the right template to use on Wix. So, I asked myself, how can I build this myself? That question rippled into questions about JavaScript, frameworks, databases, and internet protocols. It was clear that this was the line of work that I wanted to pursue.
            <br /><br />
            The challenges in programming and the challenge of learning how to program are similar to the problems in philosophy. That is what keeps me engaged and relevant. There is a lot for me to learn in tech, but there will always be more to learn and that is what I love about technology. It is a fast paced field that rewards people such as myself, who are quick and eager to learn.
            <br /><br />
            When I'm not coding away, I like to go for long runs, ride my bike, ski, or do anything outdoors. I race at the elite level in trail running. The process of training and competing is fun for me, but it has taught me a lot about persistence and being goal oriented.
          </p>
          <span id='more' onClick={this.handleClick}>See Less</span>            


        <h2>About Ludwig</h2>
        <p>The name Ludwig The Pig stems from one of favorite philosophers, Ludwig Wittegenstein. Ludwig just so happens to rhyme with pig. Hence, the name 'Ludwig the Pig'. Ludwig has developed his own persona and the curious visitor may catch a rare glance of him.</p>
      </div>
    )
    }
  }
}
class Contact extends Component{
  render(){
    return(
      <div id="contact" className="body">
        <div className="jumbo">
          <div className="left-col">
            <h1>Let's get in touch</h1>
            <p>Email: <a href="mailto:morgan@ludwigthepig.com">morgan@ludwigthepig.com</a></p>
            <p>Phone: <a href="tel:+6402102981349">+64 (0)21 - 029 813 39</a></p>
            <p>Wellington, New Zealand</p>
          </div>
        <div className="right-col">
          <img src={contact} alt="Morgan Galvin"></img>
        </div>
        </div>
        <p id="flaunt">This site was built with React, SCSS, and hosted on AWS!</p>

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