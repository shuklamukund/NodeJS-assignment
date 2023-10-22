const fs=require('fs');

const nodejsArchitectureInfo = `
Node.js Architecture:

Node.js is built on the V8 JavaScript engine, developed by Google. It allows JavaScript to be executed on the server-side, providing a non-blocking, event-driven architecture.

Key components of Node.js architecture include:

- Event Loop: Manages asynchronous operations and callbacks.
- C++ Addons: Allows integration of C/C++ code with JavaScript.
- libuv: A multi-platform support library for asynchronous I/O.
- Streams: Provides efficient streaming of data.
- Modules: Encourages modular programming using CommonJS modules.

`;

fs.writeFile('nodejs_architecture.txt', nodejsArchitectureInfo, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Node.js architecture information written to nodejs_architecture.txt');
    }
});