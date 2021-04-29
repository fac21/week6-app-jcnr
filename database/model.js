const db = require("./connection.js");

// const viewAllUserData = () => {
//   console.log(`entered viewAllUserData function in model.js`);
//   return db.query("SELECT * FROM users").then((result) => {
//     console.log(result);
//     result;
//   });
// };

function createUser(email, hash, username) {
  const INSERT_USER = `
  INSERT INTO users (email, password, username) VALUES ($1, $2, $3)
  RETURNING id, email, username
  `;
  return db
    .query(INSERT_USER, [email, hash, username])
    .then((result) => result.rows[0]);
}

function createSession(sid, dataObj) {
  const INSERT_SESSION = `INSERT INTO sessions (sid, data) VALUES ($1, $2) RETURNING sid`;
  return db
    .query(INSERT_SESSION, [sid, dataObj])
    .then((result) => result.rows[0].sid);
}

function getSession(sid) {
  const SELECT_SESSION = "SELECT data FROM sessions WHERE sid=$1";
  return db.query(SELECT_SESSION, [sid]).then((result) => {
    const singleResult = result.rows[0];
    return singleResult && singleResult.data;
  });
}

function getReviews() {
  return db
    .query(
      "SELECT reviews.park_name, reviews.park_location, reviews.review_content, users.username FROM reviews INNER JOIN users ON reviews.user_id = users.id"
    )
    .then((result) => {
      const reviews = result.rows; // an array of objects, where each object is a row from database (parkname, review content etc)
      let reviewList = "";
      reviews.forEach((review) => {
        reviewList += `
      <h1>${review.park_name}</h1>
      `;
      });
      return reviewList;
    });
}

function getUser(reviewer) {
  const USER_ID = "SELECT id FROM users WHERE username=$1";
  //console.log(db.query(USER_ID, [reviewer]));
  return db.query(USER_ID, [reviewer]);
}

function createReview(parkname, location, review, reviewer) {
  //console.log(reviewer);
  const INSERT_REVIEW = `INSERT INTO reviews (park_name, park_location, review_content, user_id) VALUES ($1, $2, $3, $4)
  RETURNING review_content`;
  return db.query(INSERT_REVIEW, [parkname, location, review, reviewer]);
}

module.exports = {
  createUser,
  createSession,
  getSession,
  getReviews,
  getUser,
  createReview,
};
