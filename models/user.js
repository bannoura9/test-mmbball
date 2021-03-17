const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
  },
  name: String,
  picture: String,
  workouts: [
    {
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
    }
  ]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
