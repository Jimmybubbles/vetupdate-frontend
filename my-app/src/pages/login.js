import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LOGIN } from '../utils/mutations'
import Auth from '../utils/auth'

export default function Login({changeAuth}) {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, { error }] = useMutation(LOGIN);



    const handleChange = (event) => {
        const { name, value } = event.target;
        
        setFormState({
            ...formState,
            [name]: value,
        });
    };

    const handleFormSubmit = async (event) => {
      event.preventDefault();

      try { 
        const { data } = await login({
          variables: { ...formState },
        });

        const auth = new Auth()
        auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }

      // clear form values
      setFormState({
        email: "",
        password: ""
      });
  };

    return (
        <div className>
          <Link to="/signup">← Go to Signup</Link>
    
          <h2>Login</h2>
          <form onSubmit={handleFormSubmit}>
            <div >
              <label htmlFor="email">Email address:</label>
              <input
                placeholder="youremail@test.com"
                name="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="pwd">Password:</label>
              <input
                placeholder="******"
                name="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
              />
            </div>
            {error ? (
              <div>
                <p>The provided credentials are incorrect</p>
              </div>
            ) : null}
            <div>
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      );
    }
