const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat')

const bookingSchema = new Schema(
    {
        
        bookingReason: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 500
        },

        bookingAuthor: {
            type: String,
            required: true,
            trim: true
        },

        createdAt: {
            type: Date,
            default: Date.now,
            get: (timestamp) => dateFormat(timestamp)
        }
        

        
    }
)

const Booking = model('booking', bookingSchema)

module.export = Booking;