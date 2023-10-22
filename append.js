const fs = require('fs');

const additionalAdvantages = `
Additional Advantages of Node.js:

1. Non-blocking I/O: Node.js is designed to handle asynchronous operations efficiently, making it suitable for I/O-intensive applications.
2. Scalability: Node.js applications can be easily scaled to handle a large number of concurrent connections.
3. Fast Execution: Node.js uses the V8 engine, resulting in high-performance JavaScript execution.
4. Rich Ecosystem: Node.js has a vast ecosystem of libraries and modules available via npm (Node Package Manager).
`;

fs.appendFile('nodejs_architecture.txt', additionalAdvantages, (err) => {
    if (err) {
        console.error('Error appending to file:', err);
    } else {
        console.log('Advantages appended to nodejs_architecture.txt');
        fs.readFile('nodejs_architecture.txt', 'utf8', (readErr, data) => {
            if (readErr) {
                console.error('Error reading file:', readErr);
            } else {
                console.log('Updated Contents of nodejs_architecture.txt:\n', data);
            }
        });
    }
});