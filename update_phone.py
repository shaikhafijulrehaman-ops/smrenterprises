import os
import re

# Define the old and new phone numbers
old_phone = "9493700577"
new_phone = "9390370577"

# Get all files to update
files_to_update = []

# Get root HTML files
for file in os.listdir('.'):
    if file.endswith('.html'):
        files_to_update.append(file)

# Get files in out directory
if os.path.exists('out'):
    for root, dirs, files in os.walk('out'):
        for file in files:
            if file.endswith('.html') or file.endswith('.txt'):
                files_to_update.append(os.path.join(root, file))

# Update all files
updated_count = 0
for filepath in files_to_update:
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        if old_phone in content:
            new_content = content.replace(old_phone, new_phone)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            updated_count += 1
            print(f"Updated: {filepath}")
    except Exception as e:
        print(f"Error updating {filepath}: {e}")

print(f"\nTotal files updated: {updated_count}")
