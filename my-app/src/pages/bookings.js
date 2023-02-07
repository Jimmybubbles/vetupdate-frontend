import React, { useState} from 'react';
import Auth from '../utils/auth'
import { Link } from 'react-router-dom'
import { ADD_BOOKING } from '../utils/mutations';
import { useMutation } from '@apollo/client';
import '../pages/booking.css'



const BookingsPage = () => {

    // function requireAuth(nextState, replace, next) {
    //     if (!Auth.loggedIn) {
    //       replace({
    //         pathname: "/login",
    //         state: {nextPathname: nextState.location.pathname}
    //       });
    //     }
    //     next();
    //   }
  

    const [formState, setFormState] = useState({ 
        bookingReason: '',
        bookingAuthor: '',
        createdAt: ''
        


      });
      const [addBooking] = useMutation(ADD_BOOKING);
    
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
          const { data } = await addBooking({
            variables: {...formState},
          });
    
          const auth = new Auth()
          auth.login(data.addBooking.token);
        } catch (e) {
          console.log(JSON.stringify(e, null, 2))
        }
      }


    return (
        <div>
            <h1>Make a booking</h1>

            {/* {Auth.loggedIn() ? ( */}

                <form  onSubmit={handleFormSubmit}>
                    <div className="elem-group">
                        <label htmlFor="name">Pets Guardian</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder="your name"
                            value={addBooking.bookingAuthor}
                            onChange={handleChange}
                        />

                    <div className="elem-group">
                        <label htmlFor="elem-group">Check-in Date</label>
                        <input
                            type="date"
                            id="checkin-date"
                            name="checkin"
                            value={addBooking.createdAt}
                            onChange={handleChange}
                                
                            />
                        </div>
                    </div>

                    <div>
                        
                        <div>
                            <div className="elem-group">
                                <label htmlFor="message">Reason for booking</label>
                                <textarea 
                                    id="message" 
                                    type="text"
                                    name="visitor_message" 
                                    placeholder="Tell us anything else that might be important." 
                                    
                                    value={addBooking.bookingReason}
                                    onChange={handleChange}
                                    required>

                                    </textarea>
                            </div>
                            <button type="submit">make a booking</button>
                        </div>
                    </div>
                </form>

             {/* ) : ( */}
                <p>
                    You must be logged in to make a booking for your pet! Please {' '}
                    <Link to='/login'>Login</Link> or <Link to='/signup'>Signup</Link>
                </p>
            {/* )} */}
        </div>
    )

}





export default BookingsPage;