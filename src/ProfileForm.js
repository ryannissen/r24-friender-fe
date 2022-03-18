import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./userContext";

/**
 * Profile Form, all fields editable except for username and password
 * 
 * state:
 * - formValues: control component for form;
 * 
 * props:
 * - handleUpdate: Fn passed from app to update user in
 * localstorage and provide context.
 * 
 * Routes --> ProfileForm
 */

function ProfileForm({ handleUpdate }) {

  const { currentUser } = useContext(UserContext);

  const [formValues, setFormValues] = useState({
      username: "",
      firstname: "",
      lastname: "",
      email: "",
      location: "",
      hobbies: "",
      interests: "",
      friendradius: 0,
      password: "",
      image_url: "", //CR Maybe change name to image_file
  });
  
  useEffect(function setFormInfo() {
    if (currentUser) {
    setFormValues({...currentUser, password:""})
    }
  }, [currentUser]);


  /** Upon submit, creates new instance of FormData object and appends to
   * that new object
   * 
   * Then calls parent function with that new FormData instance
   */
  function submitForm(evt) {
    evt.preventDefault();
    const multiFormData = new FormData();
    // multiFormData.append("username", formValues.username);
    // multiFormData.append("firstname", formValues.firstname);
    // multiFormData.append("lastname", formValues.lastname);
    // multiFormData.append("email", formValues.email);
    // multiFormData.append("location", formValues.location);
    // multiFormData.append("hobbies", formValues.hobbies);
    // multiFormData.append("interests", formValues.interests);
    // multiFormData.append("friendradius", formValues.friendradius);
    // multiFormData.append("password", formValues.password);
    // multiFormData.append("image_url", formValues.image_url);
    
    for (let key in formValues){
      multiFormData.append(key, formValues[key])
    }

    try {
      handleUpdate(multiFormData);
    } catch (err) {
      alert(err);
      //CR This error wont get caught because we are not awawiting
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

  /** Updates state for file input */
  function handleImage(evt) {
    const {name} = evt.target;
    const value = evt.target.files[0];
    setFormValues(currData => ({
      ...currData,
      [name]: value,
    }))
  }

  return (
    <div>
      <h1>Update your profile {currentUser.firstname}</h1>
      <img src={currentUser?.image_url} alt="proflie"></img>
      <form onSubmit={submitForm}>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          name="username"
          value={formValues.username}
          onChange={handleChange}
          disabled={true}
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
        <label htmlFor="location">Location:</label>
        <input
          id="location"
          name="location"
          value={formValues.location}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="hobbies">Hobbies:</label>
        <input
          id="hobbies"
          name="hobbies"
          value={formValues.hobbies}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="interests">Interests:</label>
        <input
          id="interests"
          name="interests"
          value={formValues.interests}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="friendradius">Friend Radius:</label>
        <input
          id="friendradius"
          name="friendradius"
          value={formValues.friendradius}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          name="password"
          value={formValues.password}
          onChange={handleChange}
          required
        />
        <br />
        <label htmlFor="image_url">Image URL:</label>
        <input
          id="image_url"
          name="image_url"
          onChange={handleImage}
          type="file"
          required
        />
        <button>Save Changes!</button>
      </form>
    </div>
  )
}

export default ProfileForm;