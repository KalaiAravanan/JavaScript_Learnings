function openBrowser() {
    return new Promise(function (resolve) {
        resolve("Browser opened!");
    });
}

function goToLogin() {
    return new Promise(function (resolve) {
        resolve("Login page loaded");
    });
}

function enterCredentials() {
    return new Promise(function (resolve) {
        resolve("Credentials entered");
    });
}

function clickLogin() {
    return new Promise(function (resolve) {
        resolve("Logged in successfully");
    });
}

openBrowser().then(function(log){
    console.log(log)
    return goToLogin();
}).then(function(msg){
    console.log(msg)
    return enterCredentials();
}).then(function(text){
    console.log(text)
    return clickLogin();
}).then(function(test){
    console.log(test);
}).catch(function (errors){
    console.log(errors)
}).finally(function(finallytext){
    console.log("this stmt will executely at the end of every execution")
})