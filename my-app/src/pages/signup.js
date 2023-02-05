import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from "../utils/auth"
import { ADD_USER } from '../utils/mutations';

export default function Signup({changeAuth}) {

  const [formState, setFormState] = useState({ 
    firstName: '',
    lastName: '',
    email: '',
    password: '' 
  });
  const [addUser] = useMutation(ADD_USER);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addUser({
        variables: {...formState},
      });

      const auth = new Auth()
      auth.login(data.addUser.token);
    } catch (e) {
      console.error(e)
    }
  }


  return (
    <div>
      <span></span>
      <Link to="/login" onClick={changeAuth}>Go to login!</Link>

      <h2>Signup!</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder='First'
            name="firstName"
            type="text"
            id="firstName"
            value={formState.firstName}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="text"
            id="lastName"
            value={formState.lastName}
            onChange={handleChange}
          />

        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            placeholder='youremail@test.com'
            name="email"
            type="email"
            id="email"
            value={formState.email}
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='password'>Password</label>
          <input
            placeholder='******'
            name="password"
            type="password"
            id="password"
            value={formState.password}
            onChange={handleChange}
          />
        </div>

        <div>
          <button 
          type="submit"
          style={{ cursor: "pointer"}}
          >Submit</button>
        </div>



      </form>
    </div>
  )
}

