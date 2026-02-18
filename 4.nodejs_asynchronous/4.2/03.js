const fs = require('fs');

for(let i = 0; i < 100; i++) {
    const text = `write: ${i}`;
    fs.writeFile('./data.text',text,(err) => {
        if(err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log(text);
    });
}