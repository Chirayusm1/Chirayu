import React from "react";
import "./css/Skills.css";

const skills = [
  { category: "Languages", items: ["Java", "SQL", "Python", "JavaScript"] },
  { category: "Tools", items: ["Git", "GitHub", "Postman", "REST API"] },
  { category: "Databases", items: ["MySQL"] },
  { category: "Other", items: ["React", "HTML", "CSS", "Algorithm Design"] },
];

const Skills = () => {
  return (
    <section id="skills" className="skills">
        <div className="container">
            <div className="skills-header">
            <h1 className="section-title"><span>My</span> Strengths</h1>
            </div>
            <div className="skills-list">
            <div className="skill-item">
                <img src="https://img.icons8.com/color/96/000000/javascript--v1.png" alt="JavaScript" />
                <h3>JavaScript</h3>
            </div>            
            <div className="skill-item">
                <img src="https://img.icons8.com/color/96/000000/java-coffee-cup-logo--v1.png" alt="Java" />
                <h3>Java</h3>
            </div>
            <div className="skill-item">
                <img src="https://img.icons8.com/color/96/000000/net-framework.png" alt=".NET" />
                <h3>.NET</h3>
            </div>

            <div className="skill-item">
                <img src="https://img.icons8.com/color/96/000000/react-native.png" alt="React" />
                <h3>React</h3>
            </div>
            </div>
        </div>
    </section>
  );
};

export default Skills;
