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


/* const {readFileSync,writeFileSync} = require('fs')
const first = readFileSync('./Content/first.txt','utf8');
const second = readFileSync('./Content/subfolder/second.txt','utf8')
console.log(first,second)
writeFileSync('./Content/result-Sync.txt',
      `Here is the result:${first},${second}`
      ,{flag:'a'}
    ) */
   const   {readFile,writeFile} = require('fs')
   readFile('./Content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err)
        return
    }
    const first = result;
     readFile('./Content/second.txt','utf8',(err,result)=>{
       if (err) {
         console.log(err);
         return
       }
       const second = result
      /*  writeFile('./Content/result-async.txt',
        `Here is the result : ${first},${second}`
       ) */
      writeFile('/Content/result-Sync.txt',
      `Here is the result:${first},${second}`,(err,result)=>{
        if(err){
            console.log(err)
            return
        }
        
      })
    })

   })