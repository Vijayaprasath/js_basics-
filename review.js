function testCaseForsumOfNumbers(result, expected) {
    if(result == expected) {
        console.log("Test case is passed");
    } else {
        console.log("Test case is failed");
    }
}
function sumOfNumbers(a, b) {
    return a + b ; 
}


let number1 = 10;
let number2 = 20;

testCaseForsumOfNumbers(sumOfNumbers(number1, number2), 30);