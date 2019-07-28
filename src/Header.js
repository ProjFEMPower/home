import React, {Component} from 'react';
import './Header.css';

const Header = () => {
  return (
    <div id="nav-bar">
      <a class="nav-link" href="/contact">Contact Us</a>
      <a class="nav-link" href="/join">Join Us</a>
      <a class="nav-link" href="/mentors">Mentors</a>
      <a class="nav-link" href="/curriculum">Curriculum</a>
      <a class="nav-link" href="/">Home</a>
    </div>
  );
}

export default Header;
