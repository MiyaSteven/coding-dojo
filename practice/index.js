/* 
  Array: Find Minimum
  No built in methods
  
  Input: array of ints
  Output: Minimum value in the array
  Input: [1, 5, 2, 9]
  Output: 1
  Input: [5, 1 ,0, 2, 3]
  Output: 0
*/
let arr = [5, 1 ,0, 2, 3]
function findMin(arr) {
    var min = 0;
    for(var i = 0; i < arr.length-1; i++) {
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
findMin(arr);

/* 
  Array: Find Minimum Index
  No built in methods
  
  Input: array of ints
  Output: Index of minimum value in the array
  Input: [1, 5, 2, 9]
  Output: 0
  Input: [5, 1 ,0, 2, 3]
  Output: 2
*/

// var minIndex needs to be flexible to find correct output associated with the index value for the min
let arr = [5, 1 , 0, 2, 3]
function findMin(arr) {
    var min = arr[0];
    var minIndex = 0;
    for(var i = 0; i < arr.length-1; i++) {
        if(arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    }
    return minIndex;
}
result = findMin(arr);
console.log(result)



/* 
  Array: Min to Front
  No built in methods
  
  Input: array of ints
  Output: Same array in same order except min int moved to front
  Input: [1, 5, 2, 9]
  Output: [1, 5, 2, 9]
  Input: [5, 1 ,0, 2, 3, 1]
  Output: [0, 5, 1, 2, 3, 1]
*/ 

let arr = [5, 1 , 0, 2, 3]
let newArr = [];
function findMin(newArr) {
    var min = arr[0];
    var minIndex = arr[0];
    for(var i = 0; i < arr.length-1; i++) {
        if(arr[i] < min) {
            min = arr[i];
            minIndex = i;
        }
    for(var i = 0; i < arr.length; i--){
        newArr.push(arr)
    }
        
    }
    return minIndex;
}
findMin(newArr);



// define an array called arr with values 5, 1, 0, 2, 3, 1
let arr = [5, 1 ,0, 2, 3, 1];
// create function called findMin
function findMin(arr) {
    // create variable called min and start it at 0
    var min = arr[0];
    // create a for loop that iterates over the array starting at arr[0] and inrements by 1 each time
    for(var i = 0; i < arr.length-1; i++) {
        // create an if conditional to check if the value at arr[i] is less than the current min, if it is then set min to the current arr[i] value
        if(arr[i] < min) {
            min = arr[i];
        }
    }
    // you need to return in order to get a result
    return min;
}
// call the findMin function with the arr as a parameter to find the min of arr
findMin(arr);

// similar to the second algo from yesterday

/* 
  Array: Remove At
  Input: array, index
  Output: The item that was removed
  What will you do if the provided index is out of bounds?
  
  No built-in array methods except pop().
  Input: ['a', 'b', 'c'], 1
  Output: 'b'
    - the given array should now be ['a', 'c']
*/

