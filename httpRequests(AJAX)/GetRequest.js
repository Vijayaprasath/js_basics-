const getRequest = new XMLHttpRequest();
getRequest.open("GET", "https://jsonplaceholder.typicode.com/posts");
getRequest.send(null);
getRequest.responseType = "json";
getRequest.onload = () => {
    if(getRequest.readyState == 4 && getRequest.status == 200) {
        console.log(getRequest.response);
        // console.log(getRequest.statusText);
    } else {
        console.log(getRequest.status);
    }
}
console.log(getRequest)