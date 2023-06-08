// const STUDENT = {
//     name:,id:,age:,languages:,courseCompletion
// }
// id --> unique,string/ Number
// name --> string
// age -->Number
// lang --> string Array
// coursecompletion -->boolean

// operatios --> add,delete,update and get student

let students = [];

const STUDENT = {
  id: "",
  name: "",
  age: 0,
  languages: [],
  isCourseCompleted: false,
};
console.log(students);

function studentInfo(student1) {
  students.push(student1);
  return students;
}

// Add student profile
function addStudent() {
  for (const key in STUDENT) {
    if (Array.isArray(STUDENT[key])) {
      for (let index = 0; index < 3; index++) {
        console.log(`language${index + 1}`);
        STUDENT[key][index] = prompt(`${key} ${index + 1}`);
      }
    } else {
      if (key == "isCourseCompleted") {
        continue;
      } else {
        console.log(`${key}:`);
        STUDENT[key] = prompt(`${key}`);
        if (key == "age") {
          let parsed = parseInt(STUDENT[key]);
          console.log(parsed);
          while (isNaN(parsed)) {
            alert("Enter the number datatype");
            console.log(`${key}:`);
            STUDENT[key] = prompt(`${key}`);
            parsed = parseInt(STUDENT[key]);
            console.log(parsed);
          }
        }
      }
    }
  }
  // console.log(STUDENT);
  //   STUDENT = Object.assign({}, STUDENT)
  students.push(Object.assign({}, STUDENT));
  console.log(students);
}

// Delete student profile
function deleteStudent(id) {
  for (let index in students) {
    if (students[index]["id"] == id) {
      students.splice(index, 1);
    }
  }
  console.log(students);
}

// Get details of the Students
function getStudentDetails(id) {
  for (let index in students) {
    if (students[index]["id"] == id) {
      console.log(students[index]);
      return students[index];
    }
  }
}

// Update Details of the students
function updateStudentDetails(id) {
  for (let index in students) {
    if (students[index]["id"] == id) {
      for (const key in STUDENT) {
        if (Array.isArray(STUDENT[key])) {
          for (let index = 0; index < 3; index++) {
            console.log(`language ${index + 1}`);
            STUDENT[key][index] = prompt(`${key} ${index + 1}`);
          }
        }
        if (key == "id") {
          continue;
        } else {
          console.log(`${key}:`);
          STUDENT[key] = prompt(`${key}`);
          if (key == "age") {
            let parsed = parseInt(STUDENT[key]);
            console.log(parsed);
            while (isNaN(parsed)) {
              alert("Enter the number datatype");
              console.log(`${key}:`);
              STUDENT[key] = prompt(`${key}`);
              parsed = parseInt(STUDENT[key]);
              console.log(parsed);
            }
          }
        }
      }
    }
    students.splice(index, 1, STUDENT);
  }
  console.log(students);
}

// function checkEntries() {
//   for (const key in STUDENT) {
//   }
// }
