// Without functions — repeated logic

//let score1 = 85;
//let result1 = score1 >= 70 ? "pass" : "fail";
//console.log(result1);

//let score2 = 45;
//let result2 = score2 >= 70 ? "pass" : "fail";
//console.log(result2);

function getScore(mark){
    let result = (mark >= 70)? "Pass" : "Fail"
    return result;
}

console.log(getScore(40));
console.log(getScore(74));
