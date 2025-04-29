#!/bin/bash

# Create optimized image versions for different screen sizes
optimize_image() {
    local input=$1
    local output_small="${input%.*}-small.jpg"
    local output_medium="${input%.*}-medium.jpg"
    
    # Create small version (300px width)
    convert "$input" -resize 300x -quality 85 "$output_small"
    
    # Create medium version (600px width)
    convert "$input" -resize 600x -quality 85 "$output_medium"
    
    # Optimize original image
    convert "$input" -quality 85 "$input"
}

# Process all images in the images directory
for img in images/*.jpg images/*.png; do
    if [ -f "$img" ]; then
        echo "Optimizing $img..."
        optimize_image "$img"
    fi
done

echo "Image optimization complete!" 