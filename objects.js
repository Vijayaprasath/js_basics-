const organisation = {company: "Full Creative"};
const employee = Object.create(organisation, {name: {value:"Vijay"}});
// // // console.log(employee);
// // // // console.log(employee.name);
// // // // delete employee[organisation];
console.log(organisation.toString());

// const object = {};
// console.log(Object.assign(object, employee));

const faceBookProfile = {
  name: "Vijay",
  password: "vj123",
  phoneNumber: 9715033425,
  details: {
    height: 5.6,
    weight: 65,
  },
  hobbies: ["music", "cooking", "farming"],
  login: function () {
    console.log("Login successful");
  },
  signin() {
    console.log("Signed in successfully");
  },
};
// console.log(faceBookProfile);
// console.log(faceBookProfile.details.height);
// console.log(faceBookProfile.hobbies[2]);
// faceBookProfile.login();
// faceBookProfile.signin();

// // DefineProperty
// Object.defineProperty(faceBookProfile, "id", {
//     value: "vijay123",
//     writable: true
// });
// console.log(faceBookProfile.id);
// faceBookProfile.id = 57654;
// console.log(faceBookProfile.id);
// console.log(Object.getOwnPropertyDescriptor(faceBookProfile, "id"));
// console.log(Object.getOwnPropertyDescriptors(faceBookProfile));
// console.log(Object.getOwnPropertyNames(faceBookProfile));
// console.log(Object.getOwnPropertySymbols(faceBookProfile));

// console.log(Object.keys(faceBookProfile));
// console.log(Object.values(faceBookProfile));
// console.log(Object.hasOwn(faceBookProfile, "Name"));
// console.log(Object.is("22", 22));
// console.log(Object.freeze(faceBookProfile));
// console.log(Object.isFrozen(faceBookProfile));
// console.log(Object.isExtensible(faceBookProfile));
// console.log(Object.preventExtensions(faceBookProfile));

// console.log(Object.seal(faceBookProfile));
// console.log(Object.isSealed(faceBookProfile));
console.log(Object.entries(faceBookProfile));
console.log(Object.hasOwn(faceBookProfile, "name"));

const product = {
  name: "Mobile",
  price: 25000,
  specification: {
    ram: "8gb",
    noOfSim: 2,
  },
};
const deepFreeze = function (object) {
  for (let key in object) {
    if (typeof object[key] === "object") {
      // console.log(object[key]);
      deepFreeze(object[key]);
    }
  }
  return Object.freeze(object);
};

deepFreeze(product);
product.specification.ram = "12gb";
console.log(product);
