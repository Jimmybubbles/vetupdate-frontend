import React from 'react';
import { NavLink } from 'react-router-dom';

import '../Navigation/MainNavigation.css'


const mainNavigation = props => (
    <header className='main-navigation'>
        <div className='main-navigation_logo'>
            <h1>Vet Update</h1>
        </div>

        <nav className='main-navigation-items'>
            <ul>
                <li>
                    <NavLink to="/bookings">Bookings</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
                <li>
                    <NavLink to='/signup'>Signup</NavLink>
                </li>
                <li>
                    <NavLink to="/events">Events</NavLink>
                </li>
                <li>
                    <NavLink to="/logout">Logout</NavLink>
                </li>

            </ul>
        </nav>
    </header>
)

export default mainNavigation;