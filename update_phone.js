const fs = require('fs');
const path = require('path');

const oldPhone = '9493700577';
const newPhone = '9390370577';

// Update out directory files
const outDir = './out';
if (fs.existsSync(outDir)) {
    const files = fs.readdirSync(outDir);
    files.forEach(file => {
        if (file.endsWith('.html') || file.endsWith('.txt')) {
            const filepath = path.join(outDir, file);
            try {
                let content = fs.readFileSync(filepath, 'utf8');
                if (content.includes(oldPhone)) {
                    content = content.split(oldPhone).join(newPhone);
                    fs.writeFileSync(filepath, content, 'utf8');
                    console.log('Updated: ' + file);
                }
            } catch(e) { console.log('Error: ' + file); }
        }
    });
}
console.log('Done!');
