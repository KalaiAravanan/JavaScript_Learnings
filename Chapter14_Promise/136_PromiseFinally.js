let call = new Promise(function (resolve,reject){
    reject("504 error")
})

call.then( function(response){
    console.log(response)
}).catch( function(data){
    console.log(data)
}).finally(function(result){
    console.log("close all DB connections")
})