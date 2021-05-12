import React from "react";
import "./View.css";

const View = ({ firstname, lastname, phonenumber, message, role }) => {
  return (
    <div>
      <h1>This is your input:</h1>
      <div className="notepad">
        <p>First Name: {firstname}</p>
        <p>Last Name:{lastname}</p>
        <p>Phonenumber: {phonenumber}</p>
        <p>Role: {role}</p>
        <p>Message: {message}</p>
      </div>
    </div>
  );
};

export default View;
