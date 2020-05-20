// Algorithm exercises Week 1 Day 3

// 1.)
// 

function changeArr(arr) {
    var b = arr.length;
    var temp = arr[b-1];
    arr[b-1] = arr[0];
    arr[0] = temp;
    return arr;
}

console.log( changeArr( [1, 2, 3] )); // = [3, 2, 1]
console.log( changeArr( [2, 4] )); // = [4, 2]

/* t=diagram
console.log (from line 14)
_________________________________________
    variables  |    values
1. arr         | (from line 6) [1, 2, 3] ---> (from line 9) [1, 2, 1] --> (from line 10) [3, 2, 1]
2. b           |  3
3. temp        |  arr[3 - 1] = arr[2] = 3
3.5 [1,2,1] -->| [3, 2, 1]
4. arr  --->   | [3, 2, 1] 
__________________________________________
console.log (from line 15)
1. arr         | [2, 4] --> (from line 9) [2, 2] --> (from line 10) [4, 2]
2. b           |  2
3. temp        |  4
4. arr         | [4, 2]

__________________________________________
console.log (from line 62)
    variables       values
1. arr         | [1, 2, 3]--> [3, 2, 3]--> [3 , 2, 1] --> [3, 2, 1] --> [3, 2, 1]
2. x           |  3
3. i           |  0--> 1 --> 2
3.5 [3, 2, 3]->| arr[i] = arr[2]
4. temp        | arr[0] = 1--> arr[1] = 2 
5. 

___________________________________________
console.log(from line 63)
    variables       values
1. arr          [1, 2, 3, 4, 5]
2. x             5
3. 
4.
5.
*/

// 2.)
function changeArr2(arr) {
    x = arr.length; 
    return x
    for (var i = 0; i < arr.length / 2; i++) {
        temp = arr[i];
        arr[i] = arr[x - i - 1];
        arr[x - i - 1] = temp;
    }
    return arr
}

console.log(changeArr2([1, 2, 3]));
console.log(changeArr2([1, 2, 3, 4, 5]));
