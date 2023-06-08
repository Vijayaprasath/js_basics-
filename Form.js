// Submission validation - 1

const name = document.getElementById("Name");
const id = document.getElementById("id");
const age = document.getElementById("age");
const email = document.getElementById("email");
const form = document.getElementById("form");
const submit = document.getElementById("submit");

const students = [];
console.log(students);
submit.addEventListener("click", (e) => {
  let errors  = document.getElementsByClassName('error');
  for (const error of errors) {
    error.style.display = "none";
  }
  //   validateForm(name, id, age, email, e);
  const studentDetails = {
    name: name.value,
    id: id.value,
    age: age.value,
    email: email.value,
  };

  if (validateForm(name, id, age, email, e)) {
    if (!hasUniqueId(id.value) && id.value !== "") {
      console.log(studentDetails);
      students.push(studentDetails);
      console.log(students);
      form.reset();
    }
  }
});

function validateForm(name, id, age, email, e) {
  if (name.value.trim() === "") {
    document.querySelector(".name-error").innerHTML = " * Name is required";
    document.querySelector('.name-error').style.display = "block";
    e.preventDefault();
    return false;
  }
  //   document.querySelector('.name-error').style.display = "none";
  if (!isValidName(name.value)) {
    alert("Name should only contain letters and spaces");
  }
  if (id.value.trim()==="") {
    alert("id is required");
  }
  if (hasUniqueId(id.value)) {
    alert("This id already exists");
  }
  if (age.value.trim()==="") {
    alert("age is required");
  }
  let parsedAge = parseInt(age.value);
  if (isNaN(parsedAge)) {
    alert("Age should be a number");
  }
  if (parsedAge <= 10 || parsedAge >= 25) {
    alert("Enter the valid age");
  }
  if (email.value.trim()==="") {
    alert("email is required");
  }
  if (!isValidEmail(email.value)) {
    alert("Enter the valid email id");
  }
  return true;
}

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
