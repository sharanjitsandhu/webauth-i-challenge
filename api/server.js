const express = require("express");
const helmet = require("helmet");

const registerRouter = require("../register/register-router.js");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/register", registerRouter);

server.get("/", (req, res) => {
  res.status(200).send("It's working...");
});

module.exports = server;
