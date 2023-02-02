import React from 'react';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { BrowserRouter as  Router, Routes, Route,   } from 'react-router-dom';
import './App.css';

import MainNavigation from './components/Navigation/main';
import Homepage from './pages/home'
import LoginPage from './pages/login';
import SignupPage from './pages/signup';
import EventsPage from './pages/events';
import BookingsPage from './pages/bookings';

// construct main graphql api endpoint
const httpLink = createHttpLink({
  uri: '/graphql',
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem('id_token');
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  //set up client to execute the 'authlink' middleware prior to making graphql requests
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
})






function App() {
  return(
    <ApolloProvider client={client}>
    <Router>
      <React.Fragment>
      <MainNavigation />
        <main className='main-content'>
        <Routes>
          <Route path="/" element={<Homepage/>}/>
          <Route path="/login" element={<LoginPage/>}/>
          <Route path="/signup" element={<SignupPage/>}/>
          <Route path="/events" element={<EventsPage/>}/>
          <Route path="/bookings" element={<BookingsPage/>}/>
        </Routes>
        </main>
        </React.Fragment>
      </Router>
      </ApolloProvider>
    );
  }

  export default App;
