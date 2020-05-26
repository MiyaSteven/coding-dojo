"use strict";

// #1 Print odds 1-20
// Print out all odd numbers from 1 to 20
// The expected output will be 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

let numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
function printOddNum (numberArray) {
    for(var i = 0; i < numberArray.length; i++) {
        if(i%2 != 0) {
            console.log(i);
        }
    }
    return numberArray;
}

printOddNum(numberArray);

let arr = [1,2,3,4,5];

function printSumAndNum (arr) {
    var currentSum = 0;
    
    for(var i = 0; i < arr.length; i++){
        var currentSum = currentSum + arr[i];
        console.log("Num: " + arr[i], "Sum: " + currentSum);
    }
    return currentSum;
}

printSumAndNum(arr);

