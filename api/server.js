const express = require("express");
const helmet = require("helmet");
const session = require("express-session");

const registerRouter = require("../register/register-router.js");
const loginRouter = require("../login/login-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();

const sessionConfig = {
  name: "monster",
  secret: "secret string",
  cookie: {
    httpOnly: true, //true means prevent access from Javascript code
    maxAge: 1000 * 60 * 1, // in milliseconds
    secure: false //true means only send the cookie over https
  },
  resave: false, // resave session even if it didn't change
  saveUninitialized: true // create new sessions automatically, make sure to comply the law
};

server.use(session(sessionConfig));
server.use(helmet());
server.use(express.json());

server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).send("It's working...");
});

module.exports = server;
