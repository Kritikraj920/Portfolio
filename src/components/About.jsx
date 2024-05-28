import React from 'react';
import photo from '../assets/photo.jpg';


const About = () => {
  return (
    <section id="about">
    <h2>About Me</h2>
    <img src={photo} alt="Personal" className="personal-photo" />
    <p>Short bio about yourself.</p>
    
  </section>
  );
}

export default About;
