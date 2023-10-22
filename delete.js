const fs = require('fs');

const filePath = 'nodejs_architecture.txt';

fs.unlink(filePath, (err) => {
    if (err) {
        console.error('Error deleting file:', err);
    } else {
        console.log('nodejs_architecture.txt has been deleted.');
    }
});