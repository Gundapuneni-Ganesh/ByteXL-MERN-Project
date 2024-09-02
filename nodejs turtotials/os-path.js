console.log("hello world")
function add(a,b){
    return a+b;
}
 //console.log(add(23456,34567));
// const os = require('os');
// console.log(os.type())
// console.log(os.version())
// console.log(os.freemem())
// console.log(os.cpus())

const path = require('path');
console.log(path.dirname(__filename))
console.log(path.basename(__filename))
console.log(path.extname(__filename))
console.log(path.parse(__filename))
console.log(path.join(__filename))
console.log(path.normalize(__filename))
console.log(path.sep)