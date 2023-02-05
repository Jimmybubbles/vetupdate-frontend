import React from 'react';

// import use params hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import { QUERY_BOOKINGS } from '../utils/queries'

const EventsPage = () => {

    // use useparams to retrieve value of the route parameter 'bookingId'
    const { bookingId } = useParams();
    
    console.log(JSON.stringify(bookingId, null, 2))
    
    const { loading, data } = useQuery( QUERY_BOOKINGS, {
        variables: { bookingId: bookingId},
        
        
    });

    const bookings = data?.bookingId || {
        
    };
    console.log(JSON.stringify(bookings, null, 2))

    if (loading) {
        return <div>loading data..</div>
        
    }
    console.log(JSON.stringify(useParams, null, 2))
    return (
        <div className="my-3">
          <h3 className="card-header bg-dark text-light p-2 m-0">
            {bookings.bookingAuthor} <br />
            <span style={{ fontSize: '1rem' }}>
              booking was made at this date {bookings.createdAt}
            </span>
          </h3>
          <div className="bg-light py-4">
            <blockquote
              className="p-4"
              style={{
                fontSize: '1.5rem',
                fontStyle: 'italic',
                border: '2px dotted #1a1a1a',
                lineHeight: '1.5',
              }}
            >

              {bookings.bookingReason}
            </blockquote>
          </div>
        </div>
      );
    };

export default EventsPage;