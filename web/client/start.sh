DIR="./node_modules/"
if [ -d "$DIR" ]; then
  echo "[DEV] Starting NodeJS."
  npm start
else
  echo "[DEV] Install dependency files and start NodeJS."
  npm install --quiet
  npm start
fi
