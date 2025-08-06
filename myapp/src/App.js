import React from "react";
import "./RegistrationForm.css";

const RegistrationForm = () => {
  return (
    <div className="form-container">
      <h2>Student Registration Form</h2>
      <form>
        <label htmlFor="name">Full Name:</label>
        <input type="text" id="name" name="name" required />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />

        <label htmlFor="phone">Phone Number:</label>
        <input type="tel" id="phone" name="phone" required />

        <label htmlFor="dob">Date of Birth:</label>
        <input type="date" id="dob" name="dob" required />

        <label htmlFor="gender">Gender:</label>
        <select id="gender" name="gender">
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>

        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
