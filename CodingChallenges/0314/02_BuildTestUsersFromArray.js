//Write a JavaScript function that receives two arrays: one with names and one with roles. Return a new array of 
// user objects in the format `{ username, email, role }`. The username should be lowercase with spaces replaced by 
// underscores, and the email should use the domain `@playwrightbatch.com`.

const namesArray = ["kalai","selvi"];
const rolesArray = ["QA Tester", "QC Tester"];
let newArray = [];

for(let i= 0;i<namesArray.length;i++){
    newArray += " " + namesArray[i]+ " "  + rolesArray[i] + " " + namesArray[i]+ "@playwrightbatch.com";
}
console.log(newArray);





