import React from "react";

function ApplyForm() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h2>Admission Application Form</h2>
      <form style={{ maxWidth: "500px", margin: "0 auto", textAlign: "left" }}>
        <label>Name:</label>
        <input type="text" name="name" required style={{ width: "100%", margin: "10px 0" }} />

        <label>Email:</label>
        <input type="email" name="email" required style={{ width: "100%", margin: "10px 0" }} />

        <label>Course:</label>
        <select name="course" required style={{ width: "100%", margin: "10px 0" }}>
          <option value="cse">Computer Science</option>
          <option value="mech">Mechanical</option>
          <option value="elec">Electrical</option>
          <option value="civil">Civil</option>
        </select>

        <button type="submit" style={{ padding: "10px 20px", marginTop: "15px" }}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default ApplyForm;
