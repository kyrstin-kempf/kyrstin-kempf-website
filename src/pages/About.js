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
            <p>
              My journey into software engineering began in 2014 when I used a drag-and-drop platform to create a website for my mother's, then independent, real estate business. With a specific design in mind, I began dabbling in CSS and HTML to customize the generic theme. Fast forward a couple of years, I got really into the organization of data in spreadsheet software. I soaked up anything I could learn on formulas, conditional formatting, and filters. Over time, I pieced together that software engineering is the beatiful blend of these two elements - creative design and complex data organization. Once I knew this, the idea of pursuing software engineering was an itch that wouldn't go away. So, I joined a bootcamp!
            </p>
            <p>
              <b>TLDR;</b> I recently completed a software engineering bootcamp, and I am passionate about organizing information through thoughtful design.
            </p>
          </div>
          <div className="child-three">
            <h2 className="about-h2">Technical Languages</h2>
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
            <h2 className="about-h2">Skills</h2>
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