import React from 'react';
import pic from './images/pic.jpeg';

const AboutMe = () => {
  return (
    <div className="about-me">
      <h2>About Me</h2>
      <div className="profile-info">
      <img src={pic}alt="Mulpuru Charishma" />
        <div className="details">
          <h3>MULPURU CHARISHMA</h3>
          <p>Profession: Web Developer</p>
          <p>Education: Bachelor's Degree in Computer Science</p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
