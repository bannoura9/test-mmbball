require("dotenv").config();
const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");
const routes = require("./routes");
const { google } = require("googleapis");
const db = require("./models");

// const calendar = google.calendar('v3')
const scopes = [
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/calendar",
];
const calendarId = "hotelmanager2021@gmail.com";
// const { oAuth2 } = google.auth;
// const jsonParser = require('body-parser');
const PORT = process.env.PORT || 3001;
const app = express();
// const apiRoutes = require("./routes/apiRoutes");
app.use(morgan("tiny"));
(async () => {
  try {
    // Connect to the Mongo DB
    await mongoose.connect(
      process.env.MONGODB_URI || "mongodb://localhost/mmbballDB",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );

    mongoose.connection.on("connected", () => {
      console.log("Mongoose is connected!");
    });

    // Define middleware here
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());

    // Use routes
    app.use("/", routes);

    // Serve up static assets (usually on heroku)
    // if (process.env.NODE_ENV === "production") {
    // app.use(express.static(__dirname + "/Project_3_Markup"));
    // }
    // above are MB's changes, below are OG
    if (process.env.NODE_ENV === "production") {
      app.use(express.static("client/build"));
    }
    app.put("/users", (req, res) => {
      db.User.updateOne(
        { _id: req.body.user._id },
        { $push: { workouts: req.body.session } }
      )
        .then((resp) => {
          res.send(resp);
        })
        .catch((err) => {
          console.log("errrrrrr==>>>", err);
          res.status(400).send(err);
        });
    });

    // Google Calendar routes start
    app.post(
      "/events",
      // jsonParser,
      (req, res) => {
        const event = {
          summary: `In-Person Training: ${req.body.user.name}`,
          location: req.body.session.location,
          start: {
            dateTime: req.body.session.dateTime.start,
            timeZone: "America/Denver",
          },
          end: {
            dateTime: req.body.session.dateTime.end,
            timeZone: "America/Denver",
          },
        };
        const calendar = google.calendar({ version: "v3", auth });
        calendar.events
          .insert({
            calendarId,
            resource: event,
          })
          .then((resp) => {
            res.send(resp);
          })
          .catch((err) => {
            console.log("errrrrrr==>>>", err);
            res.status(400).send(err);
          });
      }
    );

    app.get("/events/:id", (req, res) => {
      const calendar = google.calendar({ version: "v3", auth });
      calendar.events
        .list({
          calendarId,
          id: "kl98k7c1a7s36jk96iqpkvq48c",
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
      res.status(200).send("completed!");
    });
    // app.get('/events',
    //   (req, res) => {
    //     const calendar = google.calendar({ version: 'v3', auth })
    //     calendar.events.list({
    //       calendarId,
    //       id: 'lqpipbs07gii9ikmf17nkv77pk'
    //     }
    //     )
    //       .then(res => {
    //         console.log(res.data)
    //       })
    //       .catch(err => {
    //         console.log(err)
    //       })
    //     res.send("event found" + res.data)
    //   })
    app.delete("/events/:id", (req, res) => {
      console.log(req);
      // console.log('DELETE event')
      // const calendar = google.calendar({ version: 'v3', auth })
      // calendar.events.delete({
      //   calendarId,
      //   eventId: 'dm6slbc728c46dc535ha4um0is'
      // }
      // )
      //   .then(res => {
      //     console.log(res.data)

      //   })
      //   .catch(err => {
      //     console.log(err)
      //   })
      // res.send("deleted")
    });
    // Google Calendar End

    // Send every request to the React app
    // Define any API routes before this runs
    app.get("/auth_config.json", (req, res) => {
      res.sendFile(path.join(__dirname, "auth_config.json"));
    });
    // app.get("*", function (req, res) {
    //   res.sendFile(path.join(__dirname, "./client/build/index.html"));
    // });
    // below is MB's code

    if (process.env.NODE_ENV === "production") {
      app.use(express.static(__dirname + "/client/build/index.html"));
    }

    app.get("*", function (req, res) {
      res.sendFile(path.join(__dirname, "/client/build/index.html"));
    });
    // auth

    // Serve up static assets (usually on heroku)

    process.on("SIGINT", function () {
      process.exit();
    });

    app.listen(PORT, function () {
      console.log(`🌎 ==> API server now on port ${PORT}!`);
    });
  } catch (err) {
    console.log("an err occurred==>>", err);
  }
  // defines all routes in terminal
  app._router.stack.forEach(function (r) {
    if (r.route && r.route.path) {
      console.log(r.route.path);
    }
  });
})();

const auth = new google.auth.GoogleAuth({
  keyFile: "./config/credentials.json",
  scopes: scopes,
});

//POST Request -
// https://www.googleapis.com/calendar/v3/calendars/project3service@bustling-theme-306120.iam.gserviceaccount.com/events
