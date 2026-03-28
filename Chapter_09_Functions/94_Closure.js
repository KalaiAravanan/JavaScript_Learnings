
function outer(){
    let msg= "Hello"
    console.log("outer called")


    function inner(){
        console.log(msg)
    }
    return inner
}

let infn = outer();
infn();