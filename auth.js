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

module.exports = { COOKIE_OPTIONS, createUser, saveUserSession };
