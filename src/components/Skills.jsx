import React from "react";
import "./Skills.css";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";
import {
  SiCplusplus,
  SiPandas,
  SiNumpy,
  //   SiMatplotlib,
  SiNotion,
  SiAdobephotoshop,
  SiCanva,
  SiMysql,
} from "react-icons/si";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2 className="skills-heading">💻 Technical Skills</h2>
      <hr className="divider" />

      {/* --- Languages & Data Science Subheading --- */}
      <h3 className="skills-subheading">Languages & Data Science</h3>
      <div className="skills-grid">
        <div className="skill-card skill-cpp">
          <SiCplusplus />
          <span>C++</span>
        </div>
        <div className="skill-card skill-python">
          <FaPython />
          <span>Python</span>
        </div>
        <div className="skill-card skill-java">
          <FaJava />
          <span>Java</span>
        </div>
        <div className="skill-card skill-sql">
          <SiMysql />
          <span>SQL</span>
        </div>
        <div className="skill-card skill-numpy">
          <SiNumpy />
          <span>Numpy</span>
        </div>
        <div className="skill-card skill-pandas">
          <SiPandas />
          <span>Pandas</span>
        </div>
        {/* <div className="skill-card skill-matplotlib">
          <SiMatplotlib />
          <span>Matplotlib</span>
        </div> */}
      </div>

      {/* --- Web Development Subheading --- */}
      <h3 className="skills-subheading">Web Development</h3>
      <div className="skills-grid">
        <div className="skill-card skill-html">
          <FaHtml5 />
          <span>HTML5</span>
        </div>
        <div className="skill-card skill-css">
          <FaCss3Alt />
          <span>CSS3</span>
        </div>
        <div className="skill-card skill-js">
          <FaJsSquare />
          <span>JavaScript</span>
        </div>
        <div className="skill-card skill-react">
          <FaReact />
          <span>React</span>
        </div>
        {/* <div className="skill-card skill-node">
          <FaNodeJs />
          <span>Node.js</span>
        </div> */}
      </div>

      {/* --- Utilities Subheading --- */}
      <h3 className="skills-subheading">Utilities</h3>
      <div className="skills-grid">
        <div className="skill-card skill-git">
          <FaGitAlt />
          <span>Git</span>
        </div>
        <div className="skill-card skill-github">
          <FaGithub />
          <span>GitHub</span>
        </div>
        <div className="skill-card skill-notion">
          <SiNotion />
          <span>Notion</span>
        </div>
        <div className="skill-card skill-photoshop">
          <SiAdobephotoshop />
          <span>Photoshop</span>
        </div>
        <div className="skill-card skill-canva">
          <SiCanva />
          <span>Canva</span>
        </div>
      </div>
    </section>
  );
};

export default Skills;
