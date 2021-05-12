import React from "react";

import "./Form.css";

const Form = ({ submit, change }) => {
  return (
    <div className="form">
      <form onSubmit={submit}>
        <div>
          <label htmlFor="firstname">First Name</label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            onChange={change}
            required
          />
        </div>
        <div>
          <label htmlFor="lastname">Lastname</label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            onChange={change}
            required
          />
        </div>
        <div>
          <label htmlFor="phonenumber">Phone number</label>
          <input
            type="phonenumber"
            id="phonenumber"
            name="phonenumber"
            onChange={change}
            required
          />
        </div>
        <div>
          <label htmlFor="role">Role</label>
          <select name="role" onChange={change}>
            <option value="other">Other</option>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
        </div>
        <div>
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" onChange={change} required />
        </div>
        <input type="submit" value="Send" />
      </form>
    </div>
  );
};

export default Form;
