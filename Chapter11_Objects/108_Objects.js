// Objects
// Key and value
let student1 = { name: "Amit", age: 65 };
let student2 = { name: "Pramod" };
let student3 = { name: "Pramod", age: 87, phone: 987654320 };

console.log(student1.name, student1.age)

// Key will not be in the doubt quotes
// below key in doubt is actually JSON
let JSON_student4 = { "name": "Pramod", "age": 87, "phone": 987654320 };

// -------

let a = { status: "pass" };
console.log(a.status);
console.log(a["status"]);


let b = a;
b.status = "fail"
console.log(b.status)

// Two separate objects — different memory
let c = { status: "pass" };
let d = { status: "pass" };
console.log(c === d);