interface apiResponse {
    readonly statuscode : number, 
    header ? : object, //optional
    body : string
}

let response : apiResponse = {
    statuscode : 200,
    body : '{"user" : "admin"}',
}