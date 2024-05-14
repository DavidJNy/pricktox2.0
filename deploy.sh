echo "Switching to branch master"
git checkout master

echo "Building app..."
npm run build

echo "Deploying files to server..."
scp -r build/* Psyko@raspberrypi:/var/www/davidjny/

echo "Done!"