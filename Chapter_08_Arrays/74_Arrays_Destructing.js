//let [first, second, third] = [10, 20, 30];

//console.log(first);
//console.log(second);
//console.log(third);

//let [first, second, ...third] = [10, 20, 30, 40, 50];
//console.log(first);
//console.log(second);
//console.log(third);

let [...name] = ["Kalai", "Selvi"] ;
console.log(name);

let [...email] = [...name].concat("@playwirght.com")
console.log(email);