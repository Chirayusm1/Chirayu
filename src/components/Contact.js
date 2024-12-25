import React from "react";
import "./css/Contact.css";

const Contact = () => {
  return (
    <section id="contact">
        <div className="contact-container">
            <h1 className="section-title">
            Contact <span>Info</span>
            </h1>
            <div className="contact-items">
            <div className="contact-item">
                <img src="https://img.icons8.com/color/96/000000/phone.png" alt="Phone" />
                <h3>Phone</h3>
                <p>7259195212</p>
            </div>
            <div className="contact-item">
                <img src="https://img.icons8.com/color/96/000000/new-post.png" alt="Email" />
                <h3>Email</h3>
                <p>chirayusm.official@gmail.com</p>
            </div>
            <div className="contact-item">
                <img src="https://img.icons8.com/color/96/000000/address.png" alt="Address" />
                <h3>Address</h3>
                <p>Bangalore, Karnataka</p>
            </div>
            </div>
        </div>
    </section>


  );
};

export default Contact;
