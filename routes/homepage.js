const db = require("../database/connection.js");
const model = require("../database/model.js");
const html = require("../templates.js");

function get(request, response) {
  const sid = request.signedCookies.sid;
  let userHTML;
  if (sid) {
    model.getSession(sid).then((session) => {
      userHTML = `
      <h1>Hello ${session.user.username}</h1>
      <form action="/log-out" method="POST">
        <button>Log out</button>
      </form>
    `;
    });
  } else {
    userHTML = `<h1>Hello anonymous</h1>
    <a href="/sign-up">Sign up</a>
    <span> | </span>
    <a href="/log-in">Log in</a>
  `;
  }
  db.query(
    "SELECT reviews.park_name, reviews.park_location, reviews.review_content, users.username FROM reviews INNER JOIN users ON reviews.user_id = users.id"
  ).then((result) => {
    console.log(result);
    const reviews = result.rows; // an array of obecjts, where each object is a row from database (parkname, review content etc)
    const reviewList = reviews
      .map((review) => {
        return `
      <h1>${review.park_name}</h1>
      `;
      })
      .join("");
    response.send(html.htmlTemplate(reviewList, userHTML));
  });
}

module.exports = { get };
