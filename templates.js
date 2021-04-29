const dotenv = require("dotenv");
dotenv.config();

function htmlTemplate(bodyContent, headerContent) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Krona+One&display=swap');
    </style> 
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta name="description" content="">
      <link rel="icon" type="image/png" href="#"/>
      <link rel="stylesheet" type="text/css" href="style.css">
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossorigin="anonymous">
      <title>Grinder</title>
    </head>
    <body>
    <img class='bg-image' src="/default-skate-bkground.jpg" alt='random image'>
    <img class="logo" src="/Grinder-logo.png" alt="Grinder logo"><br/>

    <header>
    ${headerContent}
    </header>
        <main>
      ${bodyContent}
      </main>
    </body>
    <script>

    window.addEventListener("load", () => {
            let randomNum = Math.floor(Math.random() * 10);
            fetch("https://api.unsplash.com/photos/random?query=skatepark&client_id=${process.env.API_KEY}&orientation=portrait")
                .then((response) => {
                    if (!response.ok) throw new Error(response.status);
                    return response.json()
                })
                .then((data) => {
                    document.querySelector('.bg-image').src = data.urls.regular;
                })
                .catch((error) => console.log(error));
    });
    
    </script>
    
    </html>
    `;
}

module.exports = { htmlTemplate };
