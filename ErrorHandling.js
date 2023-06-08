// function errorHandling() {
//   try {
//     console.log("start");
//     throw "vijay";
//   } catch (e) {
//     console.log("Error Handled");
//     console.log(e);
//     return "false";
//   } finally {
//     console.log("final");
//     return "true";
//   }
// }
// console.log(errorHandling());

const person = {
    name : 'vijay',
    age : 20
};
function checkTheAge(person) {
    if (person.age < 21){
        throw new Error("Person is under the age of 21");
    }
    console.log( 'Eligible');
}

try{
    checkTheAge(person);
}
catch(error){
    console.error (error);
    console.log (error.name);
    console.log (error.message);
}
finally{
    console.log("Executed");
}

class CustomError extends Error {
  constructor(message) {
    super();
    this.message = message;
    this.name = "CustomError";
  }
}

function throwAnError() {
  throw new CustomError("Something went wrong.");
  throw " ";
}

try {
  throwAnError();
} catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.name);
}

// let number = 1;
// console.log(number());

// let obj = undefined;
// obj.prop;

// let str = 123;
// str.split();