import React from "react";
import profile from "../images/full-profile.jpeg"
import aboutPhoto from "../images/about-photo-square.jpeg"

function About() {
  return (
    <div className="body-container"> 
        <h1 className="page-title">About</h1>
        <div>
          <p>I’m a full-stack software engineer based in Washington, DC. Welcome to my little corner of the cyber world.</p>
          <p>Some interests include...</p>
          {/* <img id="profile-img" src={profile} alt='Kyrstin'/> */}
          <img id="profile-img" src={aboutPhoto} alt='Kyrstin'/>
        </div>
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
  );
}
export default About;