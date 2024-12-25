import React from "react";
import "./css/About.css"; // Link to the corresponding CSS file
import meImage from 'D:/react/portfolio1/src/assets/images/me.jpeg'


const About = () => {
  return (
    <section id="about">
      <div className="about container">
        <div className="col-left">
          <div className="about-img">
            <img
              src={meImage}
              alt="Chirayu S.M"
            />
              
          </div>
       
        </div>
        <div className="col-right">
          <h1 className="section-title">
            About <span>me</span>
          </h1>
          <h2>Always a "STUDENT"</h2>
          <p>
          I’m Chirayu, a passionate software developer with over 1.5 years of experience at Craft Silicon. I find joy in solving problems through code and exploring the fascinating world of technology. For me, coding is more than just work—it’s an art that turns ideas into impactful solutions. As a lifelong learner, I embrace every challenge as an opportunity to grow, adapt, and create. The title 'student' is one I proudly wear, always ready to learn and evolve with the ever-changing tech landscape.
          </p>
          <a
            href="https://drive.google.com/file/d/156hWW8UrkfIlEc0aRKgJaWKYx9EczMhx/view?usp=sharing"
            className="cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
