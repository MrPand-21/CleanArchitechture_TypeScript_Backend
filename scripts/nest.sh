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

port() {
    if lsof -Pi :3006 -sTCP:LISTEN -t >/dev/null; then
        echo "Port 3006 is in use."
        pid=$(lsof -t -i:3006)
        sudo kill -9 $pid
        echo "Process with PID $pid has been killed."
    fi
}

compile() {
    port
    clear
    nest
}

start() {
    cd "$SCRIPT_DIR" && cd ..
    compile
    cd "$RUN_DIR"
}

start
