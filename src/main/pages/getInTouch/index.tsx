import "./styles.css";

import React from "react";
import ContactForm from "../../components/contactForm";

const GetInTouch: React.FC = () => {
  return (
    <div className="getInTouch-wrapper">
      <div className="getInTouch-aside">Get In Touch</div>
      <div className="getInTouch-aside">
        <ContactForm />
      </div>
    </div>
  );
};

export default GetInTouch;
