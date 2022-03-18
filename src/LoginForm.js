import React, { useState } from "react";
import { useNavigate, Navigate, Routes, Route } from "react-router-dom";

/**
 * Login Form Component
 * 
 * state:
 * - formValues: control component for form
 * 
 * props:
 * - handleLogin: Fn passed from app to set a new token.
 * 
 * Routes --> LoginForm
 */

function LoginForm({handleLogin}) {
  console.log("LoginForm rendered");

  const navigate = useNavigate();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
  });

  /** Upon submit, calls parent function to login users */
  async function submitForm(evt) {
    evt.preventDefault();
    try {
      await handleLogin(formValues);
      navigate("/profile")
    } catch (err) {
      alert(err);
    }
  }

  /** Updates state with form input value */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValues(fData => ({
      ...fData,
      [name]: value,
    }));
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="username">Username:</label>
      <input
        id="username"
        name="username"
        value={formValues.username}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        id="password"
        name="password"
        type="password"
        value={formValues.password}
        onChange={handleChange}
        required
      />
      <br />
      <button>Login!</button>
    </form>
  )
}

export default LoginForm;