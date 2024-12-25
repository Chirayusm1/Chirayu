import React from "react";
import "./css/Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
  <div className="footer-container">
    <h1 className="footer-name">Chirayu <span>S.M</span></h1>
    <div className="social-icons">
      <a href="https://github.com/your-profile" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/color/48/000000/github.png" alt="GitHub" />
      </a>
      <a href="https://linkedin.com/in/your-profile" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/color/48/000000/linkedin.png" alt="LinkedIn" />
      </a>
      <a href="https://instagram.com/your-profile" target="_blank" rel="noopener noreferrer">
        <img src="https://img.icons8.com/color/48/000000/instagram-new.png" alt="Instagram" />
      </a>
    </div>
    <p>&copy; 2024 Chirayu S.M. All rights reserved.</p>
  </div>
</footer>

  
  );
};

export default Footer;
