#!/bin/bash

# Create a backup directory
mkdir -p images/original

# Optimize each image
for img in images/*.jpg; do
    # Skip if it's in the original directory
    if [[ $img == *"/original/"* ]]; then
        continue
    fi
    
    # Create backup
    cp "$img" "images/original/$(basename "$img")"
    
    # Optimize the image
    magick "$img" -strip -quality 85 -resize "1200x>" "$img"
done

echo "Images have been optimized and originals backed up in images/original/" 