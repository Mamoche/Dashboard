const accountDisplay = document.getElementById("Account");
const enterName = document.getElementById("enterName");
const appDispalay = document.getElementById("theApp");
const nameInput = document.getElementById("name");
const genderInput = document.getElementById("genderInput");
const greetings = document.getElementById("Greetings");
const clock = document.getElementById("clock");
let username;
let gender;
let time = new Date();
enterName.addEventListener("click", ()=>{
    username = nameInput.value.trim();
    gender = genderInput.value;
    if(username === "" || gender === ""){
        alert("You didn't enter the name or the gender");
        return;
    }
    accountDisplay.style.display = "none";
    appDispalay.style.display = "flex";
    displayTime();
    if(gender == "Male"){
        greetings.textContent = "Hello, Mr. " + username;
    }else if(gender == "Female"){
        greetings.textContent = "Hello, Misses "+ username;
    }else{
        greetings.textContent = "Greetings my dear " + username;
    }
});

function displayTime() {
  setTimeout(function () {
    clock.textContent = `It's ${time.toLocaleTimeString()}`;
    time = new Date();
    displayTime();
  }, 1000);
}
/*TODO:
1- system of name = true
2- clock = true
3- weather(API)
4- todo list
5- theme (custome)
6- Way of openning(custome)
*/