import React from "react";
import "./Contact.css";
import { Button } from '@mui/material';

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:matias_duro@hotmail.com">
        <Button>Mail Me: matias_duro@hotmail.com</Button></a>
    <a className="mailBtn" href="https://www.linkedin.com/in/matiasduro/">
        <Button>Follow Me: linkedin.com/in/matiasduro/</Button></a>
    </div>
  );
};

export default Contact;