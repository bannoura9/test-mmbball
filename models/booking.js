const mongoose = require("mongoose");

const bookingSchema = new mongoose.Schema({
    dateTime: {
        start: {
            type: Date,
            required: true
        },
        end: {
            type: Date,
            required: true
        }
    },
    date: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    }
});

const Booking = mongoose.model("Booking", bookingSchema);

module.exports = Booking;