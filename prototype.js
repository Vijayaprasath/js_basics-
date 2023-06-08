// let numbers = [1, 2, 3, 4];

// let student = {
//     name: "vijay",
//     age: 24,
//     info() {
//         console.log(this.name +" "+ this.age);
//     }
// }
// student.info();

// let studentProtoptype = Object.getPrototypeOf(student);
// console.log(studentProtoptype); 

// let studentProtoptype2 = Object.getPrototypeOf(studentProtoptype);
// console.log(studentProtoptype2); 

// const PERSON = Object.create(student);
// PERSON.info();
// console.log("PERSON", PERSON)


// function Sports(name) {
//     this.sportName = name;
// }

// Object.assign(Sports.prototype, student)

// const CRICKET = new Sports("Cricket");
// CRICKET.info();
// console.log(CRICKET)


// function Box(value) {
//     this.value = value;
// }

// Box.prototype.getValue = function() {
//     return this.value + 2;
// }

// const box = new Box(1);

// console.log(box.getValue());
// console.log(box.value);

function DoSomething() {}
DoSomething.prototype.foo = "bar";

const doSomeInstancing = new DoSomething();
doSomeInstancing.prop = "some value";

console.log("doSomeInstancing.prop:     ", doSomeInstancing.prop); //some value
console.log("doSomeInstancing.foo:      ", doSomeInstancing.foo);//bar
console.log("DoSomething.prop:          ", DoSomething.prop);//undef
console.log("DoSomething.foo:           ", DoSomething.prototype);//
console.log("DoSomething.prototype.prop:", DoSomething.prototype.prop);
console.log("DoSomething.prototype.foo: ", DoSomething.__proto__);

a=10;