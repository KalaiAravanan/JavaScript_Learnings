async function testApi(){
    try{
        await Promise.reject("503 unavailble");            
       }
    catch(error){
        console.log(error)
    }finally{
        console.log("code clean up")
    }
}

testApi();