const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema({
   date: String,
   approved: Boolean,
   //relacionamento a qual user fez a soli
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    //e pra qual spot
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Spot"
    }
});

module.exports = mongoose.model('Booking', BookingSchema);