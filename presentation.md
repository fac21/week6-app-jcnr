# Week 6: Authentication Project

Rosie, Neville, Jo, Craig :stars:

---

## Concept
Jo

---

![](https://media.threatpost.com/wp-content/uploads/sites/103/2019/03/27134858/Grindr_logo.jpg)

---

![](https://user-images.githubusercontent.com/54359248/116686238-71485680-a9ab-11eb-9fcd-4bbc2fc84d75.png)

---

## Grinder

### "Find people to roll with"
:snowboarder:

---

### Features

:heavy_check_mark: Sign-up and log-in pages
:heavy_check_mark: Submit reviews when signed in only
:negative_squared_cross_mark: Delete user reviews
:heavy_check_mark: Semantic form elements
:heavy_check_mark: Postgres DB hosted on Heroku
:heavy_check_mark: Hidden env variables


### Stretch Goals
:negative_squared_cross_mark: Tests
:basketball: Random changing skatepark background image using image API

---

## Database

![](https://i.imgur.com/OPoa2tH.png)

---

## DEMO

## https://grinder-app.herokuapp.com/

---

## Le code

---

## Package-lock.json MERGE HELL

---

![](https://i.imgur.com/eZeXv3P.png)

---

## Solution

```npm install --package-lock-only```

---

## Middleware logger function

![](https://i.imgur.com/NIUxgxV.png)
<hr>

![](https://i.imgur.com/RflWxDJ.png)


---

## HTML template

<img src="https://i.imgur.com/PtRaVnR.png" height=200>

---

<img src="https://i.imgur.com/TV2BMji.png">
<hr>
<img src="https://i.imgur.com/AjWIf0l.png">

---

## Server-side API

<img src="https://i.imgur.com/PtRaVnR.png" height=200>

---

## Successes

* We all understand the code! :star:
* Lots of successful debugging! :bug: 

![](https://media.giphy.com/media/124jbarTbBFB6g/giphy.gif)

---

## Challenges



![](https://i.imgur.com/GxH1bjq.png)

`const { email, password, name } = request.body;`

The body parser was missing in our post route!

---


` Promise <pending> ` in terminal

This was due to missing return statements in our promises" 

`
.then((result) => {
    return result.rows[0]
})
` 

VS

`
.then(result => result.rows[0])
`

---

Typos!

- `reviews` was undefined --> in the form there was a quote missing between `name=review` and `rows=4`


![](https://i.imgur.com/AiG9jgq.png)

- `module.exportS` -> we missed the "S"

---

## Learnings

* ALWAYS write down your mistakes and what fixes it!!!
* Take breaks - get others in group to debug for you
* Merge code together
* Add all env variables to heroku config vars (eg cookie_secret)
* git pull origin <branch name>

---

## Questions

:question: node_modules = seem to be a lot of irrelevant ones, should we delete some? (lodash is really  big)
:question: What is the cookie secret for?
:question: `Git push origin <branch>` --> why do we do that rather than just git push? Does this make it hard to see the remote branch later? E.g. checkout main, git branch --> the branch doesn't come up unless you do `git pull origin <branch>`
* Read https://stackoverflow.com/questions/37770467/why-do-i-have-to-git-push-set-upstream-origin-branch to answer this (thanks Antonio! :star:)


---

![thanks](https://media.giphy.com/media/3oEjHWXddcCOGZNmFO/giphy.gif)
