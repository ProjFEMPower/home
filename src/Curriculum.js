import React, {Component} from 'react';
import Header from './Header';
import './Curriculum.css'

const Curriculum = () => {
  return (
    <div id="curriculum-body">
      <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet" />
      <Header />
      <table id="heading-table">
        <tr>
          <td><h1 class="top">Project FEMPower</h1></td>
          <td><h1 class="top" id="part1">12 girls</h1></td>
          <td><h1 class="top" id="part2">24 weeks</h1></td>
          <td><h1 class="top" id="part3">4 projects</h1></td>
        </tr>
      </table>
      <p id="intro">Over six months, students will work together in small groups to create and build solutions for the world. The program meets once every week on Saturday and is broken up into four parts, each of which lasts six weeks: science, technology, engineering, and math.</p>
      <h1 class="top">Girls will learn what it's like to be a...</h1>
      <div>
        <div class="topics" id="science">
          <h1>Scientist</h1>
          <table class="topic-table">
            <tr>
              <td>Biologist</td>
              <td>Chemist</td>
            </tr>
            <tr>
              <td>Paleontologist</td>
              <td>Astrologist</td>
            </tr>
            <tr>
              <td>Psychologist</td>
              <td>Forensic Scientist</td>
            </tr>
            <tr>
              <td>Gastronomist</td>
              <td>Anthropologist</td>
            </tr>
          </table>
        </div>
        <div class="topics" id="tech">
          <h1>Techie</h1>
          <table class="topic-table">
            <tr>
              <td>Web Developer<span class="popup">These programmers build the websites that we visit every day, like Google and Amazon! You'll find them at any company, no matter what they do.</span></td>
              <td>Software Developer<span class="popup">Ever wonder how you can open the calculator on your phone or edit images on your computer? You can thank software developers! They build the programs and systems that allow all your favorite devices and apps to function.</span></td>
            </tr>
            <tr>
              <td>Data Scientist</td>
              <td>Computer Engineer</td>
            </tr>
            <tr>
              <td>Database Administrator</td>
              <td>Product Manager</td>
            </tr>
            <tr>
              <td>Game Developer</td>
              <td>UI/UX Designer</td>
            </tr>
          </table>
        </div>
      </div>
      <div>
        <div class="topics" id="engineering">
          <h1>Engineer</h1>
          <table class="topic-table">
            <tr>
              <td>Architect</td>
              <td>Civil Engineer</td>
            </tr>
            <tr>
              <td>Aerospace Engineer</td>
              <td>Nuclear Engineer</td>
            </tr>
            <tr>
              <td>Mechanical Engineer</td>
              <td>Environmental Engineer</td>
            </tr>
            <tr>
              <td>Alternative Energy Engineer</td>
              <td>Electrical Engineer</td>
            </tr>
          </table>
        </div>
        <div class="topics" id="math">
          <h1>Mathematician</h1>
          <table class="topic-table">
            <tr>
              <td>Cryptographer</td>
              <td>Economist</td>
            </tr>
            <tr>
              <td>Statistician</td>
              <td>Accountant</td>
            </tr>
            <tr>
              <td>Actuary</td>
              <td>Budget Analyst</td>
            </tr>
            <tr>
              <td>Market Researcher</td>
              <td>Financial Analyst</td>
            </tr>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
