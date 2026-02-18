const { readFile, writeFile, chmod, read } = require('fs');

const backupFile = `${__filename}-${Date.now()}`;

readFile(__filename, 'utf8', (err, data) => {
    if(err) {
        return console.error('Error reading file:', err);
    }
    writeFile(backupFile, data, (err) => {
        if(err) {
            return console.error('Error writing file:', err);
        }
        chmod(backupFile, 0o400, (err) => {
            if(err) {
                return console.error('Error changing file permissions:', err);
            }
            console.log('done');
        });

    });
});