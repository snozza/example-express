#!/bin/bash
cd $(dirname "$0")/..
echo \
  -e app/browser/navigation \
  $(find app/browser \( -name '*.js' -or -name '*.jsx' -not -name '*test.js' \) -print0 | \
    xargs -0 -I file echo file | \
    sed -e 's/^/-r \.\//' | \
    sed -e 's/\.js$//' | \
    xargs)
