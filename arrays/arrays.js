// #1
var testArr = [6,3,5,1,2,4];

function printSumAndNum(testArr) {
    var currentSum = 0;

    for(var i = 0; i < testArr.length; i++) {
        var currentSum = currentSum + testArr[i]; 
        console.log("Num: " + testArr[i],"Sum: " + currentSum);
    }
    return currentSum;
}

printSumAndNum(testArr);


/* 

Value * Position

1) Multiply each value in the array by its array position
2) The expected output will be:
[0,3,10,3,8,20]

VAR              |      VALUE
________________________________
array            |   [6, 3, 5, 1, 2, 4]
arrTimesPosition |   0 * 6 -> 1 * 3 -> 2 * 5 -> 3 * 1 -> 4 * 2 -> 5 * 4
i                |   0 -> 1 -> 2 -> 3 -> 4 -> 5
arr[i]           |   0 -> 3 -> 10 -> 3 -> 8 -> 20
*/

var testArr = [6,3,5,1,2,4];

function printProductandSum(testArr) {
    for(var i = 0; i < testArr.length; i++) {
        testArr[i] = i * testArr[i];
    }
    return testArr;
}

printProductandSum(testArr);
