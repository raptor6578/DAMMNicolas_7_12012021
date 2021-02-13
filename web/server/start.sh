DIR="./node_modules/"
if [ -d "$DIR" ]; then
  echo "[API] Starting NodeJS."
  npm start
else
  echo "[API] Install dependency files and start NodeJS."
  npm install --quiet
  npm start
fi
