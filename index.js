const express = require('express'); // Import the 'express' module to create a web server
const { createServer } = require('node:http');// Import the 'createServer' function from the 'http' module
const { join } = require('node:path'); // Import the 'join' function from the 'path' module
const { Server } = require('socket.io'); // Import the 'Server' class from the 'socket.io' module


const app = express(); // Created an Express application
const server = createServer(app); // Create an HTTP server using the 'createServer' function, passing the Express app as a parameter
                                  // to create an HTTP server using Node.js's http.createServer method attaching express app to the HTTP server. The Express app will handle routing, middleware, and other aspects of request handling
const io = new Server(server); // Create a new instance of Socket.IO, passing the HTTP server as a parameter


app.get('/', (req, res) => { // Define a route for handling HTTP GET requests to the root path '/', send file used to send content inside the file ("here index.html") as a response back to the client
  res.sendFile(join(__dirname, 'index.html')); // ippo enthenkilum okk file name varumbol aan "sendFile" use cheyyunne
});

io.on('connection', (socket) => { // Socket.IO event handling for 'connection' event
//   console.log('a user connected'); //This block of code listens for the 'connection' event, which is triggered whenever a client successfully connects to the server through Socket.IO.

//   socket.on('disconnect', () => { // if its disconnected
//     console.log('user disconnected');
//   });

socket.on('chat message', (msg) => { //This event is triggered when a client sends a 'chat message' event to the server.
                                     // The provided callback function(ie, "msg") is executed when the 'chat message' event occurs.
    console.log('message: ' + msg);
  });
});



server.listen(3000, () => { // Start the server and listen on port 3000
  console.log('server running at http://localhost:3000');
});