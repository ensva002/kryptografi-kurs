#!/bin/bash

#============== TRIM HTML ==============

dir="markdown/"

# Destination directory
dest="pages/"

# Loop over each HTML file in the directory
for filepath in "$dir"/*.md
do
    # Extract the filename from the filepath
    filename=$(basename "$filepath" .md)

    pandoc -f markdown $filepath > $dir/$filename.html
    sed -E -i 's/<pre\sclass="([^"]*)">/<pre class="language-\1">/g' $dir/$filename.html
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

done

#============ POPULATE MENU ============
dir="pages/"

# Start of JSON
echo '{ "files": [' > pagelist.json

# Find HTML files, exclude index.html, sort them, and then format as JSON
find $dir -name "*.html" ! -name "index.html" | sort -V | awk -v ORS=', ' '{ sub(".*/",""); print "\""$0"\""}' >> pagelist.json

# End of JSON
sed -i '$ s/..$/] }/' pagelist.json
