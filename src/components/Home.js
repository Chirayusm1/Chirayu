import React from "react";
import "./css/Home.css";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="container text-center">
        <h2 className="display-4">Hello Peeps! I'm </h2>
        <h1 className="footer-name">Chirayu S<span>.</span>M</h1>

        {/* <p className="lead">A passionate software engineer crafting secure, stable, and high-quality solutions.</p>
        <a href="#about" className="btn btn-primary btn-lg mt-3">Learn More</a> */}
      </div>
    </section>
  );
};

export default Home;
