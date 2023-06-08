// Input validation - 1

const name = document.getElementById("Name");
const id = document.getElementById("id");
const age = document.getElementById("age");
const email = document.getElementById("email");
const form = document.getElementById("form");
const submit = document.getElementById("submit");


const students = [];
console.log(students);

id.addEventListener("input", (e) => {
  if (id.value.trim() === "") {
    errorMessage(".id-error", " * id is required", e);
    
  }
  if (hasUniqueId(id.value)) {
    errorMessage(".id-error", " * This id already exists", e);
  }
});

name.addEventListener("input", (e) => {
  if (name.value.trim() === "") {
    errorMessage(".name-error", " * Name is required", e);
  }
  if (!isValidName(name.value)) {
    errorMessage(
      ".name-error",
      " * Name should only contain letters and spaces",
      e
    );
   
  }
});

age.addEventListener("input", (e) => {
  if (age.value.trim() === "") {
    errorMessage(".age-error", " * age is required", e);
   
  }
  if (age.value <= 10 || age.value >= 25) {
    errorMessage(".age-error", " * Enter the valid age", e);
    
  }
});

email.addEventListener("input", (e) => {
  if (email.value.trim() === "") {
    errorMessage(".email-error", " * email is required", e);
   
  }
  if (!isValidEmail(email.value)) {
    errorMessage(".email-error", " * Enter the valid email id", e);
  }
});




function validateForm(e) {
  if (id.value.trim() === "") {
    errorMessage(".id-error", " * id is required", e);
    return false;
  }
  if (hasUniqueId(id.value)) {
    errorMessage(".id-error", " * This id already exists", e);
    return false;
  }
  if (name.value.trim() === "") {
    errorMessage(".name-error", " * Name is required", e);
    return false;
  }
  if (!isValidName(name.value)) {
    errorMessage(
      ".name-error",
      " * Name should only contain letters and spaces",
      e
    );
    return false;
  }
  if (age.value.trim() === "") {
    errorMessage(".age-error", " * age is required", e);
    return false;
  }
  if (age.value <= 10 || age.value >= 25) {
    errorMessage(".age-error", " * Enter the valid age", e);
    return false;
  }
  if (email.value.trim() === "") {
    errorMessage(".email-error", " * email is required", e);
    return false;
  }
  if (!isValidEmail(email.value)) {
    errorMessage(".email-error", " * Enter the valid email id", e);
    return false;
  }
  return true;
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  let errors = document.getElementsByClassName("error");
  for (const error of errors) {
    error.style.display = "none";
  }

  if (validateForm(e)) {
    const studentDetails = {
      name: name.value,
      id: id.value,
      age: age.value,
      email: email.value,
    };
    students.push(studentDetails);
    document.querySelector(".success").innerHTML = "Registeration Successful";
    document.querySelector(".success").style.display = "block";
    console.log("Registration successful");
    console.log(students);
    console.log(studentDetails);
    setTimeout(() => {
      document.querySelector(".success").style.display = "none";
      form.reset();
    }, 1500);
  }
});

function isValidName(name) {
  const regex = /^[A-Za-z\s]+$/;
  return regex.test(name);
}

function isValidEmail(email) {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

function hasUniqueId(id) {
  for (const index of students) {
    if (id === index["id"]) {
      return true;
    }
  }
  return false;
}

function errorMessage(errorProperty, message, e) {
  document.querySelector(errorProperty).innerHTML = message;
  document.querySelector(errorProperty).style.display = "block";
  e.preventDefault();
}
