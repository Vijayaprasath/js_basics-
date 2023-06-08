// Input validation - 2

const name = document.getElementById("Name");
const id = document.getElementById("id");
const age = document.getElementById("age");
const email = document.getElementById("email");
const form = document.getElementById("form")
const submit = document.getElementById("submit");
const errors = document.querySelectorAll(".error");

const students = [];
console.log(students);

id.addEventListener("input", (e) => {
  if (id.value.trim() === "") {
    errorMessage(".id-error", " * id is required", e);
  } else if (hasUniqueId(id.value)) {
    errorMessage(".id-error", " * This id already exists", e);
  } else {
    document.querySelector(".id-error").classList.replace("invalid", "valid");
    document.querySelector(".id-error").style.display = "none";
  }
});

name.addEventListener("input", (e) => {
  if (name.value.trim() === "") {
    errorMessage(".name-error", " * Name is required", e);
  } else if (!isValidName(name.value)) {
    errorMessage(
      ".name-error",
      " * Name should only contain letters and spaces",
      e
    );
  } else {
    document.querySelector(".name-error").classList.replace("invalid", "valid");
    document.querySelector(".name-error").style.display = "none";
  }
});

age.addEventListener("input", (e) => {
  if (age.value.trim() === "") {
    errorMessage(".age-error", " * age is required", e);
  } else if (age.value <= 10 || age.value >= 25) {
    errorMessage(".age-error", " * Enter the valid age", e);
  } else {
    document.querySelector(".age-error").classList.replace("invalid", "valid");
    document.querySelector(".age-error").style.display = "none";
  }
});

email.addEventListener("input", (e) => {
  if (email.value.trim() === "") {
    errorMessage(".email-error", " * email is required", e);
    
  } else if (!isValidEmail(email.value)) {
    errorMessage(".email-error", " * Enter the valid email id", e);
   
  } else {
    document
      .querySelector(".email-error")
      .classList.replace("invalid", "valid");
    document.querySelector(".email-error").style.display = "none";
  }
});


submit.addEventListener("click", (event) => {
  event.preventDefault();

  let result = Array.from(errors).every((input) =>
    input.classList.contains("valid")
  );
  // for (const error of errors) {
  //   console.log(error.classList.contains("invalid"));
  // }
  submissionOfDetails(result);
  Array.from(errors).every((input) =>
    input.classList.replace("valid", "invalid")
  );
  
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
  document.querySelector(errorProperty).classList.replace("valid", "invalid");
  // e.preventDefault();
}


function submissionOfDetails(result) {
  if (result) {
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
    }, 2000);
    form.reset();
  } 
  
}
