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

  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    validateInput(name, value);
  }

  function validateInput(getName, getValue) {
    switch (getName) {
      case "username":
        setErrors((prevErrors) => ({
          ...prevErrors,
          username:
            getValue.length < 3 ? "Username must be at least 3 characters" : "",
        }));
      
        break;
        case "email":
          setErrors((prevErrors) => ({
            ...prevErrors,
            email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(getValue)
              ? ""
              : "Invalid email address",
          }));
         
          break;
          case "password":
            setErrors((prevErrors) => ({
              ...prevErrors,
              password:
                getValue.length < 5 ? "Password must be at least 5 characters" : "",
            }));
    



      }
  
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
            value={formData.username}
            onChange={handleFormChange}
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
          <span>{errors?.email}</span>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
          />
          <span>{errors?.password}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default FormValidation;
