
// 5 min questions

var startBtn = document.querySelector("#start");
var wordDisplayH2 = document.querySelector("question-display");
var timeLeftSpan = document.querySelector("#time-left");
var isPlaying = false;
var timeLeft = 60;
var wins = localStorage.getItem("wins")||0;

var questions = [
    {
        question: "It is a structure that lets you to perform the same action repeatedly.",
        response1: "Array",
        response2: "Loop",
        response3: "Conditional",
        response4: "Object",
        answer:2,
    },
    {       
        question: "Select that is NOT a premitive data type.",
        response1: "String",
        response2: "Undefined",
        response3: "Number",
        response4: "Array",
        answer:4,
    },
    {
        question: "Javascript is NOT described as a...",
        response1: "lightweight programing language.",
        response2: "closed scripting language.",
        response3: "cross-platform language.",
        response4: "case sensitive language.",
        answer:2,
    },
    {
        question: "This language is used to design the structure of web pages.",
        response1: "JavaScript",
        response2: "HTML",
        response3: "CSS",
        response4: "JSON",
        answer:2
    },
    {
        question: "JavaScript is used to ...",
        response1: "enhance web pages",
        response2: "access the server",
        response3: "manage database",
        response4: "retrive images from other websites only",
        answer:1,
    }

    

var score = 0;



// Set timer once the user clicks on the start button.
startBtn.addEventListener("click", function () {
    startBtn.style.display:"none";
    }
    console.log("game started!");
    isPlaying = true;  
    timeLeft = 30;
    clearInterval(timer);
    timer = setInterval(function () {
    timeLeft--; 
    timeLeftSpan.textContent = timeLeft;
    if (timerLeft === 0) {
        clearInterval(timer);
        isPlaying =false;

          
    }
}, 1000); 
    


// user picks a choice.
for(var i=0; i < questions.length; i++){
    var response = prompt (questions[i].prompt);
    if (response === questions[i].answer){
        score++;
        alert("Correct!");
    } else{
        alert("Wrong!");
        }  
}
// present another question.
// user picks a wrong answer, then time is subttracted from the clock.
// Game ends when all questions are answered or time reaches to 0.
// when game ends, I can save my initials and score. (getItems/setItems)
input
