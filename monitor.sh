#!/bin/bash

URL="https://test-dthed9hqctejbkh3.z03.azurefd.net/"
LOGFILE="app_monitor.log"

while true
do
    TS=$(date '+%Y-%m-%d %H:%M:%S')

    HTTP_CODE=$(curl -s -o /tmp/app_response.txt \
        -w "%{http_code}" \
        --max-time 10 \
        "$URL")

    if [ "$HTTP_CODE" = "200" ]; then
        echo "[$TS] OK (200)" | tee -a "$LOGFILE"
    else
        echo "[$TS] DOWN (HTTP $HTTP_CODE)" | tee -a "$LOGFILE"
    fi

    sleep 2
done