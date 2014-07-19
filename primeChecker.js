"use strict"
function isPrime(integerNumber){
    if (isNaN(integerNumber) || !isFinite(integerNumber) || integerNumber%1 || integerNumber<2) {
        return false;
    }
    if (integerNumber%2==0){
        return (integerNumber==2);
    }
    if (integerNumber%3==0){
        return (integerNumber==3);
    }
    var m = Math.sqrt(integerNumber);

    for (var i=5;i<=m;i+=6) {
        if (integerNumber%i==0){
            return false;
        }
        if (integerNumber%(i+2)==0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));
console.log(isPrime(254));
console.log(isPrime(587));