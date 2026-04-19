let apiResponse : unknown = {
    status : 200,
    body : { user:"admin", role: "tester"}
}

interface userResponse {
    status : number,
    body : { user: string , role: string}
}

let response = apiResponse as userResponse;

console.log(response.status)
console.log(response.body.user, response.body.role)
