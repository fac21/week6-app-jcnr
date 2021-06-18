# Welcome to ![Grinder-logo](https://user-images.githubusercontent.com/54359248/116686238-71485680-a9ab-11eb-9fcd-4bbc2fc84d75.png)

## An app where you can post reviews of your favourite skateparks for everyone to see
### - Now when you wanna go for a roll with your mates, everybody can join in!

<hr>

### Team

- [Jo](https://github.com/jamdelion) - User
- [Craig](https://github.com/tiarama) - Deployment
- [Neville](https://github.com/ByteSizedIT) - Quality
- [Rosie](https://github.com/rosie-odonnell) - Facilitator

<hr>

### Functionality:

✔️ Submit information to your site for anyone to see 

✔️ Come back to your site later and see what I posted is still there 

:x: Be the only person allowed to delete my stuff 

✔️ Forms for users to sign up and log in

✔️ A form for users to submit data only accessible to logged in users 

✔️ A page showing all the data 

✔️ Semantic form elements with correctly associated labels 

✔️ A Postgres database hosted on Heroku 

✔️ Hidden environment variables (i.e. not on GitHub) 

---

### To run this locally:

- `git clone` the repo
- `npm install` to install the necessary node packages.
- Create a `.env` file in the root folder following the example of `.env.sample`.
    - To get `API_KEY`, make an account on [unsplash](https://unsplash.com/developers) and generate your own client key.
    - COOKIE_SECRET should be a random long string.
    - DATABASE_URL should point to your local database and be in the form `postgres://<user>:<password>@localhost:<PORT>/<database_name>`
- `npm run dev` to run the server
- visit `localhost:3000`

---

### Draft schema:

![image](https://user-images.githubusercontent.com/31373245/116393757-f3087a80-a819-11eb-8cbc-53a3bc17401a.png)
