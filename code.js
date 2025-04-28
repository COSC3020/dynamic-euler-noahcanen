function factorial(n) {
    if(n === 0) return 1
    num = 1
    i=1
    while(i <= n){
        num = i * num
        i++
    }
    return num;
}
function factorial1(n) {
    if(n === 0) return 1;
    else return n * factorial(n - 1);
}
n = 10
console.log(factorial(n),factorial1(n))

function e(n) {
    if(n === 0) return 1
    num = 1
    Euler = 1
    i=1
    while(i <= n){
        num = i * num
        i++
        Euler = 1.0/num + Euler
    }
    return Euler
}
function e1(n) {
    if(n === 0) return 1;
    else return 1.0 / factorial1(n) + e1(n - 1);
}
