setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git fetch
  git branch -a
  git checkout deployed
  git add -f public/*
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
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
