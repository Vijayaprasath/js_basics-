// getElementById()
let heading = document.getElementById('heading');
console.log(heading);
// getElementsByClassName()
let sports = document.getElementsByClassName('sport');
console.log(sports);
// getElementsByTagName()
let TagName = document.getElementsByTagName('li');
console.log(TagName);
// querySelector()
let element = document.querySelector('li')
console.log(element);
// querySelectorAll()
let elements = document.querySelectorAll('li')
console.log(elements);

const title = document.querySelector("#heading");
title.style.color = "red";
const elements2 = document.querySelectorAll(".sport");
for (let index in elements2) {
  elements[index].style.color = "green";
}

// Creating element

let ul = document.querySelector('#sports-list')
let li = document.createElement('li')
let li2 = document.createElement('li')
// // remove element
// ul.remove();
// Adding element
ul.append(li);
li.innerText = "BaseBall"
ul.append(li2);

// Modifying the attributes
li.setAttribute('class', 'sport')
li.removeAttribute('class')
console.log(ul.getAttribute('id'))

let ff= document.querySelector('body')
console.log(ff)
ff.classList.remove('hjolh')
ff.classList.add("fpp")
console.log(ff.classList.contains("fpp"))


// let obj1 = {
//     name: "vijay",
//     id: "vij",
//     khas:"asjkf"
// };
//  let obj2 = {
//     name: " jlkfad",
//     id: "aeo"
//  }

//  let a = {...obj1, ...obj2}
//  console.log(a);


// console.log(document.querySelector('#heading'));
// console.log(document.querySelectorAll('.sport'));

