function htmlTemplate(bodyContent, headerContent) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="">
      <link rel="icon" type="image/png" href="#"/>
      <link rel="stylesheet" type="text/css" href="style.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      <title>Grinder</title>
    </head>
    <body>
    <header>
    <img src="/images/facbook-logo.png" alt="facbook logo"><br/>
    ${headerContent}
    </header>
        <main>
      ${bodyContent}
      </main>
    </body>
    </html>
    `;
}

module.exports = { htmlTemplate };
