import React from 'react';
import { BrowserRouter, Route, Navigate, Routes } from 'react-router-dom';

import AuthPage from './pages/Auth';

import './App.css';

const App = () => {

    return(
      
      <BrowserRouter>
        <Routes>
          <Navigate from="/" to="auth" exact />
          <Route path="/auth" Component={AuthPage} />
          <Route path="/events" Component={null} />
          <Route path="/bookings" Component={null} />
        <h1> it Works! </h1>
        </Routes>
      </BrowserRouter>
    )
  }


export default App