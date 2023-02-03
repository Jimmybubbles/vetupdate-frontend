const { Schema, model } = require('apollo-server-express')

const petSchema = new Schema(
    
        {

            petOwner: {
                type: String,
                required: true,
                trim: true
    
            }
    
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
                type: Boolean,
                required: true
            },
    
            petType: {
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
                get: (timestamp) => dateFormat(timestamp).
            },

})

const pet = model('pet', petSchema);

module.export = pet;