const express = require("express");
const helmet = require("helmet");

const registerRouter = require("../register/register-router.js");
const loginRouter = require("../login/login-router.js");
const usersRouter = require("../users/users-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/register", registerRouter);
server.use("/api/login", loginRouter);
server.use("/api/users", usersRouter);

server.get("/", (req, res) => {
  res.status(200).send("It's working...");
});

module.exports = server;
