
// make 5 code questions
var questionsIndex = 0;
var startBtn = document.getElementById("start");
var timeLeftSpan = document.querySelector("#time-left");
var questionH3 = document.querySelector("#question");
var answerBtn1 = document.querySelector("#answer1");
var answerBtn2 = document.querySelector("#answer2");
var answerBtn3 = document.querySelector("#answer3");
var answerBtn4 = document.querySelector("#answer4");
var correctBtn = document.querySelector("#correct"); 
var choiceBox = document.querySelector("#choice-box");
var intro = document.querySelector("#intro");
var timeLeft = 30;
var timer;
var submitBtn = document.querySelector("#submit");
var wins = localStorage.getItem("wins")||0;
var score = 0; 
var correctAnswer = 0;
var wrongAnswer = [];
var goback = document.querySelector("#goback");
var questionsIndex = 0;

// TODO: change the questions.correct to the value of the eight choice
// TODO: we want loop through the questions array and create buttons forEach() || for loop
// for each object in the questions array we want to do something with each key:value pair 

// have an empty h2 and append questions.questions INSIDE the for loop, create a button for every response (i.e questions.response1) and append to the page, tie an eventlistern with event.target (this will select whatever the user clicked), and then check IF the value of what the button that was clicked IS against the questions.correct.
// increment questionsIndex++;
// questions[questionIndex]
// 
var questions = [
    {
        question: "It is a structure that lets you to perform the same action repeatedly.",
        response1: "Array",
        response2: "Loop",
        response3: "Conditional",
        response4: "Object",
        correct:"Loop",
    },
    {       
        question: "Select that is NOT a premitive data type.",
        response1: "String",
        response2: "Undefined",
        response3: "Number",
        response4: "Array",
        correct:"Array",
    },
    {
        question: "Javascript is NOT described as a...",
        response1: "lightweight programing language.",
        response2: "closed scripting language.",
        response3: "cross-platform language.",
        response4: "case sensitive language.",
        correct:"lightweight programin language",
    },
    {
        question: "This language is used to design the structure of web pages.",
        response1: "JavaScript",
        response2: "HTML",
        response3: "CSS",
        response4: "JSON",
        correct:"HTML",
    },
    {
        question: "JavaScript is used to ...",
        response1: "enhance web pages",
        response2: "access the server",
        response3: "manage database",
        response4: "retrive images from other websites only",
        correct:"enhance web pages"
    }
   ]


// Start the coding questions by clicking Start button. 
startBtn.addEventListener("click", startGame);
function startGame() {
    console.log("game started!");
    intro.style.display = "none";
     
    
    
    questionH3.textContent = questions[questionsIndex].question;
   
    answerBtn1.textContent = questions[questionsIndex].response1;
    answerBtn2.textContent = questions[questionsIndex].response2;
    answerBtn3.textContent = questions[questionsIndex].response3;
    answerBtn4.textContent = questions[questionsIndex].response4;
    
    correctBtn.textContent = questions[questionsIndex].correct;
    console.log(questions[questionsIndex].question);
}
            
    Event.Target.style.visibility ="hidden";
    choiceBox.addEventListener("click", function(event){
       var element = event.target;
        
        })

    // for (i = 0; i < questions.length; i++){
    //     if (element.textContent==correctBtn.textContent){
    //         console.log("worked");

        // console.log(element.textContent);
        // console.log(correctBtn.textContent);

    //     if(element==questions[questionsIndex].correct){
    //         console.log("test")
        
    // })
   
    // function checkAnswer(response){
    //     if(questions[questionsIndex].correct == response)
    //     score++;
    //     } else {
    //     score--;
    //     }

    //     for (let i = 0; i < questions.length; i++) {
            
            
    


// //Set timer 
// var timer = setInterval(function()(
//     timeLeft--; 
// clearInterval(timer);

// game over when time runs out
// if (timeLeft ==0) {
//     clearInterval(timer);

// // user chooses an answer
    // choiceBox.addEventListener("click", setNextQuestion);

// // present another question  

        
// } //end startGame() function
  

    

   

// user picks a wrong answer, then time is subttracted from the clock.

//     timer = setInterval(function () {
//     timeLeft--; 
//     if (timerLeft === 0) {
//         clearInterval(timer);
//       }
// }, 1000);




// // Game ends when all questions are answered or time reaches to 0.
// if ()

// // // when game ends, I can save my initials and score. (getItems/setItems)

// // submitBtn.addEventListener("submit", (event)=>{

// addbtn.addEventListener("click", function({
//     if (initial!== 0 ){
//         score:++;
        
//     player.textContent = initial        
//     storedPlayer = localStorage.setItem("initial", initial); 
//         }        
        
        localStorage.setItem("highscore","");
    
    
// });

// // read the local storage item.
    const initial = localStorage.getItem("initial");

// // Go back 
    // return();
    
// // Clear High Scores
    localStorage.removeItem('highscore');


