#!/bin/bash

# Angi banen til mappen du vil overvåke
mappe="markdown"

# flatpak run com.github.marktext.marktext $mappe &

echo "Venter på endringer i $mappe..."

while inotifywait -r -e modify,create,delete $mappe; do
    echo "Endring oppdaget i $mappe"
    ./runBeforeCommit.sh
done
