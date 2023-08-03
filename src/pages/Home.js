import React from "react";
import profileBw from '../images/profile-bw.jpeg'

function Home() {
  return (
    <div className="body-container"> 
      <div className="home-parent-block">
        <div className="home-child-block" id="one">
          <h1 id="home-intro">Hi, I’m Kyrstin Kempf.</h1>
          <p className="intro-p">
            I’m a full-stack software engineer based in Washington, D.C. Welcome to my little corner of the cyber world.
          </p>
          <p className="intro-p">
          Software engineering allows me to pursue my passion for creating intentional spaces - simple, organized spaces that that maximize function without losing aesthetic value.
          </p>
        </div>
        <div className="home-child-block" id="two">
          <img id="profile-img" src={profileBw} alt='Kyrstin'/>
        </div>
      </div>
    </div>
  );
}
export default Home;