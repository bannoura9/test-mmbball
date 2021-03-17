const mongoose = require("mongoose");
const db = require("../models");
// This file empties the Books collection and inserts the books below
mongoose.connect(
  // process.env.MONGODB_URI || "mongodb+srv://MileHighCoder:radiantrebel15@milehighcoder@cluster0.pqexv.mongodb.net/mmbballDB?retryWrites=true&w=majority"
  "mongodb+srv://Jambi462:Jambi462@cluster0.mp3ei.mongodb.net/mmbballDB?retryWrites=true&w=majority"
  , {
    useNewUrlParser: true,
    useFindAndModify: false
  }
);

const userSeed = [{
  email: "example1@gmail.com",
  name: "Lebron James",
  picture: "link?",
  workouts: [{
    dateTime: {
      start: "2021-03-21T15:00:00.000+00:00",
      end: "2021-03-21T16:00:00.000+00:00",
    },
    date: "Sunday, March 21st",
    time: "9:00 AM to 10:00 AM",
    location: "Rocky Mountain Christian Church",
    address: "5860 Majestic St, Frederick, CO 80504"
  },
  {
    dateTime: {
      start: "2021-03-22T17:00:00.000+00:00",
      end: "2021-03-22T18:00:00.000+00:00",
    },
    date: "Monday, March 22nd",
    time: "11:00 AM to 12:00 PM",
    location: "Rocky Mountain Christian Church",
    address: "5860 Majestic St, Frederick, CO 80504"
  },
  {
    dateTime: {
      start: "2021-03-24T15:00:00.000+00:00",
      end: "2021-03-24T16:00:00.000+00:00",
    },
    date: "Thursday, March 24th",
    time: "9:00 AM to 10:00 AM",
    location: "Rocky Mountain Christian Church",
    address: "5860 Majestic St, Frederick, CO 80504"
  }]
},
{
  email: "example2@gmail.com",
  name: "Allen Iverson",
  picture: "link?",
  workouts: [{
    dateTime: {
      start: "2021-03-20T15:00:00.000+00:00",
      end: "2021-03-20T16:00:00.000+00:00",
    },
    date: "Saturday, March 20th",
    time: "9:00 AM to 10:00 AM",
    location: "Rocky Mountain Christian Church",
    address: "5860 Majestic St, Frederick, CO 80504"
  },
  {
    dateTime: {
      start: "2021-03-23T16:00:00.000+00:00",
      end: "2021-03-23T17:00:00.000+00:00",
    },
    date: "Tuesday, March 23nd",
    time: "10:00 AM to 11:00 PM",
    location: "Rocky Mountain Christian Church",
    address: "5860 Majestic St, Frederick, CO 80504"
  }]
}];


db.User.create(userSeed)
  // .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data);
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
