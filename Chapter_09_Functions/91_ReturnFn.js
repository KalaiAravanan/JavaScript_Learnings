// return values

function getstatus(codes){

    if(codes >= 200 && codes < 300) return "Successful call"
    if(codes >= 400 && codes < 500) return "Client error"
    if(codes >= 500 && codes <= 600) return "server error"

}

console.log(getstatus(200))
console.log(getstatus(404))
console.log(getstatus(504))

