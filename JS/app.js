// // app.js - JavaScript loaded successfully!
// console.log("Spider-Man page script initialized.");

// // Simple interaction example: Alert when clicking the main image
// const mainImg = document.getElementById('mainImg');
// if (mainImg) {
//     mainImg.addEventListener('click', () => {
//         alert("With great power comes great responsibility!");
//     });
// }


// console.dir(document.querySelector("p"));
// console.dir(document.querySelector("#myId"));
// console.dir(document.querySelector(".myClass"));
// console.dir(document.querySelectorAll("p"));


// let links = document.querySelectorAll(".box a");
// for (let i = 0; i < links.length; i++) {
//     links[i].style.color = "red";
// }


// //Dom Events
// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     // btn.onclick = sayHello;
//     btn.onmouseenter = function () {
//         console.log("you entered a buttton");
//     }
//     btn.addEventListener("click", sayHello);
//     btn.addEventListener("click", sayName);
//     }

// function sayHello() {
//     alert("Hello!");
// }

// function sayName() {
//     alert("chinmay");
// }


// //Activity random color
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {
//     let h3 = document.querySelector("h3");
//     let randomColor = getRandomColor();
//     h3.innerText = randomColor;

//     let div = document.querySelector("div");
//     div.style.backgroundColor = randomColor;

//     console.log("color was updated");
// });

// function getRandomColor() {
//     let red = Math.floor(Math.random() * 255);
//     let green = Math.floor(Math.random() * 255);
//     let blue = Math.floor(Math.random() * 255);

//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }


// // this in eventlistener
// let btn = document.querySelector("button");

// btn.addEventListener("click", function () {         //you can also use mouseenter instead of click.
//     console.log(this.innerText);
//     this.style.backgroundColor = "green";
// })


// //keyboard events
// let inp = document.querySelector("input");
// inp.addEventListener("keydown", function (event) {
//     console.log(event);
//     console.log("key press");
// })



// //change event
// let form = document.querySelector("form");
// form.addEventListener("submit", function (event) {
//     event.preventDefault();
// });

// let user = document.querySelector("#user");

// user.addEventListener("change", function () {
//     console.log("input changed");
//     console.log("final value= ", this.value);
// });

// //input event
// user.addEventListener("input", function () {
//     console.log("input event");
//     console.log("final value=", this.value);
// });


// // event bubbling
// let div = document.querySelector("div");
// let ul = document.querySelector("ul");
// let lis = document.querySelectorAll("li");

// div.addEventListener("click", function () {
//     console.log("div was clicked");
// });
// ul.addEventListener("click", function () {
//     event.stopPropagation();                        // this stop the event bubbling
//     console.log("ul was clicked");
// });
// for (li of lis) {
//     li.addEventListener("click", function () {
//         console.log("li was clicked");
//         event.stopPropagation();
//     });
// }


// // todo app complete
// let btn = document.querySelector("button");
// let ul = document.querySelector("ul");
// let inp = document.querySelector("input");

// btn.addEventListener("click", function () {
//     let item = document.createElement("li");
//     item.innerText = inp.value;

//     let delBtn = document.createElement("button");
//     delBtn.innerText = "delete";
//     delBtn.classList.add("delete");

//     item.appendChild(delBtn);
//     ul.appendChild(item);
//     inp.value = "";
// });

// ul.addEventListener("click", function (event) {
//     if (event.target.nodeName == "BUTTON") {
//         let listItem = event.target.parentElement;
//         listItem.remove();
//         console.log("deleted");
//     }
// });



// // call stack

// function hello() {
//     console.log("inside hello function");
//     console.log("hello");
// }

// function demo() {
//     console.log("calling hello fnx");
//     hello();
// }

// console.log("calling demo fnx");
// demo();
// console.log("done,bye!");


// // callback hell
// function savetoDb(data, success, failure) {
//     let internetspeed = Math.floor(Math.random() * 10) + 1;
//     if (internetspeed > 4) {
//         success();
//         }else {
//             failure();
//         }
//     }

// savetoDb(
//     "chinmay",
//     () => {
//         console.log("success: your data was saved");
//         savetoDb(
//             "hello world",
//             () => {
//                 console.log("success2: data2 saved");
//                 savetoDb(
//                     "good",
//                     () => {
//                         console.log("success3: data3 saved");
//                     },
//                     () => {
//                         console.log("failure3: weak connection");
//                     }
//                 );
//             },
//             () => {
//                 console.log("failure2: weak connection");
//             }
//         );
//     },
//     () => {
//         console.log("failure:weak connection. data not saved");
//     }
// );


// // callback hell but use of promise to improve or easily understand
// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             resolve("color change");
//         }, delay);
//     });
// }

// changeColor("red", 1000)
// .then(() => {
//         console.log("red color was completed");
//         return changeColor("orange", 1000);
//     })
// .then(() => {
//         console.log("orange color was completed");
//         return changeColor("green", 1000);
//     })
// .then(() => {
//         console.log("green color was completed");
//         return changeColor("blue", 1000);
//     })
// .then(() => {
//         console.log("blue color was completed");
//     });


// // async function
// async function greet() {
//     throw "404 page not found";
//     return "hello!";
// }
// greet()
//     .then((result) => {
//         console.log("promise was resolved");
//         console.log("result was: ", result);
//     })
//     .catch((err) => {
//         console.log("promise was rejected with err: ", err);
//     });

// let demo = async () => {
//     return 5;
//     }


// // async function with await keyword (use of previous color changing in promise code to more short)
// h1 = document.querySelector("h1");

// function changeColor(color, delay) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             h1.style.color = color;
//             console.log(`color change to ${color}!`);
//             resolve("color change");
//         }, delay);
//     });
// }

// async function demo() {
//     await changeColor("red", 1000);
//     await changeColor("orange", 1000);
//     await changeColor("green", 1000);
//     changeColor("blue", 1000);
// }

