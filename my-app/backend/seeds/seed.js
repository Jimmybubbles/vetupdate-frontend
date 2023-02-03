const db = require('../config/connection')
const { User, Booking, Pet} = require('../models')
const userSeeds = require('./userSeed.json')
const petSeeds = require('./petSeed.json')
const bookingSeeds = require('./bookingSeed.json')

db.once('open', async () => {
    try {
        await User.deleteMany({});
        await Booking.deleteMany({});
        await Pet.deleteMany({});

        await User.create(userSeeds)
        await Booking.create(bookingSeeds)
        await Pet.create(petSeeds)

        console.log('all done!')
        process.exit(0);
    } catch (err) {
        throw err;
    }
})