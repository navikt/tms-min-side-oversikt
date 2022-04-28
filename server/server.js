const express = require("express");
const cors = require("cors");
const path = require("path");
const basePath = "/tms-min-side-oversikt";
const buildPath = path.resolve(__dirname, "../dist");
const server = express();
const corsAllowedOrigin = process.env.CORS_ALLOWED_ORIGIN || "http://localhost:3000";

server.use(cors({ origin: corsAllowedOrigin }));

server.use(basePath, express.static(buildPath));

server.get(`${basePath}/internal/isAlive`, (req, res) => {
  res.sendStatus(200);
});

server.get(`${basePath}/internal/isReady`, (req, res) => {
  res.sendStatus(200);
});

server.listen(7500, () => console.log("Server listening on port 7500"));
