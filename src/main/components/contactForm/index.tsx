import "./styles.css";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import { Button, TextField } from "@mui/material";
import Swal from "sweetalert2";
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

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    generateContactNumber();
    sendForm("default_service", "template_2ho7kjd", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire("Message Sent");
      },
      function (error) {
        console.log("FAILED...", error);
      }
    );
  };

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  //const handleReset = () => setTextValue("");

  return (
    <form className="form" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="contact_number" value={contactNumber} />
      <TextField label={"Name"} {...register("user_name")} />
      <br />
      <TextField label={"Email"} {...register("user_email")} />
      <br />
      <TextField
        label={"Message"}
        {...register("message")}
        multiline={true}
        minRows={6}
      />
      <br />
      <Button variant="contained" onClick={handleSubmit(onSubmit)}>
        Submit
      </Button>
      <br />
      {/* <Button variant="contained" onClick={handleReset}>
        Reset
      </Button> */}
    </form>
  );
};

export default ContactForm;
