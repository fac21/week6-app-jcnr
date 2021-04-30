const auth = require("../auth.js");
const templates = require("../templates.js");

function get(request, response) {
  const createAccount = `
       <h1>Create an account</h1>
       <form action="sign-up" method="POST">
         <label for="username">Name</label>
         <input type="text" id="username" name="username">
         <label for="email">Email</label>
         <input type="email" id="email" name="email">
         <label for="password">Password</label>
         <input type="password" id="password" name="password">
         <button type="submit">Sign up</button>
       </form>
  `
  const html = templates.htmlTemplate(createAccount, "");
  response.send(html);
 }

function post(request, response) {
  //console.log(request.body);
  const { email, password, username } = request.body;
  auth
    .createUser(email, password, username)
    .then((user) => auth.saveUserSession(user))
    .then((sid) => {
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);
      response.redirect("/");
    })
    .catch((error) => {
      console.error("error", error);
      response.send(`<h1>Unable to sign-up! :(</h1>`);
    });
}

module.exports = { get, post };
