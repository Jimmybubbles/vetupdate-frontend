import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from "../components/utils/auth"
import { ADD_USER } from '../components/utils/mutations';

function Signup(props) {

  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);



  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        firstName: formState.firstName,
        lastName: formState.lastName,
        email: formState.email,
        password: formState.password
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.taget;
    setFormState({
      ...formState,
      [name]: value,
    })
  }

  return (
    <div>
      <Link to="login">Go to login!</Link>

      <h2>Signup!</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="firstName">First Name</label>
          <input
            placeholder='First'
            name="firstName"
            type="firstName"
            id="firstName"
            onChange={handleChange}
          />
        </div>

        <div>
          <label htmlFor='lastName'>Last Name:</label>
          <input
            placeholder="Last"
            name="lastName"
            type="lastName"
            id="lastName"
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
            onChange={handleChange}
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default Signup;