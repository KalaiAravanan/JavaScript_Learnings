interface calculator{
    add (a:number, b:number) : number,
    sub (a:number, b:number) : number,
    mul (a:number, b:number) : number
}

let calc : calculator = {
    add : (a , b) => a + b,
    sub: (a , b) => a - b,
    mul : (a , b) => a * b
}

console.log(calc);
//npx ts-node Chapter19_TS_Interfaces/186_TS_Method_Sign.ts