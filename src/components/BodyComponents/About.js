import React, { Component } from 'react';
import classNames from 'classnames';

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

export default About;