/*
1) Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
2) Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
3) Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
4) Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
5) Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
6) Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
7) Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
8) Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
9) Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
10) Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
11) Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
12) Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
13) Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
*/
// Globals
let array = [1, 2, 2, 3, 5, 7];
let numArray = [];
let oddNumberArray = [];

// 1) Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function addNumbers(){
    for (i = 1; i < 256; i++){
        numArray.push(i);
    }
    return numArray;
}
addNumbers(numArray);

// 2) Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function getEvenNumbers(i){
    var sum = 0;
    for (i = 0; i < 1001; i++){
        if (i % 2 == 0){
            sum = sum + i;
        }
    }
    return sum;
}
getEvenNumbers(i);

//3) Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function getOddNumbers(i){
    var sum = 0;
    for (i = 0; i < 5001; i++){
        if (i % 2 != 0){
            sum = sum + i;
        }
    }
    return sum;
}
getOddNumbers(i);

// 4) Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function getSum(){
    var totalSum = 0;
    for(i = 0; i < array.length; i++){
        totalSum = totalSum + array[i];
    }
    return totalSum;
}
getSum();

// 5) Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function findMax(array){
    var max = 0;
    for(i = 0; i < array.length; i++){
        if (array[i] > max){
            max = array[i];
        }
    }
    return max;
}
findMax(array);

// 6) Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function getAverageNumber(array){
    var totalSum = 0;
    var average = 0;
    for(i = 0; i < array.length; i++){
        totalSum = totalSum + array[i];
    }
    average = totalSum/array.length;
    return average;
}
getAverageNumber(array); 

// 7) Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function getOddNumbers(){
    for (i = 0; i < 51; i++){
        if(i % 2 != 0){
            oddNumberArray.push(i);
        }
    }
    return oddNumberArray;
}
getOddNumbers();

// 8) Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greaterNumbers(num){
    var counter = 0;
    for (i = 0; i < array.length; i++){
        if (array[i] > num) {
            counter++;
        }
    }
    return counter;
}
greaterNumbers(2);

// 9) Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
let array = [1, 2, 2, 3, 5, 7];

function squareNumber(){ 
    for(i = 0; i < array.length; i++){
        array[i] = array[i] * array[i];
    }
    return array;
}
squareNumber(array);

// 10) Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
let negativeNumArray = [-1, 2, -2, 3, -5, 7];

function negativeToZero(){

    for(i = 0; i < negativeNumArray.length; i++){
        if(negativeNumArray[i] < 0){
            negativeNumArray[i] = 0;
        }
    }
    return negativeNumArray;
}
negativeToZero(negativeNumArray);

// 11) Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
let numbersArray = [1, 20, 4, 7];

function getMaxMinAvg(numbersArray){
    let maxMinAvgArray = [];
    let max = numbersArray[0];
    let min = numbersArray[0];
    let avg = numbersArray[0];
    let totalSum = 0;

    for(i = 0; i < numbersArray.length; i++){
        if(numbersArray[i] > max){
            max = numbersArray[i];
        } 
        else if(numbersArray[i] < min){
            min = numbersArray[i];
        }
        totalSum = totalSum + numbersArray[i];
        avg = totalSum / numbersArray.length;
        maxMinAvgArray = [max, min, avg];
    }
    return maxMinAvgArray;
}
getMaxMinAvg(numbersArray);



//mystuff

function MaxMinAverage(x){
    var max=x[0];
    var min=x[0];
    var sum=x[0];
    for(var i=0; i<x.length; i++){
        sum+=x[i];
        if(x[i]>max){
            max=x[i];
        }
        else if(x[i]<min){
            min=x[i];
        }
    }
    var avg=sum/=x.length;
    var MaxMinAvg=[max,min,avg];
    return MaxMinAvg;
}
var MaxMinAvg=MaxMinAverage([4,5,6,7,14,56,78]);
console.log(MaxMinAvg)

