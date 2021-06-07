var fs = require('fs');

var da = fs.readFile('new.txt', 'utf8', function(err, data) { // if you declare the utf8 then only it displays the text otherwise it gives buffer code
    console.log(data)
});
var test = fs.exists('new.txt', (exists) => {
    return (exists ? 'Found' : 'Not Found!');
});
console.log(test)

var url = require('url');
var adr = 'http://localhost:8080/default.htm?year=2017&month=february';
//Parse the address:
var q = url.parse(adr, true);


/* Common use for the File System module:

Read files
Create files
Update files
Delete files
Rename files
 */



//readFile
var http = require('http');
var fs = require('fs');
http.createServer(function(req, res) {
    fs.readFile('testt.html', function(err, data) {
        res.write(data);
        return res.end();
    });
}).listen(8080);




//appendFile

fs.appendFile('testt.html', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});




//open
/* The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist, an empty file is created:

Example
Create a new, empty file using the open() method: */

fs.open('mynewfile2.txt', 'w', function(err, file) {
    if (err) throw err;
    console.log('Saved!');
});




//writeFile
fs.writeFile('mynewfile3.txt', 'Hello content!', function(err) {
    if (err) throw err;
    console.log('Saved!');
});



//appendFile
fs.appendFile('mynewfile1.txt', ' This is my text.', function(err) {
    if (err) throw err;
    console.log('Updated!');
});


//delete
fs.unlink('mynewfile2.txt', function(err) {
    if (err) throw err;
    console.log('File deleted!');
});




// file rename
var fs = require('fs');

fs.rename('mynewfile1.txt', 'myrenamedfile.txt', function(err) {
    if (err) throw err;
    console.log('File Renamed!');
});