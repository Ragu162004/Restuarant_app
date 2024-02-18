import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

function handleChange(){
  const email = document.getElementById("email");
   email.value="";
}
const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Newsletter" />
      <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
      <p className="p__opensans">And never miss latest Updates!</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="Enter your email address" id='email' />
      <button type="button" className="custom__button" onClick={handleChange}>Subscribe</button>
    </div>
  </div>
);

export default Newsletter;
