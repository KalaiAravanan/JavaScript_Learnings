const obj = { a: 1, b: 2, c: 3 };

//console.log(Object.keys(obj))
//console.log(Object.values(obj))
//console.log(Object.entries(obj))

//for(const objs in obj){
// console.log(`${objs}`)
// console.log(`${obj[objs]}`)
//}

Object.entries(obj).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});