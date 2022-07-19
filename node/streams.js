const fs = require('fs')

// streams are a way to read and write data into large files
// we don't have to wait for the entire file to be read or written, instead we can read and write chunks of data from the large file every interval and straight away use them to do something

const readStream = fs.createReadStream('./docs/large.txt', {encoding: 'utf8'})
const writeStream = fs.createWriteStream('./docs/blog2.txt')


// readStream.on('data', (chunk) => {
//         console.log("----------New chunk----------");
//         console.log(chunk) // returns the buffer every time a new chucnk of data is received
//         writeStream.write("\nNew Chunk\n")
//         writeStream.write(chunk)
// })


// piping
readStream.pipe(writeStream)