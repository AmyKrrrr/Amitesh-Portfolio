import React from "react";
import "./About.css";
import TitledCard from "./TitledCard";
import Highlighted from "./Highlighted";

import { SiLeetcode } from "react-icons/si";
import { SiCodeforces } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { SiCodechef } from "react-icons/si";

const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="about-text-content">
        <h2 className="about-heading">About me:</h2>
        <p className="about-description">
          Hello! I'm Amitesh, a Computer Science student at GITAM, Hyderabad,
          who loves turning ideas into reality with code.
        </p>
        <p className="about-description">
          I spend my days building fun projects with React, JavaScript.
        </p>
        <p className="about-description">
          Right now, I'm on an exciting journey to expand my toolkit. I'm diving
          into backend development with Node.js and consistently sharpening my
          problem-solving skills with Data Structures and Algorithms.
        </p>
        <p className="about-description">
          I'm also comfortable working with Python (especially with libraries
          like Pandas and NumPy), C++, and SQL.
        </p>
        <p className="about-description">
          When I'm not coding, you can find me dabbling in graphic design. I'm
          always excited to collaborate on cool projects, so let's connect and
          build something awesome!
        </p>
        {/* <p className="about-description">
          <span className="high">Amitesh Kar</span> is a second-year{" "}
          <span className="high">Computer Science and Engineering</span> student
          at <span className="high">GITAM University, Hyderabad</span>, with a
          strong interest in building impactful tech solutions. He has
          experience in <span className="high">frontend web development</span>,
          having worked on various personal projects using HTML, CSS,
          JavaScript, and React. His programming toolkit also includes{" "}
          <span className="high">C, C++, Python, SQL, MySQL</span>, and
          libraries like <span className="high">Pandas and NumPy</span>.
        </p>
        <p className="about-description">
          Currently, Amitesh is expanding his backend knowledge by{" "}
          <span className="high">learning Node.js</span> and consistently
          improving his skills in{" "}
          <span className="high">Data Structures and Algorithms</span>. With a
          long term goal to excel in web development and dive deep into the
          field of{" "}
          <span className="high">
            Artificial Intelligence and Machine Learning
          </span>
          , he is committed to continuous learning and growth.
        </p>
        <p className="about-description">
          Beyond coding, he also has a creative side, with decent experience in{" "}
          <span className="high">graphic designing</span>. Amitesh is always
          enthusiastic about collaborating on innovative projects and
          contributing meaningfully to the tech community.
        </p> */}
      </div>
      <div className="image-and-icons-container">
        <TitledCard
          imageSrc="images/avatar.jpg"
          altText=""
          captionText=""
          containerHeight="300px"
          containerWidth="300px"
          imageHeight="300px"
          imageWidth="300px"
          rotateAmplitude={12}
          scaleOnHover={1.2}
          showMobileWarning={false}
          showTooltip={true}
          displayOverlayContent={true}
          overlayContent={
            <p className="tilted-card-demo-text">Amitesh Kar - CSE</p>
          }
        />
        <div id="icon-container" className="flex mt-10">
          <a
            href="https://leetcode.com/Amykrrrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLeetcode />
          </a>
          <a
            href="https://codeforces.com/profile/amykrrrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodeforces />
          </a>
          <a
            href="https://auth.geeksforgeeks.org/user/amites3dfd"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGeeksforgeeks />
          </a>
          <a
            href="https://www.codechef.com/users/amykrrrr"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiCodechef />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
