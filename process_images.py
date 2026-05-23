import os
from rembg import remove
from PIL import Image

input_dir = 'products'
output_dir = 'public/products'

image_map = {
  '6- cica cream -  60 ml  vior.png': 'cica-cream-2.webp',
  '8- Cleaning water vior.jpg.jpeg': 'cleaning-water.webp',
  'Mousturizer vior  copy.png': 'moisturizer.webp',
  'sunscreen vior.png': 'sunscreen.webp',
  'toner pack front mOCK UP.png': 'toner-pack.webp'
}

for in_name, out_name in image_map.items():
    in_path = os.path.join(input_dir, in_name)
    out_path = os.path.join(output_dir, out_name)
    print(f"Processing {in_name}...")
    try:
        # Load image
        input_image = Image.open(in_path)
        # Remove background
        output_image = remove(input_image)
        # Resize to 600 max width
        width, height = output_image.size
        if width > 600:
            new_height = int(height * (600 / width))
            output_image = output_image.resize((600, new_height), Image.Resampling.LANCZOS)
        # Convert to webp
        output_image.save(out_path, format="webp", quality=90)
        print(f"Saved to {out_path}")
    except Exception as e:
        print(f"Failed to process {in_name}: {e}")
