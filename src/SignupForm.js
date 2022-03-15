import React from "react";
import { useState } from "react";
import { useHistory } from 'react-router-dom';

/**
 * 
 * state:
 * - control component for form;
 * 
 * props:
 * - handleSignup: Fn passed from app to set user in
 * localstorage and provide context.
 * 
 * Routes --> SignForm
 */
function SignupForm({handleSignup}) {
  console.log("SignupForm rendered");

//   const history = useHistory();

  const [formValues, setFormValues] = useState({
    username: "",
    password: "",
    firstname: "",
    lastname: "",
    email: "",
  });

  async function submitForm(evt) {
    evt.preventDefault();
    try {
      await handleSignup(formValues);
      //history.push('/');
    } catch (err) {
      alert(err);
    }
  }

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
      <label htmlFor="firstname">First:</label>
      <input
        id="firstname"
        name="firstname"
        value={formValues.firstname}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="lastname">Last:</label>
      <input
        id="lastname"
        name="lastname"
        value={formValues.lastname}
        onChange={handleChange}
        required
      />
      <br />
      <label htmlFor="email">Email:</label>
      <input
        id="email"
        name="email"
        value={formValues.email}
        onChange={handleChange}
        required
      />
      <br />
      <button>Sign Up!</button>
    </form>
  )

}

export default SignupForm;