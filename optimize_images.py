from PIL import Image
import os

images_dir = "public/team"
MAX_SIZE = (500, 500) # Resize images to max 500x500
QUALITY = 85

def optimize_image(filepath):
    try:
        with Image.open(filepath) as img:
            # Check if resize is needed
            if img.width > MAX_SIZE[0] or img.height > MAX_SIZE[1]:
                img.thumbnail(MAX_SIZE)
                print(f"Resizing {filepath}...")
            else:
                print(f"Skipping resize for {filepath} (already small enough)")

            # Save optimized version
            img.save(filepath, "JPEG", optimize=True, quality=QUALITY)
            print(f"Optimized {filepath}")
    except Exception as e:
        print(f"Error processing {filepath}: {e}")

if __name__ == "__main__":
    if not os.path.exists(images_dir):
        print(f"Directory {images_dir} not found.")
    else:
        for filename in os.listdir(images_dir):
            if filename.lower().endswith(('.jpg', '.jpeg', '.png')):
                filepath = os.path.join(images_dir, filename)
                optimize_image(filepath)
