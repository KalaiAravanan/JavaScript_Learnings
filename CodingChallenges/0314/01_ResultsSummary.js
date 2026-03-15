// You receive an array of Playwright step result objects in the format `{ name, status, durationMs }`, where status can be 
// `"passed"`, `"failed"`, or `"skipped"`. Write a JavaScript function that prints a summary report with total steps, passed
// count, failed count, skipped count, total duration, and a comma-separated list of failed step names.

const results = [{ name: "open login", status: "passed", durationMs: 400 },
           { name: "fill form", status: "failed", durationMs: 700 }, 
           { name: "submit", status: "skipped", durationMs: 0 }];

let totalScript = results.length;
//console.log(results);

let passcount = 0, failcount = 0, skipcount = 0;

    let statuses = results.map(t => t.status); 
    //console.log(statuses);
   
    for(let i= 0;i<statuses.length;i++){
    if(statuses[i] == "passed"){
        passcount = passcount + 1;         
    }
    else if(statuses[i] == "failed"){
        failcount = failcount + 1;         
    }
    else if(statuses[i] == "skipped"){
        skipcount = skipcount + 1;         
    }
}

let totalTime = 0;
  let totals = results.map(t => t.durationMs); 
   for (let i = 0; i < totals.length; i++) {
  totalTime += totals[i];
}

console.log("Result Summary");
console.log("Total Steps:" +totalScript);
console.log("Passed: " +passcount);
console.log("Failed: " +failcount);
console.log("Skipped: " +skipcount);
console.log("Duration in MS :" +totalTime);

let allNames = results.map(t=> t.name);
console.log("Steps: " + allNames);
           