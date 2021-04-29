const db = require("../database/connection.js");
const model = require("../database/model.js");

function post(request, response) {
  console.log(request.body);
  const { parkname, location, review } = request.body;
  const sid = request.signedCookies.sid;
  //console.log({ sid });
  model
    .getSession(sid)
    .then(
      (session) =>
        //console.log({ session });
        //const email = session.user.email;
        //console.log({ email });
        model.getUser(session.user.email) ///returning whole user
    )
    .then((user) => {
      //console.log(parkname, location, review, user.id);
      model.createReview(parkname, location, review, user.id);
      //console.log(parkname, location, review, userID);
    })
    .then(() => {
      response.redirect("/");
    });
}

module.exports = { post };
