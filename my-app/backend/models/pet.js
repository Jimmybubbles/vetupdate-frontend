const { Schema, model } = require('mongoose')
const dateFormat = require('../utils/dateFormat');

const petSchema = new Schema({

            petOwner: {
                type: String,
                required: true,
                trim: true
    
            },
    
            petName: {
                type: String,
                required: true,
                trim: true
            },
    
            petAge: {
                type: Number,
                required: true
            },
    
            petSex: {
                type: String,
                required: true
            },
    
            petAnimalType: {
                type: String,
                require: true
            },
    
            petBreed: {
                type: String,
                require: true
            },
    
            createdAt: {
                type: Date,
                default: Date.now,
                get: (timestamp) => dateFormat(timestamp)
            },

            booking: [
                {
                    type: Schema.Types.ObjectId,
                    ref: 'Booking'
                }

            ]

})

const Pet = model('Pet', petSchema);

module.exports = Pet;