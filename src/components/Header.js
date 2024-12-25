import React from "react";
import { Link } from "react-scroll";
import "./css/Header.css";
import { useEffect, useState } from "react";

const Header = () => {

  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? "scrolled" : ""}`}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#home">
              <h1 className="footer-name">Chirayu S<span>.</span>M</h1>

            </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="home" smooth={true} duration={300}>Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="about" smooth={true} duration={300}>About</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="projects" smooth={true} duration={300}>Projects</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="skills" smooth={true} duration={300}>Skills</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact" smooth={true} duration={300}>Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
