#!/bin/bash

# Sett opp banen til mappen du vil overvåke
dir="markdown"
dest="pages"


# Start uendelig løkke for å overvåke mappen
while true
do
    # Bruk inotifywait for å vente på endringer i mappen og lagre endringen i en variabel
    filepath=$(inotifywait -e modify --format "%f" "$dir")
echo "Det har skjedd endringer i filene: $filepath"

    # Kjør ditt andre script og send med filstien
    # annet_script.sh "$siste_endring"
     # Extract the filename from the filepath
    filename=$(basename "$filepath" .md)

    pandoc -f markdown $filepath > $dir/$filename.html
    sed -E -i 's/<pre\sclass="([^"]*)">/<pre class="language-\1">/g' $dir/$filename.html
    
    # Replace underscores with spaces
    title=${filename//_/ }

    # Extract the page content
    #content=$(gtail -c +110 "$filepath" | ghead -c -14)
    #content=$(cat $dir/$filename.html)

    # Create the new HTML structure with the extracted content and title
    new_content="<!DOCTYPE html>
    <html lang=\"en\">
    <head>
        <meta charset=\"UTF-8\">
        <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
        <link rel="icon" type="image/svg+xml" href="../favicon.svg">
        <link rel=stylesheet href=style.css>
        <link id=\"codeStyle\" rel=stylesheet href=prism.css>
        <script type=module src=script.js></script>
        <script type=module src=prism.js></script>
        <title>$title</title>
    </head>
    <body>
        <div id=\"canvas\">
            <div id=\"content\">
                <h1>$title</h1>
                $(cat $dir/$filename.html)
            </div>
        </div>
    </body>
    </html>"

        # Write the new content to a file in the destination directory
        echo "$new_content" > "$dest/$filename.html"

        # Remove the original file
       # rm "$dir/$filename.html"


    #============ POPULATE MENU ============
    dirMenu="pages/"

    # Start of JSON
    echo '{ "files": [' > pagelist.json

    # Find HTML files, exclude index.html, sort them, and then format as JSON
    find $dirMenu -name "*.html" ! -name "index.html" | sort -V | awk -v ORS=', ' '{ sub(".*/",""); print "\""$0"\""}' >> pagelist.json

    # End of JSON
    sed -i '$ s/..$/] }/' pagelist.json

done
