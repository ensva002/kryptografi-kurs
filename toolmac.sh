#!/bin/bash

dir="markdown" 
siste_endring=""

echo "Kjører i $dir, åpne din favoritt markdown editor å begynn å skriv :)"
macdown

while true; do
    filepath=$(fswatch -1 $dir)  
    echo "Det har skjedd endringer i filene: $filepath"

    ./BSDrunBeforeCommit.sh
done
