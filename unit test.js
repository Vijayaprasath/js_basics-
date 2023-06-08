// production code
function sumOfNumbers1(numbers) {
  let sum = 0;
  if (typeof numbers === "object") {
    for (let index in numbers) {
      if (typeof numbers[index] === "number") {
        sum += numbers[index]; // 10 + 5 =15
        console.log(sum);
      }
    }
  } else {
    return "Enter the data in an array";
  }
  return sum;
}

// testcases for sumOfNumbers1
testCase(sumOfNumbers1([1, null, 2, 3, "vijay", 4, 5]), 15);
testCase(sumOfNumbers1(""), "Enter the data in an array");
testCase(sumOfNumbers1(15, 35),"Enter the data in an array" );
testCase(sumOfNumbers1({ one: 1, two: 2, three: 3, four: 4, five: 5 }), 15);
testCase(sumOfNumbers1(undefined), "Enter the data in an array");
testCase(sumOfNumbers1([0.0001, 0.111]), 0.1111);
testCase(sumOfNumbers1(0.0001, 0.111), "Enter the data in an array");

// function sumOfNumbers1(numbers) {
//   let sum = 0;
//   if (typeof numbers === "object") {
//   for (let index = 0; index < numbers.length; index++) {
//     if (typeof numbers[index] === "number") {
//       sum += numbers[index];
//     }
//   }
// }
//   else {
//         return("Enter the data in an array");
//       }
//   return sum;
// }

// // testcases for sumOfNumbers1
// testCase(sumOfNumbers1([1, null, 2, 3, "vijay", 4, 5]), 15);
// testCase(sumOfNumbers1(""), "Enter the data in an array");
// testCase(sumOfNumbers1(15, 35),"Enter the data in an array" );
// testCase(sumOfNumbers1(undefined), "Enter the data in an array");
// testCase(sumOfNumbers1([0.0001, 0.111]), 0.1111);
// testCase(sumOfNumbers1(0.0001, 0.111), "Enter the data in an array");

// test case
// function testcase(RESULT, EXPECTED) {
//   if (RESULT === EXPECTED) {
//     console.log("Test passed");
//   } else {
//     console.log("Test failed");
//   }
// }

// // Production code
// function checkNumber(number) {
//     if (typeof (number) === 'number') {
//         if (number > 0) {
//             return "positive";
//         }
//         else if (number < 0) {
//             return "negative";
//         }
//         else {
//             return "zero";
//         }
//     }
//     else {
//         return "It is not a number datatype";
//     }
// }

// // let result = checkNumber(null);
// // let expected = 'positive';
// testCase(checkNumber(1) , 'positive' );
// testCase(checkNumber(null) , 'It is not a number datatype' );
// testCase(checkNumber("one") , 'It is not a number datatype' );
// testCase(checkNumber(-1) , 'negative' );
// testCase(checkNumber(0) , 'zero' );
// testCase(checkNumber(0.9747834) , 'positive' );
// testCase(checkNumber([]) , 'It is not a number datatype' );
// testCase(checkNumber(undefined) , 'It is not a number datatype' );

// Test case
function testCase(result, expected) {
  console.log("\n");
  console.log(result);
  if (result === expected) console.log("passed");
  else console.log("failed");
}

// function sumOfNumbers3(numbers) {
//   console.log(numbers);
//   let sum = 0;
//   if (typeof numbers === "object") {
//     console.log("");
//     for (let number of numbers) {
//       if (typeof number === "number") {
//         sum += number;
//         console.log(sum);
//       }
//     }
//   } else {
//     return "Enter the data in an array";
//   }
//   return sum;
// }
// sumOfNumbers3({ one: 1, two: 2, three: 3, four: 4, five: 5 })

// testcases for sumOfNumbers3
testCase(sumOfNumbers3([1, null, 2, 3, "vijay", 4, 5]), 15);
// testCase(sumOfNumbers3("VIJAY"), "VIJAY");
// testCase(sumOfNumbers3(15, 35), 15);
// testCase(sumOfNumbers3({ one: 1, two: 2, three: 3, four: 4, five: 5 }), 15);
// testCase(sumOfNumbers3(undefined), undefined)
// testCase(sumOfNumbers3([0.0001, 0.111]), 0.1111);
// testCase(sumOfNumbers3(0.0001, 0.111), 0.1111);
