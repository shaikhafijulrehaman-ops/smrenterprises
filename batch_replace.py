#!/usr/bin/env python3
"""Batch replace phone number across all HTML and TXT files."""
import os
import glob
import sys

OLD_PHONE = "9493700577"
NEW_PHONE = "9390370577"

def replace_in_file(filepath):
    """Replace phone number in a single file."""
    try:
        with open(filepath, 'r', encoding='utf-8', errors='ignore') as f:
            content = f.read()
        
        if OLD_PHONE in content:
            new_content = content.replace(OLD_PHONE, NEW_PHONE)
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            count = content.count(OLD_PHONE)
            return count
        return 0
    except Exception as e:
        print(f"Error processing {filepath}: {str(e)}", file=sys.stderr)
        return -1

# Get current directory
os.chdir(os.path.dirname(os.path.abspath(__file__)) or '.')

# Process out/ directory
out_dir = "./out"
total = 0
print("Processing out/ directory...")
if os.path.exists(out_dir):
    html_files = glob.glob(os.path.join(out_dir, "*.html"))
    txt_files = glob.glob(os.path.join(out_dir, "*.txt"))
    
    for file in sorted(html_files + txt_files):
        count = replace_in_file(file)
        if count > 0:
            total += count
            print(f"✓ {os.path.basename(file)} - {count} replacement(s)")
        elif count == 0:
            print(f"- {os.path.basename(file)} - no matches")
        else:
            print(f"! {os.path.basename(file)} - error")
else:
    print(f"! out/ directory not found")

print(f"\nTotal replacements: {total}")
sys.exit(0)
