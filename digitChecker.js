"use strict"
function checkDigit(number){
    if (number > 1000){
        var newNumber = (number - (number % 100))/100;
        var thirdDigit = newNumber%10;
        if (thirdDigit == 3){
            console.log(true);
        }
        else{
            console.log(false);
        }
    }
}
checkDigit(1235);
checkDigit(25368);
checkDigit(123456);