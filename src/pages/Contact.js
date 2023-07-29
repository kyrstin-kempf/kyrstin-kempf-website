import React, { useState } from "react";
import plane from "../assets/contact-plane-vector.svg"

function Contact() {
  const [copied, setCopied] = useState(true);

  const notification = copied ? null : <p id="email-notification">Copied to clipboard!</p>

  function copyToClipboard() {
    navigator.clipboard.writeText('kyrstin.kempf@gmail.com')
    setCopied(!copied)
    setTimeout(() => {
      setCopied(true);
    }, 1500);
  }

  return (
    <div className="body-container"> 
      <h1 className="page-title">Contact</h1>
      <h2 className="contact-h2">I would love to hear from you!</h2>
      <img className="contact-plane" src={plane} alt='paper plane with dotted line trail'/>
      <div className="contact-p">
        <p>In lieu of a paper airplane, I can be reached by email.</p>
        <button id="email-btn" onClick={copyToClipboard}>kyrstin.kempf@gmail.com</button>
        {notification}
      </div>
    </div>
  );
}
export default Contact;