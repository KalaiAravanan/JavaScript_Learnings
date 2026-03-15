///Given a raw Playwright error message string, write a function that trims extra spaces, converts the message 
// to lowercase, collapses multiple spaces into a single space, and prints a category. Use `TIMEOUT` if the 
// normalized message contains `"timeout"`, `LOCATOR` if it contains `"locator"`, otherwise `GENERAL`.

let rawMessage = " Locator not found after TIMEOUT "

function removeExtraSpaces(str) {
    if (typeof str !== "string") {
        throw new TypeError("Input must be a string");
    }

    // Trim leading/trailing spaces and replace multiple spaces with a single space
    return str.trim().replace(/\s+/g, " ");
}

let result = removeExtraSpaces(rawMessage)
console.log(result);

const regex = /\btimeout\b/i; // whole word, case-insensitive

if (regex.test(result)) {
    console.log("Category: TIMEOUT");
} else {
    console.log("Category: GENERAL");
}