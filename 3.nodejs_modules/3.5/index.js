const {request} = require('undici');

request('https://www.yahoo.co.jp/')
    .then(response => response.body.text())
    .then(body => {
        console.log('Response body:', body);
    });