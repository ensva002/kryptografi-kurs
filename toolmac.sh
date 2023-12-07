#!/bin/bash


dest="pages/"

dir="markdown"  # Erstatt med stien til mappen du vil overvåke
siste_endring=""

while true; do
    filepath=$(fswatch -1 $dir)  # Overvåk endringer i mappen
    echo "Det har skjedd endringer i filene: $filepath"

    # Kjør ditt andre script og send med filstien
    # annet_script.sh "$siste_endring"
     # Extract the filename from the filepath
    filename=$(basename "$filepath" .md)

    pandoc -f markdown $filepath > $dir/$filename.html
    gsed -E -i 's/<pre\sclass="([^"]*)">/<pre class="language-\1">/g' $dir/$filename.html
    
    # Replace underscores with spaces
    title=${filename//_/ }

    # Extract the page content
    #content=$(gtail -c +110 "$filepath" | ghead -c -14)
    content=$(cat $dir/$filename.html)


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
                $content
            </div>
        </div>
    </body>
    </html>"

        # Write the new content to a file in the destination directory
        echo "$new_content" > "$dest/$filename.html"

        # Remove the original file
        rm "$dir/$filename.html"


    #============ POPULATE MENU ============
    dir="pages/"

    # Start of JSON
    echo '{ "files": [' > pagelist.json

    # Find HTML files, exclude index.html, sort them, and then format as JSON
    find $dir -name "*.html" ! -name "index.html" | sort -V | awk -v ORS=', ' '{ sub(".*/",""); print "\""$0"\""}' >> pagelist.json

    # End of JSON
    gsed -i '$ s/..$/] }/' pagelist.json

done
