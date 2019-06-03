import React from 'react';
import contact from '../../img/contact-300w.jpg';

const Contact = () => (
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

export default Contact;