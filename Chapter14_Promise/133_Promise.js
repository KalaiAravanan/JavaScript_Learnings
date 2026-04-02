let order = new Promise(function (resolve,reject) {

    let foodready = true
    if(foodready){
        resolve("Deliver food")
    }
    else{
        reject("Order failed")
    }
})

console.log(order)