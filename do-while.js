function addNumbers(numbers) {
    let sum = 0,index=0,add=0;
    if (typeof numbers === 'object') {
      do {
        if (typeof numbers[index] === "number") {
          add = (add*10) + numbers[index];//1230 + 
          index++;// 2 3
        }
      } while (index < numbers.length);//2 < 5
      return add;
    } else {
        return "Enter the value in array";
    }
}

testCase(addNumbers([1,2,3,4,5]),12345);
testCase(addNumbers(34),"Enter the value in array");
testCase(addNumbers(" "),"Enter the value in array");
testCase(addNumbers(1,2,3,4,5),"Enter the value in array");


// TEST CASES
function testCase(result, expected) {
    console.log(result);
    if (result === expected) 
      console.log("passed");
    else {
      console.log("failed");
    }
}