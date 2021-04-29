const db = require("../database/connection.js");
const model = require("../database/model.js");
const html = require("../templates.js")



function get(request, response) {
  db.query("SELECT reviews.park_name, reviews.park_location, reviews.review_content, users.username FROM reviews INNER JOIN users ON reviews.user_id = users.id")
  .then((result) => {
    console.log(result);
    const reviews = result.rows; // an array of obecjts, where each object is a row from database (parkname, review content etc)
    const reviewList = reviews.map((review) => {
      return`
      <h1>${review.park_name}</h1>
      `
    }).join("")
    response.send(html.htmlTemplate(reviewList))
  })
}

module.exports = { get };
