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
nest() {
    env-cmd -f ./env/local.app.env nest start --watch
}

compile() {
    clear
    nest
}

start() {
    cd "$SCRIPT_DIR" && cd ..
    clear
    nest
    cd "$RUN_DIR"
}

start
