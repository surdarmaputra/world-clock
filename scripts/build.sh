#! /bin/sh

git checkout build
git fetch --all
git pull --rebase origin/main
yarn build:gh-page
git add .
git commit -m "build"
git push