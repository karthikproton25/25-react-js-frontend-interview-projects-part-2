import { useState } from "react";
function FormValidation() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    username: "",
    password: "",
    email: "",
  });
  return (
    <div>
      <h1>Simple Form Validation</h1>
      <form>
        <div className="input-wrapper">
          <label htmlFor="username">User Name</label>
          <input
            type="text"
            name="username"
            placeholder="Enter your username"
          />
          <span>{errors?.username}</span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
