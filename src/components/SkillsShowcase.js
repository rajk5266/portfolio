import React from "react";
import { FaReact, FaNodeJs, FaPython, FaHtml5, FaCss3Alt, FaJs } from "react-icons/fa";

const skills = [
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-400" /> },
  { name: "Python", icon: <FaPython className="text-yellow-400" /> },
  { name: "HTML5", icon: <FaHtml5 className="text-orange-400" /> },
  { name: "CSS3", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-300" /> },
];

const SkillsShowcase = () => {
  return (
    <div className="container ">
      <div className="section-title">
        <h2 className="">My Skills</h2>
      </div>
      <div className="skills-container">

        <div className="skill nodejs">
          <div className="card">
            <div className="content-box">
              <div className="skill-desc">
                <h5 className="card-title">Node JS</h5>
                <img src="images/node.png" />
              </div>
              <p className="card-content">lorem ipssum dolor sit  lorem15 nfuf fnur fjr fr fru fr frfru fur fur </p>
              <span>See more</span>
            </div>
            <div className="date-box">
              <span>lorem</span>
              <span>lorem</span>
            </div>
          </div>

        </div>
        <div className="skill Express JS">
          <div className="card">
            <div className="content-box">
              <h1 className="card-title">Express JS</h1>
              <p className="card-content">lorem ipssum dolor sit  lorem15 nfuf fnur fjr fr fru fr frfru fur fur </p>
              <span>See more</span>
            </div>
            <div className="date-box">
              <span>lorem</span>
              <span>lorem</span>
            </div>
          </div>

        </div>
        <div className="skill nodejs">
          <div className="card">
            <div className="content-box">
              <h1 className="card-title">Node JS</h1>
              <p className="card-content">lorem ipssum dolor sit  lorem15 nfuf fnur fjr fr fru fr frfru fur fur </p>
              <span>See more</span>
            </div>
            <div className="date-box">
              <span>lorem</span>
              <span>lorem</span>
            </div>
          </div>

        </div>
        <div className="skill nodejs">
          <div className="card">
            <div className="content-box">
              <h1 className="card-title">Node JS</h1>
              <p className="card-content">lorem ipssum dolor sit  lorem15 nfuf fnur fjr fr fru fr frfru fur fur </p>
              <span>See more</span>
            </div>
            <div className="date-box">
              <span>lorem</span>
              <span>lorem</span>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};

export default SkillsShowcase;
