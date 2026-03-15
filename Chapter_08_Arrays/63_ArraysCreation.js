let fruits = [];

let fruiter = ["apple","banana","grapes"];

let arr = [10,20,30];
console.log(arr.length); // 3
console.log(arr[0]); // 10
console.log(arr[3]); // undefined

let testResults = ["pass", "fail", "pass", "skip"];
let mixed = [1, "hello", true, null]; // JS arrays can hold any type

// Creating Arrays

// Array literal (preferred)
let browsers = ["Chrome", "Firefox", "Safari"];


// Array constructor
let scores = new Array(3);  // creates [empty x 3]
let scores2 = new Array(1, 2, 3); // creates [1, 2, 3]
console.log(scores2);

let numbers = new Array(100,200,300);
console.log(numbers);
console.log(numbers.length);

let test = Array.of(10, 20, 30, 40, 50);//0-4: 5
console.log(test);
console.log(test[0]);

let addArr = Array.from("hello"); // ['h', 'e', 'l', 'l', 'o']
console.log(addArr);