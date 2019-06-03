import React, { Component } from 'react';

import drc from '../../img/drc-500w.jpg';
import rfi from '../../img/rf-500w.jpg';
import exercise from '../../img/exercise-300w.jpg';
import klackers from '../../img/klackers-300w.jpg';
import game from '../../img/game-300w.jpg';
import drum from '../../img/drum-300w.jpg';

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

export default Portfolio;