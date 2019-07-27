import React, {Component} from 'react';
import Header from './Header.js';
import './Home.css';

const Home = () => {
  return (
    <div id="home-body">
      <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
      <div id="title-block">
        <Header />
        <h1 id="title">Project FEMPower</h1>
        <p id="slogan">energize. educate. empower.</p>
      </div>
      <div id="mission-block">
        <h1>Our Mission</h1>
        <p>Diversity in STEM has been a problem for decades, especially for women. Project FEMPower aims to use a unique, project-based curriculum to introduce girls to a wide variety of disciplines in STEM, provide support and mentorship, and ultimately encourage them to become leading scientists and engineers.</p>
      </div>
      <div id="about-block">
      </div>
    </div>
  )
}

export default Home;
