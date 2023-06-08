// // callback function

// function sumOfNumber(number1, number2, displayResult) {
//   let sum = number1 + number2;
//   //   console.log(sum);
//   displayResult(sum);
// }
// function displayResult(total) {
//   console.log(total);
// }

// sumOfNumber(5, 5, displayResult);

// setTimeout(function () {
//   sumOfNumber(5, 5, displayResult);
// }, 3000);
// setInterval(function () {
//   sumOfNumber(5, 5, displayResult);
// }, 2000);

// // promise
let number = 15;
let promise = new Promise((resolve, reject) => {
  if (number > 9) {
    resolve("Valid number");
    // throw new Error("error occurred");
  } else {
    reject("Invalid number");
  }
});
promise
  .then((result) => {
    console.log("output: " + result);
    return result;
  })
  .then((result) => {console.log(result)
    return result}
  )
  .then((result1) => console.log(result1))
  .catch((error) => console.log("output: " + error))
  .finally(() => console.log('completed'));




let firstPromise = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("executed first promise"), 1000);
    });
};

let secondPromise = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => reject("executed second promise"), 5000);
        // reject("executed second promise")
    });
};

let thirdPromise = () =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve("executed third promise"), 3000);
    });
};

//  firstPromise()
//  .then((resolve) => {console.log(resolve)})
//  .catch((reject) => {console.log(reject)})
 
// Promise.all([firstPromise(), secondPromise(), thirdPromise()])
//  .then(result => console.log(result))
//  .catch(error => console.log(error))

// Promise.allSettled([firstPromise(), secondPromise(), thirdPromise()])
//  .then(results => console.log(results))
//  .catch(error => console.log(error))

// Promise.race([firstPromise(), secondPromise(), thirdPromise()])
//   .then((result) => console.log(result))
//   .catch((error) => console.log(error));

// Promise.any([firstPromise(), secondPromise(), thirdPromise()])
//  .then(result => console.log(result))
//  .catch(error => console.log(error))