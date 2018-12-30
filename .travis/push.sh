setup_git() {
  git config --global user.email "travis@travis-ci.org"
  git config --global user.name "Travis CI"
}

commit_website_files() {
  git checkout -b deployed
  git add --all
  git commit --message "Travis build: $TRAVIS_BUILD_NUMBER"
}

upload_files() {
  git remote remove origin
  git remote add origin https://${GH_TOKEN}@github.com/areebbeigh/TabTracker.git
  git push --set-upstream origin test
}

setup_git
commit_website_files
upload_files
