
function display(start = 0){

    let counter = start

    return{
        increment() {counter++;},
        decrement() {counter--},
        printfn() { return counter}
    }
}

let msgprint = display(0);
msgprint.increment();
//msgprint.increment();
//msgprint.increment();
//msgprint.decrement();
console.log(msgprint.printfn());