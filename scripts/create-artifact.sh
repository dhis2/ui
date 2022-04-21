#!/bin/sh

find . \
        -path "*node_modules*" -prune -o \
        -name src -type d -print0 -o \
        -name build -type d -print0 -o \
        -name API.md -type f -print0 \
    | xargs -0 tar -cvf lib-build.tar
