const { readFile } = require('fs');

console.log('A');

readFile(__filename, 'utf8', (err, data) => {
    console.log('B',data);
});

console.log('C');