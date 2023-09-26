//creating an element
let divElement = document.createElement("div");

// adding attributes
divElement.setAttribute("class","js-class js-class2");
divElement.setAttribute("id","js-id");
console.log(divElement);
// access the element using id
let headElement = document.getElementById("heading");
console.log(headElement);
// access the element by class name
let subhead = document.getElementsByClassName("head ")[1];
console.log(subhead);
// short task
// creat element p , a 
// setAttribute , href "goole.com"
// p class or id 
// let paraElement = document.createElement("p");
// paraElement.setAttribute("p","content");
// console.log("paraElement");

let anchorElement = document.createElement("a");
anchorElement.setAttribute("href","https://google.com/");
anchorElement.setAttribute("target","blank");
console.log(anchorElement);


//Query selectors
let queryelement = document.querySelector(".query-class");
queryelement.style.color="red";
console.log(queryelement);

//Query selectors all
let queryelementall = document.querySelectorAll(".query-class");
console.log(queryelementall);
const color=["green","blue","brown","red"];

//short task
for(let i=0; i< queryelementall.length; i++) {
console.log(queryelementall[i]);
queryelementall[i].style.backgroundColor = color[i];
}
anchorElement.innerText="Google";
divElement.innerText += `HELLO IM DIV`;

divElement.innerHTML += `
<h2 class="head">new heading</h2>
<p> new para is created using js</p>
`;
console.log("divElement")

queryelement.innerText += "hello im inner html         and im add"
queryelement.textContent += "hello im inner html         and im add"
console.log(queryelement.innerText);
console.log(queryelement.textContent);

let newElement = document.createElement("div");
newElement.style.backgroundColor="grey";
newElement.style.margin="20px";

  //append the content
 document.body.append(newElement);

 const append = newElement.append(divElement,anchorElement,"Appending text");
  console.log(append);
  //appendchild
//   const appendChild=newElement.appendChild(divElement,);
//   console.log(appendChild);