const express = require("express");
const bcrypt = require("bcryptjs");

const Users = require("../users-model.js");

const router = express.Router();

// Use the credentials sent inside the body to authenticate the user.
// On successful login, create a new session for the user and send back a 'Logged in' message and a cookie that contains the user id.
// If login fails, respond with the correct status code and the message: 'You shall not pass!'

router.post("/", (req, res) => {
  let { username, password } = req.body;
  // we compare the password guess against the database hash
  Users.findBy({ username })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        // Que: How do I know that cokkie is gonna be sent automatically?
        // Ans: The cookie is sent by the express-session library.
        req.session.username = user.username;
        res.status(200).json({ message: "Successfully logged in!" });
      } else {
        res.status(401).json({ message: "You shall not pass!" });
      }
    })
    .catch(error => {
      res.status(500).json(error);
    });
});

module.exports = router;
