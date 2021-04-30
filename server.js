const express = require("express");
const home = require("./routes/homepage.js");
const signUp = require("./routes/signUp.js");

const logIn = require("./routes/logIn.js");
const logOut = require("./routes/logOut.js");

const postReview = require("./routes/postReview.js");

const cookieParser = require("cookie-parser");

const server = express();
const staticHandler = express.static("public");
server.use(staticHandler);

const bodyParser = express.urlencoded();

function logger(req, res, next) {
  console.log(req.method + " " + req.url);
  next();
}

server.use(logger);

server.use(cookieParser(process.env.COOKIE_SECRET));

server.get("/", home.get);

server.get("/sign-up", signUp.get);
server.post("/sign-up", bodyParser, signUp.post);

server.get("/log-in", logIn.get);
server.post("/log-in", bodyParser, logIn.post);

server.post("/log-out", bodyParser, logOut.post);

server.post("/post-review", bodyParser, postReview.post);

server.use((req, res) => {
  res.status(404).send("<h1>Page not found! :(</h1>");
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log(`started on http://localhost:${PORT}`));
