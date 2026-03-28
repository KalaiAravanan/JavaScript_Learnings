function add(a, b, c){
    return a+b+c;
}

let arr = [1,2,3]
console.log(add(...arr));

function errorcodes(...myvalues){
    return  myvalues.some(t=> t >= 400);

}

let values = [200,400,500]
errorcodes(...values)