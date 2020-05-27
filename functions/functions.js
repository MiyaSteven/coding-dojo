function greeting(){
    return "Hello";
    console.log("World");
}
var word = greeting();
console.log(word);

/*
Variable        |       Value
__________________________________
word            |       greeting() = "Hello"
*/

function add(num1, num2){
    console.log("Summing Numbers!");
    console.log("num1 is: " + num1);
    console.log("num2 is: " + num2);
    var sum = num1 + num2;
    return sum;
}
var result1 = add(3,5);
var result2 = add(4,7);
console.log(result1);
console.log(result2);

/*
Variable        |       Value
__________________________________
sum             |       num1 + num2
result1         |       8
result2         |       11
*/

function highFive(num){
    for(var i=0; i<num; i++){
        if(i == 5){
            console.log("High Five!");
        }
        else{
            console.log(i);
        }
    }
}

/*
Variable        |       Value
__________________________________
i               |       0 -> 1 -> 2 -> 3 -> 4 -> 5...undefined because no return and not calling
*/