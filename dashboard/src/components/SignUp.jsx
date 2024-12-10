import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SignUp = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [formValidation, setFormValidation] = useState({
    usernameValid: false,
    emailValid: false,
    passwordValid: false,
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "username") {
      setFormValidation({ ...formValidation, usernameValid: value.length > 3 });
    } else if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      setFormValidation({ ...formValidation, emailValid: emailRegex.test(value) });
    } else if (name === "password") {
      setFormValidation({
        ...formValidation,
        passwordValid: value.length >= 6,
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formValidation.usernameValid &&
      formValidation.emailValid &&
      formValidation.passwordValid
    ) {
      try {
          const response = await axios.post("http://localhost:8080/signup", formData);
          if (response.status) {
            alert("Signup successful!");
            navigate("/"); // Redirect to the homepage
          }
      } catch (error) {
        console.error("Error during signup:", error);
        alert("Signup failed. Please try again.");
      }
    } else {
      alert("Please fix the errors in the form.");
    }
  };

  return (
    <div className="signup-container" style={{ maxWidth: "400px", margin: "50px auto" }}>
      <h2>SignUp on StockPilot</h2>
      <form onSubmit={handleSubmit}>
        {/* Username Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter your username"
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: formValidation.usernameValid ? "2px solid green" : "2px solid red",
              borderRadius: "5px",
            }}
          />
          <small
            style={{
              color: formValidation.usernameValid ? "green" : "red",
              fontSize: "12px",
            }}
          >
            {formValidation.usernameValid ? "Looks good!" : "Username must be at least 4 characters."}
          </small>
        </div>

        {/* Email Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: formValidation.emailValid ? "2px solid green" : "2px solid red",
              borderRadius: "5px",
            }}
          />
          <small
            style={{
              color: formValidation.emailValid ? "green" : "red",
              fontSize: "12px",
            }}
          >
            {formValidation.emailValid ? "Looks good!" : "Please enter a valid email."}
          </small>
        </div>

        {/* Password Field */}
        <div className="form-group" style={{ marginBottom: "20px" }}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter your password"
            style={{
              display: "block",
              width: "100%",
              padding: "10px",
              border: formValidation.passwordValid ? "2px solid green" : "2px solid red",
              borderRadius: "5px",
            }}
          />
          <small
            style={{
              color: formValidation.passwordValid ? "green" : "red",
              fontSize: "12px",
            }}
          >
            {formValidation.passwordValid
              ? "Looks good!"
              : "Password must be at least 6 characters."}
          </small>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          style={{
            backgroundColor: "green",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          SignUp
        </button>
      </form>
    </div>
  );
};

export default SignUp;
