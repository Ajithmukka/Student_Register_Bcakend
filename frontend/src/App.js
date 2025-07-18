import React, { useState } from "react";
import axios from "axios";

function App() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    course: "",
  });

  const handleChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/api/register", student);
    alert("Student Registered!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="name" onChange={handleChange} placeholder="Name" />
      <input name="email" onChange={handleChange} placeholder="Email" />
      <input name="password" type="password" onChange={handleChange} placeholder="Password" />
      <input name="mobile" onChange={handleChange} placeholder="Mobile" />
      <input name="course" onChange={handleChange} placeholder="Course" />
      <button type="submit">Register</button>
    </form>
  );
}

export default App;
