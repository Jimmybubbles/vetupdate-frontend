import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
    query allUsers {
        users {
            _id
            firstName
            lastName
            petName
        }
    }

`;

export const QUERY_SINGLE_USER = gql`

    query singleUser($userId: ID!) {
        user(userId: $userId) {
            _id
            firstName
            lastName
            petName
        }
    }

`

export const QUERY_BOOKINGS = gql`

query allBookings {
    booking {
        _id
        bookingReason
        bookingAuthor
    }
}
`