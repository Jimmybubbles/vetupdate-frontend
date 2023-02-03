const { AuthenticationError } = require('apollo-server-express');
const { User, Pet, Booking } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
    Query: {
        
        user: async(parent, {userId}) => {
            return user.findOne({ _id: userId})
        },
        
        users: async () => {
            return user.find();
        },

        booking: async( parent, { bookingId }) => {
            return booking.findOne({ _id: bookingId })
        },

        bookings: async( parent, { bookingId }) => {
            return Booking.find().sort({ createdAt: -1})
        }
    },

    mutation: {
        
        login: async (parent, {email, password}) => {
            const user = await user.findOne({ email });

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
        
        addUser: async (parent, args) => {
            const user = await user.create(args);
            const token = signToken(user);

            return { token, user };
        },

        addBooking: async (parent, { bookingReason, bookingAuthor }) => {
            return booking.create({ bookingReason, bookingAuthor });
        },
        
        removeBooking: async(parent, {bookingId}) => {
            return booking.findOneAndDelete({ _id: bookingId})
        }
    }
}

module.export = resolvers;