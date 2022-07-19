const express = require('express');

// express app
const app = express();

// listen for requests on port 3000 at localhost(default)
app.listen(3000, () => {
    console.log('listening on port 3000');
})

// get request
app.get('/', (req, res) => {
    // send method by express automatically infers the status code and content type
    // so we don't need to set headers and status code manually as we do in nodejs
    // res.send('Hello World');
    res.sendFile(__dirname + '/index.html'); //sendFile is a method of express that looks for a file using the absolute path and not the relative path, so we need to use the __dirname 
})

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/about.html');
})

// redirects
app.get('/about-me', (req, res) => {
    res.redirect('/about');
})

// 404 page
app.get('*', (req, res) => {  // same way we do in react
    res.status(404).sendFile(__dirname + '/404.html');
});

// OR

// using middleware
// the callback function is fired for every single request being made to the server
// so we keep it at the bottom of the code to look only for the junk url requests
// app.use((req, res) => {
//     res.status(404).sendFile(__dirname + '/404.html');
// }