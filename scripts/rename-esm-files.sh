#!/bin/bash

shopt -s globstar

for file in $PWD/lib/esm/**/*.js; do
    mv "$file" "${file%.js}.mjs";
done
