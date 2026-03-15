let arr = [1, 2, 3];
console.log(arr);
// Add to END
arr.push(4);
console.log(arr);

// Remove from END
arr.pop();
console.log(arr);

arr.push(5, 6);
console.log(arr);

// Add to BEGINNING
arr.unshift(0);
console.log(arr);

// Remove from BEGINNING
arr.shift();
console.log(arr);

// [ 1, 2, 3, 5, 6 ]

// splice(start, deleteCount, ...itemsToAdd)
arr.splice(1,2)
console.log(arr); // [1, 5, 6]

arr.splice(2, 0, 99);
console.log(arr);// [1, 5, 99, 6]

arr.splice(1, 2, 10, 20);
console.log(arr); // [1, 10, 20, 6]