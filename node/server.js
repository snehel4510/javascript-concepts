const http = require('http');

// create a server object
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);  // runs when the request is being made via the browser to the server on it's respective host & port where it is listening

    // sending response back to the browser
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>Hello World</h1>');
    res.write('<p>Hello World</p>');
    res.end();
})

// listening on port 3000, IP defaults to localhost
const PORT = 3000;
server.listen(PORT, 'localhost',() => {
    console.log(`listening on port ${PORT}`); // runs when server starts
})

