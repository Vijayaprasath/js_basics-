function* generator() {
  yield 1;
  try {
    yield 2;
    yield 3;
  } catch (error) {
    console.log("Error caught");
  } finally {
    yield 9;
    yield 4;
    yield 6;
    return 5;
  }
}

//   const g1 = gen();
//   console.log(g1.next());
//   console.log(g1.return("return"));

const g2 = generator();
console.log(g2.next()); //{value: 1, done: false}
console.log(g2.next()); //{value: 1, done: false}
console.log(g2.next()); //{value: 1, done: false}
// console.log(g2.return("returning")) // {value: returning, done: false}
// console.log(g2.next()); // {value: 4, done: false}
// console.log(g2.next()); // {value: 4, done: false}
// console.log(g2.next()); // {value: 4, done: false}
// console.log(g2.next()); // {value: 4, done: false}

// console.log(g2.return("return1"));
// // console.log(g2.next());
console.log(g2.throw(new Error("Something went wrong")));
// console.log(g2.next());
// console.log(g2.next());
// console.log(g2.return(" return"));
