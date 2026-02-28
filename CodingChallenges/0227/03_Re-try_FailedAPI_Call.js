
let MaxAttempts = 1;

do{
    let num = Math.random()
    console.log("Attempt " + MaxAttempts +":");
    if(num > 0.6)
    {   console.log("Success - API call passed");
        break;
    }
    else{
        console.log("Failed - Timeout/ Error");
    }
    
    MaxAttempts = MaxAttempts + 1;

}while(MaxAttempts <= 5)