#!/usr/bin/env bash
# Publishes the portfolio to https://lizamir.github.io
# 1) builds the static site (npm run build -> out/)
# 2) copies it into ../lizamir.github.io (a clone of github.com/lizamir/lizamir.github.io)
# 3) commits and pushes, and GitHub Pages updates in about a minute.
set -euo pipefail
cd "$(dirname "$0")/.."

TARGET="../lizamir.github.io"
[ -d "$TARGET/.git" ] || git clone https://github.com/lizamir/lizamir.github.io.git "$TARGET"

npm run build
git -C "$TARGET" pull --ff-only
rsync -a --delete --exclude '.git' out/ "$TARGET"/
touch "$TARGET/.nojekyll"

cd "$TARGET"
git add -A
if git diff --cached --quiet; then
  echo "Nothing changed, nothing to publish."
else
  git commit -m "Publish the portfolio ($(git -C ../liz-portfolio rev-parse --short HEAD))"
  git push
  echo "Pushed. Live in about a minute at https://lizamir.github.io"
fi
