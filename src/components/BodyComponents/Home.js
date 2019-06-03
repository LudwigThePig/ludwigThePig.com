import React, { Component } from 'react';
import perins from '../../img/perins-fire-300w.jpg'



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

export default Home;