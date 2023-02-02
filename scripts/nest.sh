#!/usr/bin/env bash

set -e

RUN_DIR=$(pwd)

SCRIPT_DIR=$(
    cd $(dirname "$0")
    pwd
)

clear() {
    rm -rf ./dist/*
}

copy() {
    cp ./env/local.app.env ./dist/.env
}

nest() {
    nest start -w --path ./tsconfig.build.json --config ./nest-cli.json --tsc
}

compile() {
    clear
    copy
    nest
}

start() {
    cd "$SCRIPT_DIR" && cd ..
    compile
    cd "$RUN_DIR"
}

start
