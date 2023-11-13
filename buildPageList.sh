#!/bin/bash

# Directory to search
dir="."

# Start of JSON
echo '{ "files": [' > $dir/pagelist.json

# Find HTML files, exclude index.html, format as JSON
find $dir -name "*.html" ! -name "index.html" -printf '"%f", ' >> $dir/pagelist.json

# End of JSON
sed -i '$ s/..$/] }/' $dir/pagelist.json
