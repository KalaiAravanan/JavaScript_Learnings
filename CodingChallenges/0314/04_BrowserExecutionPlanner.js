//You have an array of all supported browsers and another array of temporarily blocked browsers.
//  Write a function that returns the runnable browsers, the blocked browsers, and a printable execution plan string 
// such as `"Run on: chromium, webkit | Skip: firefox"`.

let supportedBrowser = ["Edge", "Chrome"];
let blockedBrowser = ["IE","Brave"];

console.log("Execution Plan")
console.log("Run on: " + supportedBrowser + "| Skip: " + blockedBrowser)

