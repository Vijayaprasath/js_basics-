// //   // Get request
// //   const getRequest = new XMLHttpRequest();
// //   getRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
// //   getRequest.send();
// //   getRequest.responseType = "json";
// //   getRequest.onload = () => {
// //       if(getRequest.readyState == 4 && getRequest.status == 200) {
// //           console.log(getRequest.response);
// //       } else {
// //           console.log(getRequest.status);
// //       }
// //   }

//Post request
const postRequest = new XMLHttpRequest();
postRequest.open("post", "https://jsonplaceholder.typicode.com/posts");
postRequest.setRequestHeader("Content-type", "application/json; charset=utf-8");
const body = JSON.stringify({
  postId: 6,
  id: 6,
  name: "vij",
  // "email": "Hayden@althea.biz",
  body: "harum non quasi et ratione\ntempore iure ex voluptates in ratione\nharum archit",
});
postRequest.onload = () => {
  if (postRequest.readyState == 4 && postRequest.status == 201) {
    const data = JSON.parse(postRequest.responseText);
    console.log(data);
  } else {
    console.log(postRequest.status);
  }
};
postRequest.send(body);


//Get request
const getRequest = new XMLHttpRequest();
getRequest.open("GET", "https://jsonplaholder.typicode.com/posts/95");

getRequest.send();
getRequest.responseType = "json";
getRequest.onload = () => {
  if (getRequest.readyState == 4 && getRequest.status == 200) {
    console.log(getRequest.response);
  } else {
    console.log(getRequest.statusText);
  }
};
getRequest.onerror = () => {
  console.log(getRequest.status);
};

// Patch request
const patchRequest = new XMLHttpRequest();
patchRequest.open("PATCH", "https://jsonplaceholder.typicode.com/posts/95");
patchRequest.setRequestHeader(
  "Content-type",
  "application/json; charset=utf-8"
);
const body2 = JSON.stringify({
  title: "vijayaprasath",
});
patchRequest.onload = () => {
  if (patchRequest.readyState == 4 && patchRequest.status == 200) {
    const data = JSON.parse(patchRequest.responseText);
    console.log(data);
  } else {
    console.log(patchRequest.status);
  }
};
patchRequest.send(body2);

// //Delete request
const deleteRequest = new XMLHttpRequest();

deleteRequest.open("delete", "https://jsonplaceholder.typicode.com/posts/95");
deleteRequest.send();
deleteRequest.onload = () => {
  var data = JSON.parse(deleteRequest.responseText);
  if (deleteRequest.readyState == 4 && deleteRequest.status == 200) {
    console.log("delete request : ", deleteRequest.response);
  } else {
    console.log(deleteRequest.status);
  }
};
