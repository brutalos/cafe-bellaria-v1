import os
import shutil

def main():
    mirror_path = 'reference-screenshots/images'
    public_images_path = 'public/images'
    
    if os.path.exists(mirror_path):
        os.makedirs(public_images_path, exist_ok=True)
        files = os.listdir(mirror_path)
        for filename in files:
            src = os.path.join(mirror_path, filename)
            dst = os.path.join(public_images_path, filename)
            if os.path.isfile(src):
                shutil.copy(src, dst)
        print(f"Copied {len(files)} images to public/images.")
    else:
        print(f"Mirror images directory not found at {os.path.abspath(mirror_path)}")

if __name__ == '__main__':
    main()
