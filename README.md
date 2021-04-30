# week6-app-jcnr

Welcome to ![Grinder-logo](https://user-images.githubusercontent.com/54359248/116686238-71485680-a9ab-11eb-9fcd-4bbc2fc84d75.png)


## Jo - User
## Craig - Deployment
## Neville - Quality
## Rosie - Facilitator

### To run this locally:

- `git clone` the repo
- `npm install` to install the necessary node packages.
- Create a `.env` file in the root folder following the example of `.env.sample`.
    - To get `API_KEY`, make an account on [unsplash](https://unsplash.com/developers) and generate your own client key.
    - COOKIE_SECRET should be a random long string.
    - DATABASE_URL should point to your local database and be in the form `postgres://<user>:<password>@localhost:<PORT>/<database_name>`
- `npm run dev` to run the server
- visit `localhost:3000`


Draft schema:

![image](https://user-images.githubusercontent.com/31373245/116393757-f3087a80-a819-11eb-8cbc-53a3bc17401a.png)
