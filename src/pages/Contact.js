import React from "react";
import plane from "../assets/contact-plane-vector.png"

function Contact() {
  return (
    <div className="body-container"> 
      <h1 className="page-title">Contact</h1>
      <h1>I would love to hear from you!</h1>
      <img src={plane} alt='paper plane with dotted line trail'/>
      <p>In lieu of a carrier pigeon or a paper airplane, I can be reached by email.</p>
      <p>kyrstin.kempf@gmail.com</p>
    </div>
  );
}
export default Contact;