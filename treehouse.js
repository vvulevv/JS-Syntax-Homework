"use strict"
function treeHouseCompare(a, b){
    var houseBottom = a*a;
    var houseRoof = (a* (a * 2/3))/2;
    var houseArea = houseBottom + houseRoof;
    var treeStalk = b * b/3;
    var treeTop = Math.PI*(b*2/3)*(b*2/3);
    var treeArea = treeStalk + treeTop;

    if(houseArea > treeArea){
        console.log('house/' + houseArea.toFixed(2));
    }
    else{
        console.log('tree/' + treeArea.toFixed(2));
    }
}
treeHouseCompare(3,2);
treeHouseCompare(3,3);
treeHouseCompare(4,5);