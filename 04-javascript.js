//Promises and async and await
let fs = require("fs/promises");
// fs.readFile("file.txt", "utf-8", (err, data) => {
//   console.log(err, data);
// });

let a = fs.readFile("file.txt", "utf-8");
a.then((data) => {
  console.log(data);
});

console.log("This is the end of file");

//Here the console.log('This is the end of the file') will run first because there are three steps in the above function which takes time to run

//In a case, we have a lot of call backs inside a lot of call backs
//Promises are a better way to handle it, a promise means that it is ensuring that it will run
