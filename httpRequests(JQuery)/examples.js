var expect = require('chai').expect;

it('should do something with promises', function(done) {
//define some data to compare against
var blah = 'foo';

//call the function we're testing
var result = systemUnderTest();

//assertions
result.then(function(data) {
expect(data).to.equal(blah);
done();
}, function(error) {
assert.fail(error);
done();
});
});

 
// test("checks the completion of the orderprocess", ()=>{
//   orderProcess("Mobile").then((data)=>{
//     expect(data).toBe("Mobile ordered successfully")
//   }).catch((error)=>{
//     expect(error).toBe("Product not available")
//   })
// })
// // test("checks the completion of the orderprocess", ()=>{
// //   orderProcess("Laptop").then((data)=>{
// //     expect(data).toBe("Laptop ordered successfully")
// //   }).catch((error)=>{
// //     expect(error).toBe("Product not available")
// //   })
// // })
// test("checks the completion of the orderprocess", ()=>{
//   orderProcess("Airpod").then((data)=>{
//     expect(data).toBe("Airpod ordered successfully")
//   }).catch((error)=>{
//     expect(error).toBe("Product not available")
//   })
// })
// test("checks the completion of the orderprocess", ()=>{
//   orderProcess("mobiles").then((data)=>{
//     expect(data).toBe("Airpod ordered successfully")
//   }).catch((error)=>{
//     expect(error).toBe("Product not available")
//   })
// })
// test("checks the completion of the orderprocess", ()=>{
//   orderProcess("laptop").then((data)=>{
//     expect(data).toBe("Airpod ordered successfully")
//   }).catch((error)=>{
//     expect(error).toBe("Product not available")
//   })
// })
// test("checks the completion of the orderprocess", ()=>{
//   orderProcess("airpods").then((data)=>{
//     expect(data).toBe("Airpod ordered successfully")
//   }).catch((error)=>{
//     expect(error).toBe("Product not available")
  
// })
// })

 