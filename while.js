function checkForAlphabets(input) {
    if (typeof input === "string") {
      while ((input > "a" && input < "z") || (input > "A" && input < "Z")) {
        return "valid";
      }
      return "It is not an alphabet";
    } else {
      return "It is not a string datatype";
    }
  }
  testCase(checkForAlphabets("String"), "valid");
  testCase(checkForAlphabets("67"), "It is not an alphabet");
  testCase(checkForAlphabets(" "), "It is not an alphabet");
  testCase(checkForAlphabets(67), "It is not a string datatype");
  testCase(checkForAlphabets(67), "It is not a string datatype");
  
  // TEST CASES
  function testCase(result, expected) {
    if (result === expected) 
      console.log("passed");
    else 
      console.log("failed");
  }