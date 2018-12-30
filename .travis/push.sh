setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b deployed
  git add -f public/*
  git add --all
  git commit --message "[ci skip] Travis build: $TRAVIS_BUILD_NUMBER"
}

set_origin() {
  git remote remove origin
  git remote add origin https://${GH_TOKEN}@github.com/areebbeigh/TabTracker.git
}

upload_files() {
  git push origin deployed
}

setup_git
set_origin
commit_website_files
upload_files
