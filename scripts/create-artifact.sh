#!/bin/sh

find . \
        -path "*node_modules*" -prune -o \
        -name src -type d -print0 -o \
        -name build -type d -print0 \
    | xargs tar --null -cvf lib-build.tar
