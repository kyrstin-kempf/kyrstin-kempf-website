import React from "react";
import profileBw from '../images/profile-bw.jpeg'

function Home() {
  return (
    <div className="body-container"> 
        <h1 id="home-intro">Hi, I’m Kyrstin Kempf.</h1>
        <p className="intro-p">I’m a full-stack software engineer based in Washington, DC. Welcome to my little corner of the cyber world.</p>
        <p className="intro-p">What makes me passionate about software engineering is the power to design the organization of information and how users interact with it.</p>
        {/* <img id="profile-img" src={profile} alt='Kyrstin'/> */}
        <img id="profile-img" src={profileBw} alt='Kyrstin'/>
    </div>
  );
}
export default Home;