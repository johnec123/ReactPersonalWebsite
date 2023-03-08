import "./styles.css";

import { Button } from "@mui/material";
import React from "react";
import Swal from "sweetalert2";

const ContactText: React.FC = () => {
  return (
    <div className="contactText-wrapper">
      <h1>Fill out the form</h1>
      <h1>or</h1>
      <h1>shoot me an email:</h1>
      <Button
        onClick={() => {
          navigator.clipboard.writeText("johnecorry@gmail.com");
          Swal.fire("Copied to clipboard");
        }}
        sx={{ color: "black" }}
      >
        johnecorry@gmail.com
      </Button>
    </div>
  );
};

export default ContactText;
