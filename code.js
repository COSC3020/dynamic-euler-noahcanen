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
