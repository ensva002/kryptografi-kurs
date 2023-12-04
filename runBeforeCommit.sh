#!/bin/bash

#============== TRIM HTML ==============

dir="markdown/"

# Destination directory
dest="pages/"

# Loop over each HTML file in the directory
for filepath in "$dir"/*.html
do
    # Extract the filename from the filepath
    filename=$(basename "$filepath" .html)

    # Replace underscores with spaces
    title=${filename//_/ }

    # Extract the page content
    content=$(tail -c +110 "$filepath" | head -c -14)


    # Create the new HTML structure with the extracted content and title
    new_content="<!DOCTYPE html>
<html lang=\"en\">
<head>
    <meta charset=\"UTF-8\">
    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
    <link rel=stylesheet href=style.css>
    <link id="codeStyle" rel=stylesheet href=prism.css>
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
    #rm "$filepath"
done

#============ POPULATE MENU ============
dir="pages/"

# Start of JSON
echo '{ "files": [' > pagelist.json

# Find HTML files, exclude index.html, sort them, and then format as JSON
find $dir -name "*.html" ! -name "index.html" | sort -V | awk -v ORS=', ' '{ sub(".*/",""); print "\""$0"\""}' >> pagelist.json

# End of JSON
sed -i '$ s/..$/] }/' pagelist.json
