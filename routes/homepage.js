const db = require("../database/connection.js");
const model = require("../database/model.js");

function get(request, response) {
  console.log(`entered get function in homepage.js`);
  model.viewAllUserData().then(() => {
    response.send("<h1>Hello world</h1>");
  });
}

module.exports = { get };
