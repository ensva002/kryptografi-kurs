#!/bin/bash

dir="markdown" 
siste_endring=""

while true; do
    filepath=$(fswatch -1 $dir)  
    echo "Det har skjedd endringer i filene: $filepath"

    ./BSDrunBeforeCommit.sh
done
