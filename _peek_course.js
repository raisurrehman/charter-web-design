const fs = require("fs");
const j = fs.readFileSync("c:/Users/TRS/Pictures/charter-center-redesign/assets/js/main.js", "utf8");
const start = j.indexOf("var EMBEDDED_COURSES = ");
const after = j.indexOf("}];", start); // rough
const cat = j.indexOf("var CATEGORIES = ", start);
const raw = j.slice(start + "var EMBEDDED_COURSES = ".length, cat).trim().replace(/;\s*$/, "");
const d = JSON.parse(raw);
console.log(Object.keys(d));
console.log(JSON.stringify(d.live_courses[0], null, 2));
console.log("ratings?", d.live_courses[0].rating, d.exams[0]);
