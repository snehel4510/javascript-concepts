// <---------------------------------------------------------------------------------------------->
// selection of elements

const para1 = document.querySelector("p"); // grabs the first p tag
console.log(para1); // logs the first p tag object
console.log(para1.textContent); // logs the first p tag object's text content

//textContent displays all the text inside the element while innexText displays only the text inside the element's innerHTML

const para2 = document.querySelector(".error"); // grabs the first element with class error
console.log(para2.textContent);
const para3 = document.querySelector("div.error"); // grabs the first div with class error
console.log(para3.textContent);
const para4 = document.querySelector(
  "body > div:nth-child(2) > p:nth-child(1)" // unique css selector directly from the browser
);
console.log(para4.textContent);

const paras = document.querySelectorAll("p"); // grabs all p tags
console.log(paras); // returns a node list (similar to an array of all the p tags)

paras.forEach((i) => {
  console.log(i.textContent);
});

const err = document.querySelectorAll(".error"); // grabs all elements with class error
console.log(err);
err.forEach((i) => {
  console.log(i.textContent);
});

const title = document.getElementById("title"); // grabs the title element (singular)
console.log(title.textContent);

const errs = document.getElementsByClassName("error"); // grabs all elements with class error (plural)
console.log(errs); // returns an HTML collection (similar to an array but we can't use forEach method)

const ptags = document.getElementsByTagName("p"); // grabs all p tags
console.log(ptags); // returns an HTML collection

// <---------------------------------------------------------------------------------------------->

// MANIPULATION OF THE DOM ELEMENTS
const para = document.querySelector("p");
para.textContent = "Hello snehel";

let j = 1;
const paras1 = document.querySelectorAll("p");
paras1.forEach((i) => {
  i.textContent += " new text " + j;
  j++;
});

const content = document.querySelector(".content");
console.log(content.innerHTML);
content.innerHTML += "<h2>This is a new heading2</h2>";

const people = ["ankur", "snehel", "arpit", "vivek", "ayush"];
people.forEach((i) => {
  content.innerHTML += `<p>${i}</p>`;
});

// <---------------------------------------------------------------------------------------------->
// getting and setting element attributes

const link = document.querySelector("a");
console.log(link.getAttribute("href")); // getting the attribute
link.setAttribute("href", "https://www.instagram.com"); // setting the attribute

const msg = document.querySelector("p.error");
console.log(msg.getAttribute("class"));
msg.setAttribute("class", "success");
msg.textContent = "this is a success !!";
msg.setAttribute("style", "color: green;"); // adding a new attribute even if it doesn't exists

const title2 = document.querySelector("h2.title2");
console.log(title2.getAttribute("style"));
// title2.setAttribute("style", "margin: 20px;");   // this completely overrides instead of adding new property
console.log(title2.style);

// adding new properties without overwriting existing ones
title2.style.color = "red";
title2.style.margin = "20px";
title2.style.fontSize = "50px";

// deleting an attribute
title2.style.margin = ""; // remove only the margin property
title2.removeAttribute("style"); // remove the complete style attribute

// <---------------------------------------------------------------------------------------------->

// adding and removing classes

const email = document.querySelector("div#email");
console.log(email.classList); // selecting all the classes that a particular element has -> returns a DOMtokenList

// adding a class
email.classList.add("green");

// removing a class
email.classList.remove("green");

// toggling a class
email.classList.toggle("red"); // if it's green turn to red, if it's red turn to green again
