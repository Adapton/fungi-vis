cd ..

rm -rf dist &&

heroku git:remote --app fungi-lang &&

node_modules/webpack/bin/webpack.js --bail --progress --profile &&

cd repo/fungi-lang.rust &&
cargo test &&
cd ../.. &&

cp -r ./repo/fungi-lang.rust/target ./dist/examples
rm -rf ./dist/examples/debug
rm ./dist/examples/rustc_info.json

git add . &&
git commit -m "(Deploy)" &&
git push heroku master --force

rm -rf dist

git reset HEAD~1

##  Helpful for testing:  ##
# git add . && git commit --amend --no-edit && git push heroku master --force && heroku logs -t