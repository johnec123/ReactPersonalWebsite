import "./styles.css";

import React, { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { init, sendForm } from "emailjs-com";
import { Alert, Button, TextField } from "@mui/material";
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
    formState: { errors },
  } = useForm<Inputs>();
  const [contactNumber, setContactNumber] = useState("000000");

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    generateContactNumber();
    sendForm("default_service", "template_2ho7kjd", "#contact-form").then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        Swal.fire({
          title: "Message Sent",
          confirmButtonText: "Ok",
          confirmButtonColor: "black",
        });
      },
      function (error) {
        console.log("FAILED...", error);
        Swal.fire("Message Failed");
      }
    );
  };

  const generateContactNumber = () => {
    const numStr = "000000" + ((Math.random() * 1000000) | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  };

  return (
    <form className="form" id="contact-form" onSubmit={handleSubmit(onSubmit)}>
      <input type="hidden" name="contact_number" value={contactNumber} />
      {errors.user_name && errors.user_name.type === "required" && (
        <Alert severity="error">Name is required</Alert>
      )}
      {errors.user_name && errors.user_name.type === "maxLength" && (
        <Alert severity="error">Too many characters entered</Alert>
      )}
      <TextField
        label={"Name"}
        aria-invalid={errors.user_name ? "true" : "false"}
        {...register("user_name", { required: true, maxLength: 30 })}
        sx={{
          "& label.Mui-focused": {
            color: "black",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },
        }}
      />
      <br />
      {errors.user_email && errors.user_email.type === "required" && (
        <Alert severity="error">Email is required</Alert>
      )}
      {errors.user_email && errors.user_email.type === "pattern" && (
        <Alert severity="error">Email address is not valid</Alert>
      )}
      <TextField
        label={"Email"}
        aria-invalid={errors.user_email ? "true" : "false"}
        {...register("user_email", { required: true, pattern: /\S+@\S+\.\S+/ })}
        sx={{
          "& label.Mui-focused": {
            color: "black",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },
        }}
      />
      <br />
      {errors.message && errors.message.type === "required" && (
        <Alert severity="error">Message is required</Alert>
      )}
      {errors.message && errors.message.type === "maxLength" && (
        <Alert severity="error">Too many characters entered</Alert>
      )}
      <TextField
        label={"Message"}
        aria-invalid={errors.message ? "true" : "false"}
        {...register("message", { required: true, maxLength: 180 })}
        multiline={true}
        minRows={6}
        sx={{
          "& label.Mui-focused": {
            color: "black",
          },
          "& .MuiOutlinedInput-root": {
            "&.Mui-focused fieldset": {
              borderColor: "black",
            },
          },
        }}
      />
      <br />
      <Button
        variant="contained"
        onClick={handleSubmit(onSubmit)}
        sx={{
          color: "white",
          backgroundColor: "black",
          "&:hover": {
            backgroundColor: "white",
            color: "black",
          },
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default ContactForm;
