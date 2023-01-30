
import { BrowserRouter as  Router, Routes, Route,   } from 'react-router-dom';
import './App.css';
import AuthPage from './pages/Auth';
import EventsPage from './pages/events';
import BookingsPage from './pages/bookings';
import Homepage from './pages/home'

function App() {
  return(
    <Router>
        <Routes>
          <Route path="/" element={<Homepage />}/>
          <Route path="/auth" element={<AuthPage/>}/>
          <Route path="/events" element={<EventsPage/>}/>
          <Route path="/bookings" element={<BookingsPage/>}/>
        </Routes>
      </Router>
    );
  }

  export default App;
