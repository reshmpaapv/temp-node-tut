const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./Content/first.txt", "utf8");
const second = readFileSync("./Content/subfolder/second.txt", "utf8");
console.log(first, second);
writeFileSync(
  "./Content/result-Sync.txt",
  `Here is the result:${first},${second}`,
  { flag: "a" }
);
console.log("done with this task");
