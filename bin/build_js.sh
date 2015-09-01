#!/bin/bash
cd $(dirname "$0")/..
echo $(./bin/browserify_args.sh) "$@" 
browserify -t reactify $(./bin/browserify_args.sh) "$@" | uglifyjs --no-mangle > wwwroot/bundle.js
