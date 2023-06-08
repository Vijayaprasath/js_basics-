let a = null == undefined; 
let b = 1 == "1";   
console.log(a);   //true
console.log(b);   //true
console.log(null === undefined);    //false
console.log(1 === "1");   //false

console.log(null ? 1 : 0);  //0
console.log(undefined ? 1 : 0);   //0
console.log([] ? 1 : 0);    //1

const obj = {
  name: "vijay",
  age: function () {
    // return 24;
  },
};
let arr = [];
const f = 34;
let d;
console.log(obj.age());   //undefined
console.log(typeof obj);    //object
console.log(typeof arr);    //object
console.log(typeof null);   //object
console.log(typeof f);    //number
console.log(typeof d);    //undefined

console.log(null == 0);   //false
console.log(null && 1);   //null
console.log(1 && null);   //null
console.log(true && false);   //false
console.log(1 && null && []);   //null
console.log(1 && "null" && []);   //[]
console.log(1 && "null" && 0);    //0
console.log(null || "null" || 0);   //null
