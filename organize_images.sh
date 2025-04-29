#!/bin/bash

# Create images directory if it doesn't exist
mkdir -p images

# Function to copy and rename images
copy_image() {
    local src="$1"
    local dest="$2"
    if [ -f "images/$src" ]; then
        mv "images/$src" "images/$dest"
        echo "✓ Renamed $src to $dest"
    else
        echo "✗ Source file $src not found"
    fi
}

echo "Starting image organization..."

# Professional/Education Images
copy_image "berkeley-haas-logo.jpg" "berkeley-haas.jpg"
copy_image "westpoint-campus.jpg" "westpoint.jpg"
copy_image "professional-headshot.JPG" "profile-professional.jpg"

# Military Service Images
copy_image "military-group-photo.jpg" "infantry-group.jpg"
copy_image "military-vehicles.jpg" "military-intel.jpg"
copy_image "IMG_0731.jpg" "infantry-service.jpg"
copy_image "military-ceremony.JPG" "military-leadership.jpg"

# Personal/Family Images
copy_image "family-kids.jpg" "family.jpg"
copy_image "spearfishing.jpg" "fishing.jpg"
copy_image "skiing-selfie.jpg" "skiing.jpg"

echo ""
echo "Image organization complete!"
echo ""
echo "Current images in the directory:"
ls -l images/ 