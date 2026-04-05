async function getResults(){
    return "pass";
}

getResults().then(function(result){
    console.log(result)    
});

async function callrun(){
    let tpass = await Promise.resolve("Test pass");
    let dpass = await Promise.resolve("Dashboard pass");
}

callrun();