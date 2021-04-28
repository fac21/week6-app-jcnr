const express = require("express");
const home = require("./routes/homepage.js");

const server = express();

const bodyParser = express.urlencoded();

function logger(req, res, next) {
  console.log(req.method + " " + req.url);
  next();
}

server.use(logger);

server.get("/", home.get);

// server.get("/", (req, res) => {
//     res.send("<h1>OUR TEAM ROCKS</h1>")
// })

// server.post("/submit", bodyParser, (req, res) => {

// })

server.use((req, res) => {
  res.status(404).send("<h1>Not found</h1>");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`started on http://localhost:${PORT}`));
