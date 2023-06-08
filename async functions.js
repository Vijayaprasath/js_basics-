function sumOfNumbers(number1, number2) {
    let promise1 = new Promise((resolve) =>{
    setTimeout(() => {
        let sum = number1 + number2 ;
        resolve(sum)
        console.log(sum);

    }, 3000)
    })
    return promise1;
   
}

function multiplicationOfNumbers(number1, number2) {
    let promise2 = new Promise((resolve, reject ) =>{
    setTimeout(() => {
        let multiply = number1 * number2 ;
        reject("multiply");
        console.log(multiply);
    }, 100)
})
return promise2;
}

function divideTheNumber(number1, number2) {
    let promise3 = new Promise((resolve, reject) => { 
        setTimeout(() => {
            let quoitent = number1 / number2 ;
            reject("quoitent");
            console.log(quoitent);
        }, 2000)
    })
    return promise3;
}
async function operations(number1, number2) {
    try{
        const operation1 =  sumOfNumbers(number1, number2);
        console.log(operation1);
        const operation2 = multiplicationOfNumbers(number1, number2);
        console.log(operation2);
        const operation3 = await divideTheNumber(number1, number2);
        console.log(operation3);
    } catch(err) {
        console.log(err)
    }
}

operations(10, 2)
console.log(" FINISHED");