//accessing and modofiying

let status = ["active", "inactive", "pending"];
console.log(status);

console.log(status[0]); // "active"
console.log(status[1]); 

console.log(status.at(-1)); //last element
console.log(status.at(-2)); //last one before element

status[1] = "suspended";
console.log(status); // ["active", "suspended", "pending"]