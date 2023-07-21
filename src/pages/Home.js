import React from "react";
import profileBw from '../images/profile-bw.jpeg'

function Home() {
  return (
    <div className="body-container"> 
      <div className="home-parent-block">
        <div className="home-child-block" id="one">
          <h1 id="home-intro">Hi, I’m Kyrstin Kempf.</h1>
          <p className="intro-p">I’m a full-stack software engineer based in Washington, DC. Welcome to my little corner of the cyber world.</p>
          <p className="intro-p">What makes me passionate about software engineering is the power to design the organization of information and how users interact with it.</p>
        </div>
        <div className="home-child-block" id="two">
          <img id="profile-img" src={profileBw} alt='Kyrstin'/>
        </div>
      </div>
    </div>
  );
}
export default Home;