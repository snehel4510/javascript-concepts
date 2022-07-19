const fs = require('fs')

// reading files
// readFlie is an asynchronous non-blocking function
// console.log('start');
// fs.readFile('./docs/blogs.txt',(err,data) => {
//     if(err) console.log(err);
//     // console.log(data);// return the buffer
//     else 
//     console.log(data.toString());// return the actual data present in the file
// })
// console.log('end');


// but readFileSync is a synchronous blocking function
// it will block the execution of the code until the file is read
// console.log('start');
// fs.readFileSync('./docs/blogs.txt',(err,data) => {
//     if(err) console.log(err);
//     console.log(data.toString());
// })
// console.log('end');

// writing files
// const data = 'new data overriden to the file contents';
// fs.writeFile('./docs/blogs.txt',data,(err) => {
//     if(err) console.log(err);
//     console.log('file written');
// })

// // creating new files
// // if a file does not exist, it will be created
// fs.writeFile('./docs/blog1.txt','new file',(err) => {
//     if(err) console.log(err);
//     console.log('file was created with data');
// })



// working with directories
// creating a new folder
// fs.mkdir('./docs/newfolder',(err) => {
//     if(err) console.log(err);  // in case of the folder already exists
//     console.log('folder created');
// });

// or else we can do something like this to get rid of the error
// if(!fs.existsSync('./docs/newfolder')){ // if the folder does not exist
//     fs.mkdir('./docs/newfolder',() => {
//         console.log('folder created');
//     });
// } else { // if the folder already exists, then delete it
//     fs.rmdir('./docs/newfolder',(err) => {
//         if(err) console.log(err);
//         console.log('folder deleted');
//     });
// }


// deleting files
if(fs.existsSync('./docs/delete.txt')){
    fs.unlink('./docs/delete.txt',(err) => {
        if(err) console.log(err);
        console.log('file deleted');
    })
}