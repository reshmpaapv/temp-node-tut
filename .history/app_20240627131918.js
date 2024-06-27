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
    if(req.url==='/'){
        res.end('Welcome to home page')
    }
    if(req.url==='/about'){
        res.end('Give a short history')
    }
    res.end(`
        <h1>Oops!!</h1>
        <p>We can't seem to find the page that you are looking for</p>
        <a href='#'>Back to home page</a>)
   /*  res.write("Welcome to our home page")
    res.end() */
})
server.listen(5000)
  