#!/usr/bin/env python3
import os
import glob

# Root directory files
root_files = ["about.html", "paints.html", "pipes.html", "sanitary.html", "service.html"]

# Counter for total replacements
total_replacements = 0

print("Processing root directory HTML files...")
for filename in root_files:
    filepath = os.path.join(".", filename)
    if os.path.exists(filepath):
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        # Replace all occurrences
        content = content.replace("9493700577", "9390370577")
        
        # Count replacements
        count = original_content.count("9493700577")
        
        if count > 0:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            total_replacements += count
            print(f"  ✓ {filename} - replaced {count} occurrence(s)")
        else:
            print(f"  - {filename} - no matches found")
    else:
        print(f"  ! {filename} - not found")

# Process out/ directory
out_dir = "./out"
print("\nProcessing out/ directory files...")
if os.path.exists(out_dir):
    for filename in os.listdir(out_dir):
        filepath = os.path.join(out_dir, filename)
        if os.path.isfile(filepath):
            try:
                with open(filepath, 'r', encoding='utf-8') as f:
                    content = f.read()
                
                original_content = content
                # Replace all occurrences
                content = content.replace("9493700577", "9390370577")
                
                # Count replacements
                count = original_content.count("9493700577")
                
                if count > 0:
                    with open(filepath, 'w', encoding='utf-8') as f:
                        f.write(content)
                    total_replacements += count
                    print(f"  ✓ {filename} - replaced {count} occurrence(s)")
            except Exception as e:
                print(f"  ! {filename} - skipped (binary or error)")
else:
    print("  ! out/ directory not found")

print("\n" + "="*50)
print(f"Total phone number replacements: {total_replacements}")
