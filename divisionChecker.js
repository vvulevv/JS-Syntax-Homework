"use strict"

function divisionBy3(number){
    if (number > 9){
        var sum = 0;

        for (var i = 0; i < number.length; i++){
              if (number !== 0){
                  sum += Number(number%10);
                  number = Math.floor(number/10);
              }
        }
        if (sum % 3 == 0){
            console.log('the number is divided by 3 without remainder');
        }
        else{
            console.log('the number is not divided by 3 without remainder');
        }
    }
}
divisionBy3(12);
divisionBy3(188);
divisionBy3(591);

//extra example for checking:
divisionBy3(5678);