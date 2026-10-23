// console.log("hello, world!");
// let num=5+5;
// console.log(num);

// let a=5;
// let b=10;
// // template literals
// console.log(`the sum is: ${a+b} rupees`);

// //conditional statements
// //if
// let age=30;
// console.log("before if statement");
// if (age>=18){
//     console.log("you can vote");
// }
// if (age<18){
//     console.log("you cannot vote");
// }
// console.log("after if statement");

// //else if
// let marks=90;
// if (marks>=80){
//     console.log("a+");
// }
// else if(marks>=60){
//     console.log("a");
// }
// else  if (marks>=33){
//     console.log("pass");
// }
// else if (marks<33){
//     console.log("fail");
// }


// //else
//     let colour="yellow";
// if (colour==="red"){
//     console.log("stop");
// }else if (colour==="yellow"){
//     console.log("slow down");
// }
// else{
//     console.log("traffic light is broken");
// }


// // alert and prompt


// let f=prompt("first name");
// let l=prompt("last name");
// console.log(f + " " + l);
// alert("welcome " + f + " " + l);


// let msg=" chinmay "

// // Method chaing
// let Newmsg=msg.trim().toUpperCase();
// console.log(Newmsg);

// // slice
// let ms=msg.slice(3,6);
// console.log(ms)

// // array slice
// let arr=[1,2,3,4,5,6];


// //LOOPS
// const favmov="avengers";
// let guess=prompt("guess the movie name");
// while((guess!=favmov)&&(guess!="quit")){
// guess=prompt("wrong guess, try again");
// }

// if(guess==favmov){
// console.log("congratulations!");
// }
// else{
//     console.log("you quit the game");
// }

// // loop with arrays
// let fruits=["apple","banana","orange","grape"];
// for(let i=0;i<fruits.length;i++){
// console.log(i,fruits[i]);
// }


// // todo app

// let todo = [];
// let req = prompt("please enter your request");
// while (true) {
//     if (req == "quit") {
//         console.log("you quit the app");
//         break;
//     }
//     if (req == "list") {
//         console.log("-----------------");
//         for (let i = 0; i < todo.length; i++) {
//             console.log(i, todo[i]);
//         }
//         console.log("-----------------");
//     } else if (req == "add") {
//         let task = prompt("enter the task");
//         todo.push(task);
//         console.log("task added");
//     } else if (req == "delete") {
//         let idx = prompt("plz enter the task index to delete");
//         todo.splice(idx, 1);
//         console.log("task deleted");
//     } else {
//         console.log("wrong request");
//     }

//     req = prompt("please enter your request");
// }


// // thread or twitter post using java literals

// const post = {
//     username: "@chinmay",
//     Content: "this is my #first post",
//     likes: 150,
//     Reposts: 5,
//     tags: ["@sipnaclg", "@it"]
// };


// // Guessing game

// const max=prompt("please enter the maximum number");
// const random=Math.floor(Math.random() * max)+1;

// let guess= prompt("guess the number");

// while(true){
//     if(guess=="quit"){
//         console.log("you quit the game");
//         break;
//     }
//     if(guess==random){
//         console.log("you re right!congrats!! random no was" ,random);
//         break;
//     }
//     else if(guess<random){
//         guess=prompt("hint: too low, guess again");
//     }else{
//         guess=prompt("hint: too high, guess again");
//     }

// }


// // concatination strings

// let str=['hello','world','this','is','javascript'];

// function concat(str){
//     let result='';

//  for(let i=0;i<str.length;i++){
//     result+=str[i];
//  }

//   return result;
// }


// // scope func,block,lexical

// let greet ="hello";    // global scope

// function changegreet(){         // function scope
//     let greet="hi";
//     console.log(greet);
//    function innergreet(){       // lexical scope
//     console.log(greet);
//  }
// }
// console.log(greet);
// changegreet();


// // high order functions

// function oddoreven(request){
//     if(request=="odd"){
//         return function(n){
//             console.log(!(n%2==0));

//         }
//     }else if(request=="even"){
//         return function(n){
//             console.log(n%2==0);
//         }
//     }else{
//         console.log("wrong answer");
//     }
// }

// let request="odd";


// //this keyword

// const student={
//     name:"chinmay",
//     age:'19',
//     eng:85,
//     math:90,
//     phy:80,
//     getAvg(){
//         let avg=(this.eng + this.math + this.phy)/3;
//         console.log(`${this.name} got avg marks=${avg}`);
//     }
// }


// // arrow functions

// const sum=(a,b) =>{
//     console.log(a+b);    // you can use return a+b;
// }


// // set timeout
// console.log("hi there");
// setTimeout(() =>{
//     console.log("chinmay");     //this chinmay is printed after 3 seconds
// },3000);

// console.log("bye there");


// // set interval
// setInterval(() => {
//     console.log("hello");
// },2000);                       // this hello is printed every 2 seconds


// // this with arrow functions
// const student={
//     name:"chinmay",
//     marks:56,
//     prop:this,               //global object or scope
//     getName:function(){
//         console.log(this);
//         return this.name;
//     },
//     getMarks:()=>{
//         console.log(this);      //parent object or scope --> window object
//         return this.marks;
//     },
//     getinfo1:function (){
//         setTimeout(()=>{
//             console.log(this);      //student object
//         },2000);
//     },
//     getinfo2:function (){
//         setTimeout(function(){
//             console.log(this);      //window object
//         },2000);
//     },   
// };


// // reduce method
// let nums=[1,2,3,4,5];
// let finalValue=nums.reduce((res , el)=>{
//     console.log(res);
//     return res+el;
// });
// console.log(finalValue);

// // another problem of reduce
// let arr=[2,3,4,9,67,6];
// let max=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);


//