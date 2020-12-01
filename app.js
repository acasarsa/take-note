const fs = require('fs');
// fs.writeFileSync(nameOfFile, dataToWrite);
// fs.writeFileSync('notes.txt', 'My name is Andrew');

// challenge: append a message
//
// 1. use apendFileSync to append to notes.txt
// const newLine = `\n`;
const message = `this should be on the next line\n`;
fs.appendFileSync('notes.txt', message);
