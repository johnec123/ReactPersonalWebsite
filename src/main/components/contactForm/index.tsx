import "./styles.css";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
init("R9_WiWNdzaK_iGbJC");

type Inputs = {
  user_name: string;
  user_email: string;
  message: string;
};

const ContactForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const [contactNumber, setContactNumber] = useState("000000");

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);

    generateContactNumber();
    sendForm("default_service", "template_2ho7kjd", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="contact_number" value={contactNumber} />
      <input type="text" placeholder="Name" {...register("user_name")} />
      <br />
      <input type="email" placeholder="Email" {...register("user_email")} />
      <br />
      <textarea placeholder="Message" {...register("message")} />
      <br />
      <input type="submit" value="Send" />
    </form>
  );
};

export default ContactForm;
