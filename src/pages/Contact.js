import React from "react";
import plane from "../assets/contact-plane-vector.svg"

function Contact() {
  return (
    <div className="body-container"> 
      <h1 className="page-title">Contact</h1>
      <h2 className="contact-h2">I would love to hear from you!</h2>
      <img className="contact-plane" src={plane} alt='paper plane with dotted line trail'/>
      <div className="contact-p">
        <p>In lieu of a carrier pigeon or a paper airplane, I can be reached by email.</p>
        <p>kyrstin.kempf@gmail.com</p>
      </div>
    </div>
  );
}
export default Contact;