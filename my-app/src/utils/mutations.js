import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login(
    $email: String!
    $password: String!) {
      login(email: $email, password: $password) {
        token
        user {
         _id
         name
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser( 
    $firstName: String! 
    $lastName: String!
    $email: String!
    $password: String!) 
      {
        addUser(
        firstName: $firstName
        lastName: $lastName
        email: $email
        password: $password
        ) {
          token
          user {
            _id
            firstName
            lastName
            email
            password

      }
    }
  }
`;


export const ADD_BOOKING = gql`
  mutation addBooking(
    $bookingId: ID!
    $bookingReason: String! 
    $bookingAuthor: String!
    ) {
    addBooking(
      bookingId: $bookingId
      bookingReason: $bookingReason 
      bookingAuthor: $bookingAuthor) 
      {
      _id
      bookingReason
      bookingAuthor
      createdAt
    }
  }
`;

