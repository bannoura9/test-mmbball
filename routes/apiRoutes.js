const router = require("express").Router();
const db = require("../models");

router.get('/users', (req, res) => {
  db.User.find({})
    .then(resp => {
      res.json(resp);
    })
    .catch(err => res.status(422).end())
})

module.exports = router;
