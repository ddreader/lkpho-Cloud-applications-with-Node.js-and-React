// Import the HTTP module
const http = require('http');

// Import the 'today' module
const today = require('./today');

// Define the request listener function
const requestListener = function (req, res) {
    res.writeHead(200); // Set the status code to 200 (OK)
    let hour = today.getHours();
    let date = today.getDateObject().toLocaleString('en-US', { timeZone: 'America/New_York' }).slice(0, 9);

    let greeting = 'Food is important!';
    if (hour > 7 && hour < 12) {
        greeting = 'Have you had breakfast yet?';
    } else if (hour >= 12 && hour < 15) {
        greeting = 'Have you had lunch yet?';
    } else if (hour >= 15 && hour < 19) {
        greeting = 'Have you had a snack yet?';
    } else if (hour >= 19 && hour < 23) {
        greeting = 'Have you had dinner yet?';
    } else {
        greeting = 'Its late, you should be sleeping!';
    }

    // Send the response with the current date from the 'today' module
    res.end(`Hello, World! \nThe date today is ${date} \n${greeting}`);
};

// Define the port number
const port = 8080;

// Create an HTTP server using the request listener function
const server = http.createServer(requestListener);

// Start the server and listen on the specified port
server.listen(port);
console.log('Server listening on port: ' + port);
