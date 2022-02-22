const express = require("express");
const cors = require("cors");
const path = require("path");
const basePath = "/tms-mikrofrontend-template";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();

server.use(cors({ origin: "http://localhost:3000" }));

server.use(basePath, express.static(buildPath));

server.get(`${basePath}/internal/isAlive`, (req, res) => {
  res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, (req, res) => {
  res.sendStatus(200);
});

server.listen(7100, () => console.log("Server listening on port 7100"));
