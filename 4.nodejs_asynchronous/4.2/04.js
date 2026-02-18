const fs = require('fs');

const writeFile = (i) => {
    if(i >= 100) {
        return;
    }

    const text = `write: ${i}`;
    fs.writeFile('./data.text',text,(err) => {
        if(err) {
            console.error('Error writing file:', err);
            return;
        }
        console.log(text);
        writeFile(i + 1);
    });
}

writeFile(0);