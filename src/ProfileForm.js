import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import UserContext from "./userContext";

/**
 * Profile Form, all fields editable except for username
 * 
 * state:
 * - control component for form;
 * 
 * props:
 * - handleSave: Fn passed from app to set user in
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
      image_url: "",
  });
  
  useEffect(function setFormInfo() {
    if (currentUser) {
    setFormValues({...currentUser, password:""})
    }
  }, [currentUser]);


  function submitForm(evt) {
    evt.preventDefault();
    const multiFormData = new FormData();
    multiFormData.append("image_url", formValues.image_url);
    multiFormData.append("username", formValues.username);
    console.log("BEFORE OUR FOR LOOP", multiFormData.get("username"))
    for (let data of multiFormData.entries()) {
      console.log(data);
    }
    // try {
    //   handleUpdate(multiFormData);
    // } catch (err) {
    //   alert(err);
    // }
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormValues(fData => ({
      ...fData,
      [name]: value,
    }));
  }

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