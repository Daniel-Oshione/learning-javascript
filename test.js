// to use window prompt or change text with ID
// function myFunction(){
//     window.alert(`what up man`);
//     document.getElementById("text").innerHTML = "Button clicked!!";
// }


// to recieve user input proffesionally
// let username;

// document.getElementById("mybutton").onclick = function(){
//     username = document.getElementById("myinput").value;
//     document.getElementById("myh1").textContent = `Welcome ${username}`;
// }


// type conversion, changing windows prompt from string to (numbers,bool,etc)
// example below:
// let age = window.prompt("When were you born?");
// age = Number(age);
// age = 2024 - age;
// console.log(age);


// we cant also use the const (const) to avoid channging variables 
// example to check for user birthyear
// let age;
// const year = 2024;
// let birthYear; 
// document.getElementById("mybutton").onclick = function(){
//     birthYear = document.getElementById("myinput").value;
//     birthYear = Number(birthYear);
//     age = year - birthYear;
//     document.getElementById("myh3").textContent = age;
// }


// side task(create a counter program)
// const decrease = document.getElementById("decrease");
// const reset = document.getElementById("reset");
// const increase = document.getElementById("increase");
// const label = document.getElementById("update");
// let count = 0;

// increase.onclick = function(){
//     count++;
//     label.textContent = count;
// }
// decrease.onclick = function(){
//     count--;
//     label.textContent = count;
// }
// reset.onclick = function(){
//     count = 0;
//     label.textContent = count;
// }



//USING MATH 
// let x = 100;
// let y = 50;
// let z = 3;
// z = Math.round(x); to nearest whole
// z = Math.ceil(x); to upper
// z = Math.floor(x); to lower
// z = Math.pow(x,y);
// z = Math.sqrt(x,y); 
// z = Math.log(x);  
// let max = Math.max(x, y, z) to check for maximum variables 
// let min = Math.min(x, y, z) to check for minimum variables
// let rand = Math.floor(Math.random() * x) + y;
// console.log(rand);

// mini project (RANDOM NUMBER GENERATOR)
// const mybtn = document.getElementById("roll_btn");
// const rand1 = document.getElementById("random1");
// const rand2 = document.getElementById("random2");
// const rand3 = document.getElementById("random3");
// const min = 1;
// const max = 10;
// let randomnum1;
// let randomnum2;
// let randomnum3; 
// mybtn.onclick = function(){
// randomnum1 = Math.floor(Math.random() * max) + min;
// randomnum2 = Math.floor(Math.random() * max) + min;
// randomnum3 = Math.floor(Math.random() * max) + min;
// rand1.textContent = randomnum1;
// rand2.textContent = randomnum2;
// rand3.textContent = randomnum3;
// }


// using IF STATEMENTS
// const submit = document.getElementById("btn");
// const mytext = document.getElementById("mytext");
// const mssage = document.getElementById("message");
// let txt_entered;

// submit.onclick = function(){
//     txt_entered = mytext.value;
//     txt_entered = Number(txt_entered)
//     if( txt_entered < 18 ){
//         mssage.textContent = `You are not elligible to vote`;
//     } 
//     else if(txt_entered >= 90){
//         mssage.textContent = `You too old buddy`;
//     }
//     else{
//         mssage.textContent = `You are elligible to vote`;
//     }
// }


// testing for checkboxes
// const checka = document.getElementById("checka");
// const smallText = document.getElementById("smallText");
// const button = document.getElementById("submit");

// button.onclick = function(){
//     if(checka.checked){
//     smallText.textContent = `You have checked 😉`;
//     }
//     else{
//         smallText.textContent = `You are not checked 🙄`;
//     }
// }


// using ternary operator which is short form of if and else statements
// condition ? contitionTrue : conditionFalse;
// let age = window.prompt("Enter age?");
// age = Number(age); 
// let display = age >= 18 ? "You are a big boy" : "You are a baby";
// console.log(display);

// let student = true;
// let message = student ? "yes" : "no";
// console.log(message)


// using switch cases
// let score = window.prompt("Enter your score:");
// let grade;
// switch(true){
//     case score >= 80:
//         grade = "A";
//         break;
//     case score >= 70:
//         grade = "B";
//         break;
//     case score >= 60:
//         grade = "C";
//         break; 
//     case score >= 40:
//         grade = "D";
//         break;  
//     case score >= 30:
//         grade = "E";
//         break; 
//     case score <= 29:
//         grade = "F";
//         break;
// }
// console.log(grade);

// to manipulate string use the (.charAT to printout from 0-end)
