import React, { Component } from 'react';
//image imports
import brand from '../img/favicon.png';

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

export default Navbar;