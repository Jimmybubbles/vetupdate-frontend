import React, {useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../components/utils/mutations'

import Auth from '../components/utils/auth'

const Login = (props) => {
    const [formState, setFormState] = useState({
        email: '', 
        password: '' 
    });
    const [login, {error}] = useMutation(LOGIN_USER); 

    // update state based on form input changes
    const handleInputChange = (event) => {
        const { name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        });
    };

    // submit form
    const handleFormSubmit = async (event) => {
        event.preventDefault();
        console.log(formState);
        try {
            const { data } = await login({
                variables: { ...formState},
            });

            Auth.login(data.login.token);
        } catch (e) {
            console.error(e)
        }


    };



    return(
       
        <form className='auth-form'>
            <div className='form-control' onSubmit={handleFormSubmit}>
                <label htmlFor='email'>E-mail</label>
                
                <input 
                placeholder="you email"
                name="email"
                type="email"
                id="email" 
                onChange={handleInputChange} 
                />
            
            </div>

            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                
                <input 
                placeholder='******'
                name="password"
                type="password"
                id='pwd'
                onChange={handleInputChange} 
                />
            </div>

            <div className='form-actions'>
                
                <button type="submit">Submit</button>
                <button type="button">Switch to Signup</button>
             
            
            </div>
            </form>
                  
        
    ) 
    
       

}

export default Login;