const fs = require('fs');

fs.readFile(__filename, 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }   
    console.log('File contents:', data);
});

// const {request} = require('undici');

// request('https://www.yahoo.co.jp/')
//     .then(response => response.body.text())
//     .then(body => {
//         console.log('Response body:', body);
//     });