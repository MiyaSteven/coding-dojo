/*
1) Biggie Size - Given an array, write a function that changes all positive numbers in the array to the string "big".  Example: makeItBig([-1,3,5,-5]) returns that same array, changed to [-1, "big", "big", -5].
2) Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.
3) Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.
4) Double Vision - Given an array (similar to saying 'takes in an array'), create a function that returns a new array where each value in the original array has been doubled.  Calling double([1,2,3]) should return [2,4,6] without changing the original array.
5) Count Positives - Given an array of numbers, create a function to replace the last value with the number of positive values found in the array.  Example, countPositives([-1,1,1,1]) changes the original array to [-1,1,1,3] and returns it.
6) Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
7) Increment the Seconds - Given an array of numbers arr, add 1 to every other element, specifically those whose index is odd (arr[1], arr[3], arr[5], etc).  Afterward, console.log each array value and return arr.
8) *Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
9) Add Seven - Build a function that accepts an array. Return a new array with all the values of the original, but add 7 to each. Do not alter the original array.  Example, addSeven([1,2,3]) should return [8,9,10] in a new array.
10) *Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
11) Outlook: Negative - Given an array, create and return a new one containing all the values of the original array, but make them all negative (not simply multiplied by -1). Given [1,-3,5], return [-1,-3,-5].
12) Always Hungry - Create a function that accepts an array, and prints "yummy" each time one of the values is equal to "food".  If no array values are "food", then print "I'm hungry" once.
13) *Swap Toward the Center - Given an array, swap the first and last values, third and third-to-last values, etc.  Example: swapTowardCenter([true,42,"Ada",2,"pizza"]) turns the array into ["pizza", 42, "Ada", 2, true].  swapTowardCenter([1,2,3,4,5,6]) turns the array into [6,2,4,3,5,1].  No need to return the array this time.
14) Scale the Array - Given an array arr and a number num, multiply all values in the array arr by the number num, and return the changed array arr.  For example, scaleArray([1,2,3], 3) should return [3,6,9].
*/
let array = [-1, 2, 4, -3, 5];

function makeItBig(array){
    for (i = 0; i < array.length; i++){
        if (array[i] > 0){
            array[i] = "big"
        }
    }
    return array;
}
makeItBig(array);

// 2) Print Low, Return High - Create a function that takes in an array of numbers.  The function should print the lowest value in the array, and return the highest value in the array.

let array2 = [1, 3, 5, 7]
function printLowReturnHigh(){
    let low = array2[0];
    let high = array2[0];
    for(i = 0; i < array2.length; i++){
        if (array2[i] < low) {
            low = array2[i];
        } else if (array2[i] > high){
            high = array2[i];
        }
        console.log(low);
    }
    return high;
}
printLowReturnHigh();

// 3) Print One, Return Another - Build a function that takes in an array of numbers.  The function should print the second-to-last value in the array, and return the first odd value in the array.


// * 6) Evens and Odds - Create a function that accepts an array.  Every time that array has three odd values in a row, print "That's odd!".  Every time the array has three evens in a row, print "Even more so!".
let evenAndOddArray = [1, 3, 5, 2, 4, 6, 1 , 5, 6, 4, 2];
function printEvenAndOdds(){
    var printEvenCounter = 0;
    var printOddCounter = 0;
    for (i = 0; i < evenAndOddArray.length; i++){
        if (evenAndOddArray[i] % 2 == 0 && printEvenCounter == 2){
            console.log("Even more so!");
            printEvenCounter = 0;
        } else if (evenAndOddArray[i] % 2 == 0 && printEvenCounter < 3){
            printEvenCounter++;
        } else if(evenAndOddArray[i] % 2 != 0 && printOddCounter == 2){
            console.log("That's odd!");
            printOddCounter = 0;
        } else if (evenAndOddArray[i] % 2 != 0 && printOddCounter < 3)
            printOddCounter++;
    }
    return evenAndOddArray;
}
printEvenAndOdds(evenAndOddArray);


// 8) *Previous Lengths - You are passed an array (similar to saying 'takes in an array' or 'given an array') containing strings.  Working within that same array, replace each string with a number - the length of the string at the previous array index - and return the array.  For example, previousLengths(["hello", "dojo", "awesome"]) should return ["hello", 5, 4]. Hint: Can for loops only go forward?
var stringArray = ["Hello", "Dojo", "Awesome"];
function countCharacters (){
    for (i = stringArray.length - 1; i > 0; i--){
        stringArray[i] = stringArray[i-1].length;
    }
    return stringArray;
}
countCharacters(stringArray);

// 10) *Reverse Array - Given an array, write a function that reverses its values, in-place.  Example: reverse([3,1,6,4,2]) returns the same array, but now contains values reversed like so... [2,4,6,1,3].  Do this without creating an empty temporary array.  (Hint: you'll need to swap values).
function reverseValues(){
    var arr = [1, 2, 3, 5];
    for (i = 0; i < arr.length; i++){
        arr[i] = frontValue;
    }   for (x = arr.length; x > 0; x--){
        arr[x] = endValue;
    }
}
