import React from "react";
import "./View.css";

const View = (props) => {
  return (
    <div>
      <h1>This is your input:</h1>
      <p placeholder="Enter First Name">{props.firstname}</p>
      <p placeholder="Enter Last Name">{props.lastname}</p>
      <p placeholder="Enter Phone Number">{props.number}</p>
      <p placeholder="Enter Email">{props.email}</p>
      <p placeholder="Other">{props.roles}</p>
      <p placeholder="Your Message here">{props.message}</p>
    </div>
  );
};

export default View;
