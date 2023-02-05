const { AuthenticationError } = require('apollo-server-express');
const { User, Pet, Booking } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        
        user: async(parent, {userId}) => {
            return User.findOne({ _id: userId})
        },
        
        users: async () => {
            return User.find();
        },

        pet: async(parent, {petId}) => {
            return Pet.findOne({_id: petId})
        },

        booking: async( parent, { bookingId }) => {
            return Booking.findOne({ _id: bookingId })
        },

        bookings: async () => {
            return Booking.find().sort({ createdAt: -1})
        },

    },

    Mutation: {
        
        login: async (parent, {email, password}) => {
            const user = await User.findOne({ email });

            if (!user) {
                throw new AuthenticationError('incorrect credentials');
            }

            // create a correctpw variable with await password method attached to password
            const correctPw = await user.isCorrectPassword(password);

            if (!correctPw) {
                throw new AuthenticationError('Incorrect credentials');
            }

            const token = signToken(user)

            return { token, user };
        },
        
        addUser: async (parent, { firstName, lastName, pet, email, password }) => {
            const user = await User.create({ firstName, lastName, pet, email, password });
            const token = signToken(user);
            return { token, user };
          },

        addBooking: async (parent, { bookingReason, bookingAuthor }) => {
            return Booking.create({ bookingReason, bookingAuthor });
        },
        
        removeBooking: async(parent, {bookingId}) => {
            return Booking.findOneAndDelete({ _id: bookingId})
        }
    }
}

module.exports = resolvers;