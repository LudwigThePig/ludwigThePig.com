import React, { Component } from 'react';
import coffee from '../../img/Coffee-700w.jpg'


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

export default Tech;