function runlogin(testfn,testname){
    console.log(`${testname}`)
    let result = testfn();
    console.log(`${testname}` + `${result}`)
    return result;
}

function testfn(){
    return "Pass"
}

function failfn(){
    return "Fail"
}

runlogin(testfn,"Login")
runlogin(failfn,"Homepage")
