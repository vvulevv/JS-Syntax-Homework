"use strict"
function convertDigitToWord(digit) {
    switch (digit){
        case 1: console.log('one'); break;
        case 2: console.log('two'); break;
        case 3: console.log('three'); break;
        case 4: console.log('four'); break;
        case 5: console.log('five'); break;
        case 6: console.log('six'); break;
        case 7: console.log('seven'); break;
        case 8: console.log('eight'); break;
        case 9: console.log('nine'); break;
        default:
            console.log('Invalid input'); break;
    }
}
convertDigitToWord(8);
convertDigitToWord(3);
convertDigitToWord(5);
//few more tests :)
convertDigitToWord(2);
convertDigitToWord(4);
convertDigitToWord(1);
convertDigitToWord(9);
convertDigitToWord(10);
convertDigitToWord(7);
convertDigitToWord(6);
convertDigitToWord(521085);