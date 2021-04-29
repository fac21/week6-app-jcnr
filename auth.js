const crypto = require("crypto");
const bcrypt = require("bcryptjs");
const model = require("./database/model");

const COOKIE_OPTIONS = {
  httpOnly: true,
  maxAge: 600000,
  sameSite: "strict",
  signed: true,
};

function createUser(email, password, username) {
  return bcrypt
    .hash(password, 10)
    .then((hash) => model.createUser(email, hash, username));
}

function saveUserSession(user) {
  const randSID = crypto.randomBytes(18).toString("base64");
  return model.createSession(randSID, { user });
}

function verifyUser(email, password) {
  //console.log("model email", model.getUser(email))
  return model.getUser(email)
  .then((user) => {
    return bcrypt.compare(password, user.password)
    .then((match) => {
      if(!match) {
        throw new Error("password doesn't match!");
      } else {
        delete user.password;
        return user;
      }
    })
  })
}

module.exports = { COOKIE_OPTIONS, createUser, saveUserSession, verifyUser };
