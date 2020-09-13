bruh...

if youre having node modules errors do this:

npm cache clean --force
rm -rf node_modules package-lock.json
npm install
npm run start