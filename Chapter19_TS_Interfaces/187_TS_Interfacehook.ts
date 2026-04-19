interface testhook{
    (testname : string) : void
}

let beforehook: testhook =
function(testname : string): void{
    console.log("[BEFORE] Setting up: " + testname);
}

let afterhook: testhook = 
function(testname: string) : void{
    console.log("[AFTER] setting up: " + testname);
}

beforehook("login")

//npx ts-node Chapter19_TS_Interfaces/187_TS_Interfacehook.ts