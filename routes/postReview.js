const db = require("../database/connection.js");
const model = require("../database/model.js");

function post(request, response) {
  //console.log(request.body);
  const { parkname, location, review } = request.body;
  const sid = request.signedCookies.sid;
  console.log({ sid });
  model
    .getSession(sid)
    .then((session) => {
      const username = session.user.username;
      return model.getUser(username); ///returning whole user
    })
    .then((userID) => {
      model.createReview(parkname, location, review, userID);
      //console.log(parkname, location, review, userID);
    })
    .then(() => {
      response.redirect("/");
    });
}

module.exports = { post };
