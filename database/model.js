const db = require("./connection.js");

const viewAllUserData = () => {
  console.log(`entered viewAllUserData function in model.js`);
  return db.query("SELECT * FROM users").then((result) => {
    console.log(result);
    result;
  });
};

module.exports = { viewAllUserData };
