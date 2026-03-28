// Searching & Checking

let url = "https://staging.vwo.com/api/login?retry=true";

// includes()
console.log(url.includes("staging")) //true
console.log(url.includes("production")) //false

//startswith, endswith

console.log(url.startsWith("https:"))
console.log(url.startsWith("http://"))

console.log(url.endsWith("true"))

//index of, last index of
console.log(url.indexOf("a"))

console.log(url.lastIndexOf("a"))