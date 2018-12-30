# TabTracker
A user provided collection of song metadata, lyrics and guitar tabs.

## Deployment Strategy
Builds are pushed to `remote/deployed` on every commit to `master` (or every 24 hours) from Travis CI. I had to do this because heroku was running out of memory if I tried to build the vue front-end on heroku. Commits to `remote/deployed` trigger heroku builds where the database is re-seeded with demo data.
