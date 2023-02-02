import React, {useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../components/utils/mutations'

import Auth from '../components/utils/auth'

const Login = (props) => {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login, {error, data}] = useMutation(LOGIN_USER); 

    // update state based on form input changes
    const handleInputChange = (event) => {
        const { name, value} = event.target;

        setFormState({
            ...formState,
            [name]: value,
        })
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

        // clear form values
        setFormState({
            email: '',
            password: '',
        });
    };



    return(
       
        <form className='auth-form'>
            <div className='form-control' onSubmit={handleFormSubmit}>
                <label htmlFor='email'>E-mail</label>
                
                <input 
                type="email"
                onChange={handleInputChange} 
                id="email" 
                value={formState.email}/>
            
            </div>

            <div className='form-control'>
                <label htmlFor='password'>Password</label>
                <input 
                type="password" 
                onChange={handleInputChange}
                id="password" 
                value={formState.password}/>
            </div>

            <div className='form-actions'>
                
                <button type="submit">Submit</button>
                <button type="button">Switch to Signup</button>
            
            </div>
            </form>
                  
        
    ) 
    
       

}

export default Login;