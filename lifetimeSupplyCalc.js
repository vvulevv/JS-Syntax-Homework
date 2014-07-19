"use strict"
function calcSupply(currentAge, maxAge, food){
    var result = 365*food*(maxAge-currentAge);

    console.log(Math.floor(result) + 'kg of chicken steaks would be enough until I am ' + maxAge + 'years old.')
}
calcSupply(38, 118, 0.5);
calcSupply(20, 87, 2);
calcSupply(16, 102, 1.1);
