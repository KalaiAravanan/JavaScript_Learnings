let amul = null;

let milk = amul ?? "Nandhini milk";
console.log(milk); // Nandhini milk

let val2 = null ?? "default";   // "default" (?? returns right side if left is null/undefined)

// Modern JS - Typescript.

let val = "default";
val = "which milk ? -> " + val;
console.log(val)
// very useful in test data handling.