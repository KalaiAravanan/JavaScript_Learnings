// Iterate - Go from one to another. // 

let tests = ["login", "checkout", "search"];

for (let i = 0; i < tests.length; i++) {
    console.log(tests[i]);
}

console.log("----");

for(let test of tests) {
    console.log(test);
}

console.log("----");

tests.forEach((test,index)=> 
{
        console.log(index, test);
});

console.log("----");

console.log("----");
// entries() — index + value

for (let [i, test] of tests.entries()) {
    console.log(i, test);
}

console.log("----");

let students = ["methis", "senthil", "ajay", "rahul"];

for(let stu in students){
    console.log(students[stu]);
}

for (let student in students) {
    console.log(student, " -> ", students[student]); // index = in
}