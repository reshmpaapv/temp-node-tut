const path = require("path");
console.log(path.sep);
const filePath = path.join("/Content", "subfolder", "text.txt");
console.log(filePath);
const base = path.basename(filePath);
console.log(`base:${base}`);
const absolute = path.resolve(__dirname, "Content", "subfolder", "test.txt");
console.log(absolute);
