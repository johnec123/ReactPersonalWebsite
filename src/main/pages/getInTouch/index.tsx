import "./styles.css";

import React from "react";
import ContactForm from "../../components/contactForm";
import ContactText from "../../components/contactText";

const GetInTouch: React.FC = () => {
  return (
    <div className="getInTouch-wrapper">
      <div className="getInTouch-aside">
        <ContactText />
      </div>
      <div className="getInTouch-aside">
        <ContactForm />
      </div>
    </div>
  );
};

export default GetInTouch;
