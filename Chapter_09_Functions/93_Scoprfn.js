let env = "staging";

function config(){
    let timeout = 3000
   // console.log(env);
    //console.log(timeout)

}

config()
//console.log(env);
//console.log(timeout) // timeout is undefined error

//nested scope

function outer(){
    let x = 10;

    function inner(){
       let y = 20;        
    }

    console.log(x)
    console.log(y) //
}
outer() //y is not defined error