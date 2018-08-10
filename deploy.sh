#!/usr/bin/env sh

set -e

cd .vuepress

git clone https://${GITHUB_TOKEN}@github.com/ac-voyage/ac-voyage.github.io.git repo

cp -R dist/* repo

cd repo
git add .
if git commit -m "Site updated at `date`"; then
    echo Changes committed
fi

git push origin master
