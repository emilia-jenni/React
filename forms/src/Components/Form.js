import React from "react";

const Form = () => {
  return (
    <form>
      <label HTMLfor="firstname">First Name</label>
      <input type="text" id="firstname" name="firstname" required />
      <label HTMLfor="lastname">Lastname</label>
      <input type="text" id="lastname" name="lastname" required />
      <label HTMLfor="phone">Phone number</label>
      <input type="number" id="phone" name="number" required />
      <label HTMLfor="email">Email</label>
      <input type="email" id="email" name="email" required />
      <label HTMLfor="roles">Roles</label>
      <select name="roles" id="roles">
        <option value="other">Other</option>
        <option value="teacher">Teacher</option>
        <option value="student">Student</option>
      </select>
      <label HTMLfor="message">Message</label>
      <textarea id="message" name="message" />
    </form>
  );
};

export default Form;
