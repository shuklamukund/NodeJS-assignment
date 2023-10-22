const fs = require('fs');

fs.readFile('nodejs_architecture.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
    } else {
        console.log('Contents of nodejs_architecture.txt:\n', data);
    }
});