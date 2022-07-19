const http = require('http');
const fs = require('fs');
const _ = require('lodash');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method); 

    // lodash
    const num = _.random(1, 20); // a random number between 1 and 20
    console.log(num);

    // run a function only once after the request is made
    const greet = _.once(() => {
        console.log('hello');
    });
    greet();
    greet();

    // Basic routing
    let path = './views';
    switch(req.url) {
        case '/':
            path += '/index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += '/about.html';
            res.statusCode = 200;
            break;
        // handling redirects
        case '/about-me':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;
        default:
            path += '/404.html';
            res.statusCode = 404;
            break;
    }

    // set header
    res.setHeader('Content-Type', 'text/html');

    // read the html file
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) { 
            console.log(err);
            res.end();
        }
        // write the html file
        else {
            // res.write(data);
            res.end(data);
        }
    });
})

server.listen(3000,() => {
    console.log(`listening on port 3000`);
})

