let students = [];

const STUDENT = {
  id: "",
  name: "",
  age: 0,
  languages: [],
  isCourseCompleted: false,
};
// console.log(students);

// Add student information
function addStudentInfo(student) {
  if (isObject(student)) {
    if (hasAllEnteries(student)) {
      if (hasUniqueId(student)) {
        return "Adding student failed";
      }
      student.isCourseCompleted = false;
      students.push(student);
      return "Student added successfully";
    } else {
      return "Adding student failed";
    }
  } else {
    return "Enter the object type of data";
  }
}

// // Test cases for addStudentInfo
// testCase(addStudentInfo(), "Enter the object type of data");
// testCase(addStudentInfo(" "), "Enter the object type of data");
// testCase(addStudentInfo(null), "Enter the object type of data");
// testCase(addStudentInfo([]), "Enter the object type of data");
// testCase(addStudentInfo({}), "Adding student failed");
// testCase(
//   addStudentInfo({
//     id: "THili",
//     name: "Thilipan",
//     age: 23,
//     languages: ["javascript", "java"],
//   }),
//   "Student added successfully"
// );
// testCase(
//   addStudentInfo({
//     id: "vick",
//     name: "vicky",
//     age: 24,
//     languages: [],
//   }),
//   "Adding student failed"
// );
// testCase(
//   addStudentInfo({
//     id: "THili",
//     name: "Thilipan",
//     age: 23,
//     languages: ["javascript", "java"],
//   }),
//   "Adding student failed"
// );
testCase(
  addStudentInfo({
    id: "karthi123",
    name: "karthikeyan",
    age: 23,
    languages: ["javascript", "java"],
  }),
  "Student added successfully"
);

// Delete student profile
function deleteStudent(id) {
  for (let index in students) {
    if (students[index]["id"] == id) {
      students.splice(index, 1);
      console.log(students);
      return "Deleted successfully";
    }
  }
  return "Enter the correct id";
}
// //Test cases for deleteStudent
testCase(deleteStudent(" "), "Enter the correct id");
testCase(deleteStudent("viev "), "Enter the correct id");
testCase(deleteStudent("vijay"), "Enter the correct id");
// testCase(deleteStudent("karthi123"), "Deleted successfully");

// Get details of the Students
function getStudentDetails(id) {
  for (let index in students) {
    if (students[index]["id"] == id) {
      console.log(students[index]);
      return "student details are displayed";
    }
  }
  return "Enter the correct id";
}
// //Test cases for get details
// testCase(getStudentDetails(" "), "Enter the correct id");
// testCase(getStudentDetails("123 "), "Enter the correct id");
// testCase(getStudentDetails("vijay"), "student details are displayed");
// testCase(getStudentDetails("THili"), "student details are displayed");

// Update Details of the students
function updateStudentDetails(student) {
  if (isObject(student)) {
    for (let index in students) {
      if (students[index]["id"] == student["id"]) {
        updateProperty(student);
        return "Student updated successfully";
      }
    }
    return "Enter the correct id";
  } else {
    return "Enter the object type of data";
  }
}

// Test cases for update details
testCase(updateStudentDetails(" "), "Enter the object type of data");
testCase(
  updateStudentDetails("123 "),
  "Enter the object type of data"
);
testCase(
  updateStudentDetails("123 ", null),
  "Enter the object type of data"
);
testCase(updateStudentDetails({}), "Enter the correct id");
testCase(updateStudentDetails(123), "Enter the object type of data");

// Test case function
function testCase(result, expected) {
  if (result == expected) {
    console.log("Test case passed");
  } else {
    console.log("Test case failed");
  }
}

function isObject(student) {
  if (typeof student == "object") {
    if (Array.isArray(student) | (student == null)) {
      return false;
    }
    return true;
  }
}

function hasAllEnteries(student) {
  for (const key in STUDENT) {
    if (key == "isCourseCompleted") {
      continue;
    }
    if (Object.hasOwn(student, key)) {
      if (isLanguageContainValues(student)) {
        continue;
      } else {
        return false;
      }
    } else {
      console.log("Enter the " + key + " property");
      return false;
    }
  }
  return true;
}

function isLanguageContainValues(student) {
  // for (const key in student) {
    // console.log(key);

    let result =(Array.isArray(student["languages"]) && student["languages"].length == 0) ?  false : true ;
      // console.log("Enter the value for languages");
      // return false;
    // } 
  // }
  return result;
}

function hasUniqueId(student) {
  for (const index in students) {
    // for (const key in student) {
      if (student["id"] === students[index]["id"]) {
        console.log("This id already exists");
        return true;
      }
    // }
  }
  return false;
}

function updateProperty(student) {
  for (const index in students) {
    if (student["id"] === students[index]["id"])
      for (const key in student) {
        if (Object.hasOwn(students[index], key)) {
          students[index][key] = student[key];
          console.log("changed");
        }
      }
  }
}
