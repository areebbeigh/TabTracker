# TabTracker
A user provided collection of song metadata, lyrics and guitar tabs. This is a practice web app inspired by [codyseibert/tab-tracker](https://github.com/codyseibert/tab-tracker) built in a freeCodeCamp tutorial series.

![screenshot](https://github.com/areebbeigh/TabTracker/raw/master/preview.png)

## What I'm using
TabTracker uses VueJS, Vuetify, NodeJS and Sequelize.

## What's different
This version of TabTracker is a little different than the one built in the tutorial.
- Better UI
- Responsive! :smile:
- Slightly different file structure
- [Uses cookie based session management instead of JWTs](http://cryto.net/~joepie91/blog/2016/06/13/stop-using-jwt-for-sessions/)

## Get it up and running
Start the node server

`npm run dev`

Start the front-end development server

`npm run dev:client`

Seed the database

`npm run seed`

### Deploying demo web app

`npm run start`

This will build the Vue application for production and re-seed the database before running the server.

## Deployment Strategy
Builds are pushed to `remote/deployed` on every commit to `master` (or every 24 hours) by Travis CI. I had to do this because heroku was running out of memory if I tried to build the Vue front-end on heroku. Commits to `remote/deployed` trigger heroku builds where the database is re-seeded with demo data. Production mode uses sqlite since this is just a demo.

## Contributing
I'm sure you can find something to improve! Make an issue regarding the improvement / feature first and (if you're into it) make a new pull request! :)

Cheers :coffee:
