/* const names = require("./04-names");
const sayHi =require('./05-utils'); */
//console.log(names);
/* const data = require('./06-alternative-flavor');
console.log(data);
require("./07-mind-grenade") */

// sayHi(`Susan`);
// sayHi(names.peter);
// sayHi(names.John);
const path = require('path')
console.log(path.sep)
const filePath = path.join('/Content','subfolder','text.txt')
console.log(filePath)
const base = path.basename(filePath)
console.log(`base:${base}`)
const absolute = path.re