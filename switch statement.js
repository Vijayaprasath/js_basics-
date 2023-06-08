// PRODUCTION CODE
function checkMonth(month){
    if(typeof month === 'number'){
    switch(month){
        case 1 :
            return "January";
        case 2 :
            return "Febuary";
        case 3 :
            return "March";
        case 4 :
            return "April";
        case 5 :
            return "May";
        case 6 :
            return "June";
        case 7 :
            return "July";
        case 8 :
            return "August";
        case 9 :
            return "September";
        case 10 :
            return "October";
        case 11 :
            return "November";
        case 12 :
            return "December";
        default :
            return "Enter the valid month number";
    }
}
else{
    return "Enter the number type of data";
}
}
testCase(checkMonth(1),"January");
testCase(checkMonth(15),"Enter the valid month number");
testCase(checkMonth(""),"Enter the number type of data");
testCase(checkMonth([1,2,3]),"Enter the number type of data");
testCase(checkMonth([1,2,3]),"Enter the number type of data");



// TEST CASES
function testCase(result,expected){
    if( result === expected)
      console.log("passed");
    else{
        console.log("failed");
    }   
}