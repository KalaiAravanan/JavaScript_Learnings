import { BASE_URL as bul_util, formatTestName } from "./utility.js";
import { BASE_URL as bul_testtul, formatUpperCaseString } from "./testutility.js";
//when calling same name variable from different utility file you can use alias name to avoid conflict and access them

console.log(bul_util);
console.log(bul_testtul);
console.log(formatTestName("login"));