const express = require("express");
const { Booking } = require("../models");

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const booking = await Booking.find({}, (err, data) => {
            if (err) { console.log(err) };
            res.status(200).send(data)
        });
    } catch (err) {
        console.log(err.message)
        res.status(500).send(err);
    }
});

module.exports = router;