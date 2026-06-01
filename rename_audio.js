const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'public');
const files = fs.readdirSync(dir);

files.forEach(file => {
  if (file.endsWith('.mp3')) {
    let newName = '';
    if (file.includes('Beautiful packaging')) newName = 'audio_noor.mp3';
    if (file.includes('I bought the VioR Cica Cream')) newName = 'audio_amelie.mp3';
    if (file.includes('refillable')) newName = 'audio_sofia.mp3';
    if (file.includes('Rich Moisture Cream')) newName = 'audio_yui.mp3';
    
    if (newName) {
      fs.renameSync(path.join(dir, file), path.join(dir, newName));
      console.log(`Renamed ${file} to ${newName}`);
    }
  }
});
