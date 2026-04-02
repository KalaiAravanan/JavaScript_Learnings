let apiCall  = new Promise( function (resolve){
    resolve({status:"Pass" , code:200})
})

apiCall.then(function(response){
console.log(response)
console.log(response.status)
console.log(response.code)
})