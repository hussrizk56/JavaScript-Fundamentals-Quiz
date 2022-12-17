// Create variables/arrays that contain the questions, choices, and answers from the mock up provided. 
var questions = [
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["Strings", "Booleans", "Alerts", "Numbers"],
        answer: "Alerts"
    },
    {
        question: "The condition in an if/else statement is enclosed with ________.",
        choices: ["1. Quotes", "2. Curly Brackets", "3. Parenthesis", "4. Square Brackets"],
        answer: "Parenthesis"
    },
    {
        question: "Arrays in JavaScript can be used to store _______.",
        choices: ["1. Numbers and strings", "2. Other arrays", "3. Booleans", "4. All of the above"],
        answer: "All of the above"
    },
    {
        question: "String values must be enclosed within ______ when being assigned to variables.",
        choices: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parenthesis"],
        answer: "Quotes"
    },
    {
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choices: ["1. JavaScript", "2. Terminal/Bash", "3. For loops", "4. Console.log"],
        answer: "Console.log"
    },
];

//Additional Variables: 
var currentScore = 0; 
var questionNumber = 0;

// Variables with query selection to reference HTML file: 
var timeLeft = document.querySelector("#time-left");
var startGame = document.querySelector("#start-button");
var quizQuestion = document.querySelector("#quiz-question");
var card = document.querySelector("#card");

// Variables for quiz functions: 
var startingTime = 75;
var timer = 0;
var wrongAnswer = 10;

// Varabile for creating an element not currently in existing HTML. 
var createList = document.createElement("ul");

// Timer function to display on screen and count down. 
startGame.addEventListener("click", function() {
    if (timer === 0) {
        timer = setInterval(function() {
            startingTime--;
            timeLeft.textContent = "Seconds Left: " + startingTime;

            if (startingTime <= 0) {
                clearInterval(timer);
                gameOver();
                timeLeft.textContent = "Time Over!"
            }
        }, 1000);
    }
    render(questionNumber);
});
// Function for questions, answers and choices: 
function render(questionNumber) {
    createList.innerHTML = "";
    
    for (var i = 0; i < questions.length; i++) {
        var displayQuestion = questions[questionNumber].question;
        var displayChoices = questions[questionNumber].choices;
        quizQuestion.textContent = displayQuestion;
    }

    displayChoices.forEach(function (newEl) {
        var li = document.createElement("li");
        li.textContent = newEl;
        quizQuestion.appendChild(createList);
        createList.appendChild(li);
        li.addEventListener("click", (compareAnswer));
    })
}
