const express = require("express");

const Users = require("../users-model.js");
const restricted = require("../auth/restricted-middleware.js");

const router = express.Router();
// protect/restrict this route, users must provide valid credentials(username/password) to see the list of users
router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
