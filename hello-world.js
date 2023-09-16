/////////////task1/////////////

//  console.log("hello world")


////////////task2////////////

// var http = require('http');
// http.createServer((req,res)=>{
//     res.end('<h1>Hello Node!!!!</h1>\n')
// }).listen(3000);
// console.log('Server running at http://127.0.0.1:3000/');


/////////////task3///////////////

// var fs = require('fs');
// var data = fs.readFileSync('welcome.txt');
// console.log(data.toString())



///////////task4///////////////

const generatepass = require('generate-password');
var password = generatepass.generate()
console.log(password);

