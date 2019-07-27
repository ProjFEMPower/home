import React, {Component} from 'react';
import './Header.css';

const Header = () => {
  return (
    <div id="nav-bar">
      <a class="nav-link" href="/">Contact Us</a>
      <a class="nav-link" href="/">Join Us</a>
      <a class="nav-link" href="/">Mentors</a>
      <a class="nav-link" href="/">Curriculum</a>
      <a class="nav-link" href="/">Home</a>
    </div>
  );
}

export default Header;
