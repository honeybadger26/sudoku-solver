#!/bin/sh
set -e -u -o pipefail

npm run build
touch out/.nojekyll
rm -rf docs
mv out docs
