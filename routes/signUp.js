const auth = require("../auth.js");
//NEED TO CONFIRM FROM C&R's CODE:
// const templates = require("");

// function get(request, response) {
//   const signUpForm = `
//     <h1>Create an account</h1>
//     <form action="sign-up" method="POST">
//       <label for="name">Name</label>
//       <input type="text" id="name" name="name">
//       <label for="email">Email</label>
//       <input type="email" id="email" name="email">
//       <label for="password">Password</label>
//       <input type="password" id="password" name="password">
//       <button>Sign up</button>
//     </form>
//   `;
//   const html = templates.htmlTemplate(signUpForm);
//   response.send(html);
// }

function get(request, response) {
  response.send(`
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
    `);
}

function post(request, response) {
  console.log(request.body);
  const { email, password, username } = request.body;
  auth
    .createUser(email, password, username)
    .then((user) => auth.saveUserSession(user))
    .then((sid) => {
      response.cookie("sid", sid, auth.COOKIE_OPTIONS);
      response.redirect("/");
    });
}

module.exports = { get, post };
