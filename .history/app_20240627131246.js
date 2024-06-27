/* const names = require("./04-names");
const sayHi =require('./05-utils'); */
//console.log(names);
/* const data = require('./06-alternative-flavor');
console.log(data);
require("./07-mind-grenade") */

// sayHi(`Susan`);
// sayHi(names.peter);
// sayHi(names.John);
//require("./09-path-module")

const http = require("http")
const server = http.createServer((req,res)=>{
    console.log(req)
    res.write("Welcome to our home page")
    res.end()
})
server.listen(5000)
  