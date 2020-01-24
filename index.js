const express = require("express");
const marioRoute = require("./mario/mario-route.js");

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use("/mario/", marioRoute);

server.get("/", (req, res) => {
  res.status(200).json({ message: "Welcome to Nolan's world of Mario" });
});

server.use((err, req, res, next) => {
  res.status(500).json({ message: "Something went wrong" });
});

if (!module.parent) {
  server.listen(port, () => {
    console.log(`Server listening on port ${port}`);
  });
}

module.exports = server;
