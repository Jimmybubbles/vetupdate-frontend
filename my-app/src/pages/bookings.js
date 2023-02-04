import React from 'react';
// import Auth from '../utils/auth'
// import { Link } from 'react-router-dom'
import '../pages/booking.css'

const BookingsPage = () => {

    return (
        <div>
            <h1>this is the Booking page</h1>
            <h3>you need to be logged in to make a booking</h3>

            {/* {Auth.loggedIn() ? ( */}

                <form action="" method="post">
                    <div className="elem-group">
                        <label htmlFor="name">Pets Guardian</label>
                        <input
                            type="text"
                            id="name"
                            name="visitor_name"
                            placeholder="John Doe"
                        />

                        <div className="elem-group">
                            <label htmlFor="elem-group">Check-in Date</label>
                            <input
                                type="date"
                                id="checkin-date"
                                name="checkin"
                                required />
                        </div>
                    </div>

                    <div>
                        
                        <div>
                            <div className="elem-group">
                                <label htmlFor="message">Reason for booking</label>
                                <textarea id="message" name="visitor_message" placeholder="Tell us anything else that might be important." required></textarea>
                            </div>
                            <button type="submit">Book The Rooms</button>
                        </div>
                    </div>
                </form>

            {/* ) : (
                <p>
                    You must be logged in to make a booking for your pet! Please {' '}
                    <Link to='/login'>Login</Link> or <Link to='/signup'></Link>
                </p>
            )} */}
        </div>
    )

}





export default BookingsPage;