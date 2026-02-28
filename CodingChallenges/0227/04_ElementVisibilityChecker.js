// In UI automation (Cypress/Playwright), you often need to validate element states
// before interacting with them. Write a JavaScript program that checks an element's 
// properties (isPresent, isDisplayed, isEnabled) and prints the appropriate action 
// a QA engineer should take. Use strict equality (===), logical operators (&&, ||), 
// and the ternary operator for severity level.

//States: READY (all true), DISABLED (present+displayed but not enabled), HIDDEN 
// (present but not displayed), NOT FOUND (not present).
//Severity: CRITICAL (not present), WARNING (not displayed or not enabled), OK (all good).

let isPresent= true, isDisplayed = true, isEnabled = false;
let Severity;

if(isPresent === true   && isDisplayed === true && isEnabled === true){
    console.log("Status: " + "READY");
}else if(isPresent === true && isDisplayed === true && isEnabled === false){
    console.log("Status: " + "DISABLED");
}else if(isPresent === true && isDisplayed === false && isEnabled === true){
    console.log("Status: " + "HIDDEN");
}else if(isPresent === true && isDisplayed === true && isEnabled === true){
     console.log("Status: " + "NOT FOUND");
}


if(isPresent === false){
Severity = (isPresent === false) ? "CRITICAL": "OK";
console.log("Severity: " + Severity);
}

else{
severity = (isDisplayed == false || isEnabled == false) ? "WARNING": "OK";        
console.log("Severity: " + severity);
}