const model = require("../database/model.js");

function post(request, response) {
    const sid = request.signedCookies.sid;
    model.deleteSession(sid)
    .then(() => {
        response.clearCookie("sid")
        response.redirect("/");
    })
    .catch((error) => {
        console.error("error", error);
        response.send(`<h1>Something has gone wrong! :(</h1>`);
    });
}

module.exports = { post }