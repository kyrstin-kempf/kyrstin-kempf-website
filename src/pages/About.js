import React from "react";
import aboutPhoto from "../images/about-photo-square.jpeg"

function About() {
  return (
    <div className="body-container"> 
        <h1 className="page-title">About</h1>
        <div className="about-parent-block">
          <div className="child-one">
            <img id="about-img" src={aboutPhoto} alt='Kyrstin'/>
          </div>
          <div className="child-two">
            <p>I’m a full-stack software engineer based in Washington, DC. Welcome to my little corner of the cyber world.</p>
            <p>Some interests include...</p>
          </div>
          <div className="child-three">
            <h2>Technical Languages</h2>
            <hr></hr>
            <ul>
              <li>JavaScript</li>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>Ruby</li>
              <li>Rails</li>
              <li>Redux</li>
            </ul>
            <p>And growing... :)</p>
          </div>
          <div className="child-four">
            <h2>Skills</h2>
            <hr></hr>
            <ul>
              <li>Figma</li>
              <li>Vector Images</li>
              <li>Drag & Drop Platforms (Wordpress.org / .com, Wix.com)</li>
              <li>SEO (Google Analytics, Page-Titles, Metadata)</li>
              <li>Writing (Copywriting, Blog Writing, Editing)</li>
            </ul>
          </div>
        </div>
    </div>
  );
}
export default About;