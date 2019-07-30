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
      <p class="desc">Over six months, students will work together in small groups to create and build solutions for the world. The program meets once every week on Saturday and is broken up into four topics, each of which lasts six weeks: science, technology, engineering, and math.</p>
      <h1 class="top">Girls will learn what it's like to be a...</h1>
      <div>
        <div class="topics" id="science">
          <h1>Scientist</h1>
          <table class="topic-table">
            <tr>
              <td>Biologist<span class="popup">All around us is one big overarching environment we call the biosphere. Biologists help to decipher what surrounds us in this biosphere and what vital processes all organisms share.</span></td>
              <td>Chemist<span class="popup">Alchemy may be proven false, but when it comes to mixing chemicals and potions, leave it to the chemist! Chemists study how substances interact with one another and are extraordinarily important to developing things such as medicine.</span></td>
            </tr>
            <tr>
              <td>Paleontologist<span class="popup">Do you remember the feeling you had as a kid when you learned about dinosaurs for the first time? The mysteries of the ancient world has long fascinated the general populace and paleontologists help uncover some of that mystery.</span></td>
              <td>Astrologist<span class="popup">The night sky is extremely breathtaking. Most of the time, we can’t even wrap our minds around what may be beyond our Earth. Astrologists take the sense of awe and peer into the stars to grow our understanding of the universe itself.</span></td>
            </tr>
            <tr>
              <td>Psychologist<span class="popup">There is a lot going on inside the brain of every human. Psychologists are specially designed for peering into the human mind and understanding its functions and the behavior that results from it.</span></td>
              <td>Forensic Scientist<span class="popup">Crime shows are always a blast to watch, but the work is no joke. Forensics help to decipher just exactly what happened at the crime scene with their thorough search of any incriminating evidence to be found.</span></td>
            </tr>
            <tr>
              <td>Gastronomist<span class="popup">The culinary world is at your fingertips! Food provides connection to different cultures and peoples and gastronomy is just the career for all you foodie lovers out there.</span></td>
              <td>Anthropologist<span class="popup">Human to human, we all can admit we’re a bit weird. But anthropologists help to understand our human condition, both in our distant past and predictions towards our near future.</span></td>
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
              <td>Data Scientist<span class="popup">Data scientists work with various fields: mathematics, statistics, and computer and information science. They extract meaning from data and are tasked with using various fields to decide how the data accumulated can best be used.</span></td>
              <td>Computer Engineer<span class="popup">Hardware or Software? That is the question. Computer engineers can utilize both coding and electrical engineering to get the job done.</span></td>
            </tr>
            <tr>
              <td>Database Administrator<span class="popup">There are specially designed rooms in tech companies that house servers upon servers for employees and the users of their product. Database administrators oversee the upkeep of these rooms and step into the role of problem solver when it is necessary.</span></td>
              <td>Product Manager<span class="popup">There always needs to be a visionary behind every product created. Product managers are responsible for just that. Their job is to clearly articulate the business value to the product team so they understand the intent behind the new product or product release.</span></td>
            </tr>
            <tr>
              <td>Game Developer<span class="popup">Gaming is a relatively recent phenomenon that has captured the imagination of kids and adults alike. Game developers have the freedom to make their dreams come to reality and craft games that could potentially leave a lasting impact in the gaming community, or simply provide happiness to those who find solace in games.</span></td>
              <td>UI/UX Designer<span class="popup">Usability and experience are always key when it comes to what makes or breaks a tech product. UI/UX designers create interfaces for a consumer to use and optimally their designs are a success.</span></td>
            </tr>
          </table>
        </div>
      </div>

      <div>
        <div class="topics" id="engineering">
          <h1>Engineer</h1>
          <table class="topic-table">
            <tr>
              <td>Architect<span class="popup">We may all dream of mansions and castles, but can we build it? Architects use their creativity to design and plan out homes and buildings for us all.</span></td>
              <td>Civil Engineer<span class="popup">We have the sky, we have the machine, and now we have the everyday application. Civil engineers help with our infrastructure in ways such as bridge construction and dam construction.</span></td>
            </tr>
            <tr>
              <td>Aerospace Engineer<span class="popup">We take for granted that in 1903 the first successful flight occurred. Aerospace Engineers are always working on how to design the best planes for our use as well as eventually crafting the best vehicles for space.</span></td>
              <td>Nuclear Engineer<span class="popup">The power to harness inescapable destructive force is in your hands. Nuclear engineers seek to help with the processes of nuclear fission and fusion.</span></td>
            </tr>
            <tr>
              <td>Mechanical Engineer<span class="popup">This is likely the cliche understanding of what engineering entails. Mechanical engineers work with, you guessed it, machines and other automated systems to ensure the proper use and processes are being carried out.</span></td>
              <td>Environmental Engineer<span class="popup">While renewables apply to alternative energy engineers, there is simply more to preservation. Environment engineers seek to protect human health, ecosystems, and enhance the world around us to ensure pollutants and other foul forces don’t lead to irreversible and damaging consequences.</span></td>
            </tr>
            <tr>
              <td>Alternative Energy Engineer<span class="popup">Go green! Alternative energy engineers help seek out clean and renewable energy sources to help combat the fossil fuels that are poisoning our planet.</span></td>
              <td>Electrical Engineer<span class="popup">Our cities are powered by electricity, and behind the scenes, works the engineer. Electrical engineers learn to solve electrical problems and improve the way electricity is used in our daily lives.</span></td>
            </tr>
          </table>
        </div>

        <div class="topics" id="math">
          <h1>Mathematician</h1>
          <table class="topic-table">
            <tr>
              <td>Cryptographer<span class="popup">During wars, the way to ensure that enemies wouldn’t get a message was to encode it. This job is still extremely vital as cryptographers specialize in the creation and solving of codes to keep data away from criminals and enemies.</span></td>
              <td>Economist<span class="popup">Money, money, money. We all love money, but does the typical person actually understand the ups and downs of micro and macro economics as a whole? Economists seek to understand the economy in a broad picture and can track trends to inform the public or their employer.</span></td>
            </tr>
            <tr>
              <td>Statistician<span class="popup">There are millions of formulas and statistics out there. Statisticians help you analyze that data and apply mathematical techniques to solve real world problems.</span></td>
              <td>Accountant<span class="popup">Accountants are important to ensure that a company is efficiently operating. They are trained to handle financial information and assess the records of their clients.</span></td>
            </tr>
            <tr>
              <td>Actuary<span class="popup">There is a risk to every investment you make. Actuaries help relieve some of that risk by compiling data to calculate insurance risks and analyze the consequences of that risk.</span></td>
              <td>Budget Analyst<span class="popup">Budgets are essential to proper planning. A budget analyst can determine if your budget is feasible or if adjustments need to be made.</span></td>
            </tr>
            <tr>
              <td>Market Researcher<span class="popup">Understanding how the market is trending and what works or doesn’t work is essential in making a big splash with your product. Market researchers help to field out all the questions and concerns you may have and help guide you to make the best move.</span></td>
              <td>Financial Analyst<span class="popup">Sustainability is valued in the business world. Financial analysts provide guidance to businesses as they start investing in stocks, bonds, and other investments, and assess the performance of these investments.</span></td>
            </tr>
          </table>
        </div>
      </div>

      <p class="desc">Whenever we begin a new topic, the first session is devoted to exploring the field as a whole. We dive into many different fields and careers and teach any basic knowledge required. Afterwards the fun begins!</p>
      <p class="desc">Students get into small groups of 2-4 and come up a project in a field of interest. Over the next 5 weeks, they work closely with mentors and student teachers to bring their idea to life, while continuing to hear from mentors about their career and work.</p>
      <h1 class="top">Sample Project Ideas</h1>

      <div>
        <div class="topics">
          <h1>Science</h1>
          <p>Build a power source and cook an egg</p>
          <p>Research and create a natural mosquito repellent</p>
          <p>Learn about forensic science and design your own crime scene</p>
          <p>Study and teach about the effect of coral reef damage on marine life</p>
        </div>

        <div class="topics">
          <h1>Technology</h1>
          <p>Design a game that spreads awareness about gender inequality</p>
          <p>Create an app to help people find apartments</p>
          <p>Design a commerce website for a company</p>
          <p>Use AI to control a camera system and interpret images</p>
        </div>
      </div>

      <div>
        <div class="topics">
          <h1>Engineering</h1>
          <p>Build a robot that can pick up trash on your command</p>
          <p>Draw sketches of your dream house and build a model</p>
          <p>Plan a neighborhood resistent to bad weather and floods</p>
          <p>Design a commercial plane for 10 passengers</p>
        </div>

        <div class="topics">
          <h1>Mathematics</h1>
          <p>Predict which cities will be the safest in 10 years using current data</p>
          <p>Study investing and pick stocks that will beat the market</p>
          <p>Analyze how codes have developed over centuries, and create your own puzzle</p>
          <p>Decide on the best insurance rates based on current customers' data</p>
        </div>
      </div>
    </div>
  );
}

export default Curriculum;
