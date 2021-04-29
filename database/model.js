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

function deleteSession(sid) {
  const DELETE_SESSION = `DELETE FROM sessions WHERE sid=$1`;
  return db
    .query(DELETE_SESSION, [sid]);
}

function getSession(sid) {
  const SELECT_SESSION = "SELECT data FROM sessions WHERE sid=$1";
  return db.query(SELECT_SESSION, [sid]).then((result) => {
    const singleResult = result.rows[0];
    return singleResult && singleResult.data;
  });
}

function getUser(email) {
  const selectUser = `
  SELECT id, email, password, username FROM users WHERE email=$1;`;
  return db.query(selectUser, [email])
  .then((result) => {
    return result.rows[0];
  
  })
}



module.exports = { createUser, createSession, getSession, getUser, deleteSession };
