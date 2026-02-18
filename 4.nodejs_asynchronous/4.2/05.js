const {readFile} = require('fs');

readFile(__filename, 'utf8', (err, data) => {
    if(err) {
        console.error('Error reading file:', err);
        return;
    }
    console.log('File contents:', data);
});