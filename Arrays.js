const names = ["vijay", "vikkram", "vicky", "Thilipan"];
// console.log(names);

// console.log(names[2]);

// console.log(names.length);

// console.log(names.join(","));

console.log(names.slice(-1, -3));
console.log(names);

// // console.log(Array.isArray(names));

// console.log(names.reverse());

// console.log(names.push("panda"));

// console.log(names.pop());

// console.log(names.shift());

// console.log(names.unshift("mani"));

// names.splice(3,1,"panda");
// console.log(names);

// const numbers = [11, 33, 22, 55];
// console.log(names.concat("panda"));
// console.log([...names, ...numbers]);


// Filter
// function isGreater(numbers) {
//   return numbers > 20;
// }
// const numbers = [11, 33, 22, 55];
// console.log(numbers.filter(isGreater));


// // Map
// const numbers = [1, 2, 3, 4];
// console.log(numbers.map(add));
// function add(value, index){
//   return value + index;
// }

// Reduce
const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.reduce(add, 2));
// function add(initial, value){
//   return initial + value; // 17
// }

// Every
// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers.every(isGreater));
// function isGreater(value){
//   return value < 4;
// } 

// // // Flat
// const numbers1 = [1, 2, [11, 22, [111, 222]], 4, 5];
// console.log(numbers1.flat(2));

function result() {
  console.log("successful");
}

// spread operator
// const object = {name: " ", id: " "}
let total = [...names, 45, "vijay", ...numbers ]
console.log(total)