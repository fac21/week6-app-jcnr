const db = require("../database/connection.js");
const model = require("../database/model.js");

function post(request, response) {
  console.log(request.body);
  const { parkname, location, review } = request.body;
  const sid = request.signedCookies.sid;
  model
    .getSession(sid)
    .then(
      (session) =>
        model.getUser(session.user.email) ///returning whole user
    )
    .then((user) => {
      model.createReview(parkname, location, review, user.id);
    })
    .then(() => {
      response.redirect("/");
    })
    .catch((error) => {
      console.error("error", error);
      response.send(`<h1>Something has gone wrong! :(</h1>`);
    });
}

module.exports = { post };
