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
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
const label = document.getElementById("update");
let count = 0;

increase.onclick = function(){
    count++;
    label.textContent = count;
}
decrease.onclick = function(){
    count--;
    label.textContent = count;
}
reset.onclick = function(){
    count = 0;
    label.textContent = count;
}