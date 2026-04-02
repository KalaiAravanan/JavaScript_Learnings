Promise.allSettled([
      Promise.resolve("Test A Passed!"),
      Promise.reject("Test B Passed !"),
      Promise.resolve("Test C passes")
]).then (function (results){

    results.forEach(function(r,i){
        console.log(i+1, r.status, r.reason || r.value)
    })
});