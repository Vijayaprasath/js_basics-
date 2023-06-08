const patchRequest = new XMLHttpRequest();
patchRequest.open("PATCH", "https://jsonplaceholder.typicode.com/posts/101");
const body = JSON.stringify({
    name: "vijay",
    id: "IISG$%^&&"
})
 patchRequest.onload = () => {
    if(patchRequest.readyState == 4 && patchRequest.status == 201) {
        const data = JSON.parse(patchRequest.responseText);
        console.log(data);
    } else {
        console.log(patchRequest.status);
    }
 }
 patchRequest.send(body);