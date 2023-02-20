import "./styles.css";

import React from "react";
import CardBlock from "../../components/cardBlock";
import graduationPic from "../../../assets/images/Graduation.jpg";
import hikePic from "../../../assets/images/Hike.jpg";
import trophyPic from "../../../assets/images/Trophy.jpg";
import cartoonPic from "../../../assets/images/Cartoon.png";

const Me: React.FC = () => {
  return (
    <div className="me-wrapper">
      <CardBlock
        headerText="How I got where we are now"
        bodyText="I never thought I would end up as a full-stack engineer. 
        My journey started with a passion for problem-solving, but I had no idea what I wanted 
        to do with it. I would of been the 'Lego Kid' growing up, this along with living on a dairy farm led me to study Engineering in university. It was not all plain sailing from there as I found university tough 
        
        My journey as a full-stack engineer has been a challenging but rewarding one. I'm constantly pushing myself to learn new skills and stay up-to-date with the latest technologies. I believe that a strong work ethic, a passion for learning, and a commitment to excellence are the keys to success in this field.

        Whether you're a fellow developer, a potential client, or just someone interested in technology, I'm excited to share my experiences and knowledge with you. Welcome to my website!
        "
        image={cartoonPic}
      />
      <CardBlock
        headerText="Random fun facts"
        bodyText={
          <div className="funFacts">
            <ul>
              <li>I'm an avid traveler and have visited over 20 countries.</li>
              <li>
                I love reading, and my favorite book from 2022 is "Greenlights"
                by Matthew McConaughey
              </li>
              <li>
                I'm a DIY enthusiast and love working on personal projects
              </li>
              <li>
                I'm a huge fan of Gaelic football and have been playing in my
                local club since I was a child.
              </li>
              <li>
                I'm a passionate crossfitter and have been hitting the box for
                the past 5 years.
              </li>
            </ul>
          </div>
        }
        image={hikePic}
      />
      <CardBlock
        headerText="Core values"
        bodyText={
          <ul>
            <li>
              Accountability: I take ownership of my work and am accountable for
              my actions and decisions.
            </li>
            <li>
              Collaboration: I believe in working together with others to
              achieve shared goals and accomplish more than I could on my own.
            </li>
            <li>
              Integrity: I believe in honesty, transparency, and doing the right
              thing, even when no one is looking.
            </li>
            <li>
              Growth: I'm committed to continuous learning and personal
              development, both professionally and personally.
            </li>
            <li>
              Respect: I treat others with respect, kindness, and empathy, and
              value diversity and inclusivity in all areas of life.
            </li>
            <li>
              Balance: I believe in achieving a healthy work-life balance and
              taking care of my physical, mental, and emotional well-being.
            </li>
          </ul>
        }
        image={trophyPic}
      />
      <CardBlock
        headerText="Skills"
        bodyText={
          <div className="skills">
            <ul>
              <li>
                Front-end development: HTML, CSS, JavaScript, React, Angular
              </li>
              <li>Back-end development: Node.js, Python, Java</li>
              <li>Database management: SQL, PostgreSQL</li>
              <li>Other: AWS, CI/CD, TDD, Unit testing, Scum, Kanban</li>
            </ul>
            <ul>
              <li>
                Problem-solving: The ability to analyze complex problems and
                develop effective solutions.
              </li>
              <li>
                Communication: The ability to communicate effectively with team
                members, clients, and stakeholders.
              </li>
              <li>
                Adaptability: The ability to adapt to changing circumstances and
                adjust to new technologies and frameworks.
              </li>
              <li>
                Teamwork: The ability to work collaboratively with others to
                achieve shared goals.
              </li>
            </ul>
          </div>
        }
        image={graduationPic}
      />
    </div>
  );
};

export default Me;
