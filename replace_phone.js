#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const glob = require('glob');

const OLD_PHONE = "9493700577";
const NEW_PHONE = "9390370577";

function replaceInFile(filepath) {
  try {
    let content = fs.readFileSync(filepath, 'utf8');
    const originalContent = content;
    
    if (content.includes(OLD_PHONE)) {
      content = content.split(OLD_PHONE).join(NEW_PHONE);
      fs.writeFileSync(filepath, content, 'utf8');
      const count = (originalContent.match(new RegExp(OLD_PHONE, 'g')) || []).length;
      return count;
    }
    return 0;
  } catch (e) {
    console.error(`Error processing ${filepath}: ${e.message}`);
    return -1;
  }
}

const outDir = path.join(__dirname, 'out');
let total = 0;

console.log("Processing out/ directory...");
if (fs.existsSync(outDir)) {
  const files = fs.readdirSync(outDir)
    .filter(f => f.endsWith('.html') || f.endsWith('.txt'))
    .map(f => path.join(outDir, f));
  
  for (const file of files) {
    const count = replaceInFile(file);
    if (count > 0) {
      total += count;
      console.log(`✓ ${path.basename(file)} - ${count} replacement(s)`);
    } else if (count === 0) {
      console.log(`- ${path.basename(file)} - no matches`);
    } else {
      console.log(`! ${path.basename(file)} - error`);
    }
  }
} else {
  console.log("! out/ directory not found");
}

console.log(`\nTotal replacements: ${total}`);
process.exit(0);
