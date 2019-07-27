import React, {Component} from 'react';
import Header from './Header.js';
import './Home.css';

const Home = () => {
  return (
    <div id="home-body">
      <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
      <Header />
      <h1 id="title">Project FEMPower</h1>
      <p id="slogan">educate. empower. energize.</p>
    </div>
  )
}

export default Home;
