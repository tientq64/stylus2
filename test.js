const fs = require("fs");
const stylus = require("./stylus.js");

let text;

text = fs.readFileSync("test.styl", "utf8");
text = stylus.render(text);

try {
  fs.unlink("test.css");
} catch {}

fs.writeFileSync("test.css", text);

console.log("Tested", Date.now());
