
var questions = [
    {question: "Commonly used data types DO NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: 3
},
    {question: "The condition in an if/else statement is enclosed within _______.",
    choices: ["1. quotes", "2. curly brackets", "3. parentheses", "4. square brackets"],
    answer: 3
},
    {question: "Arrays in JavaScript can be used to store _______.",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: 4
}, 
    {question: "String values must be enclosed within _______ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. parentheses"],
    answer: 3
},
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: 4
}]

var questionArray = 0;
var quizQuestion = 0;
var timeLeft = 100;

function quizTimer() {
    var quizTimer = setInterval(function(){
        timeLeft--;
        $("#timer").text("Time: " + timeLeft);
        if (timeLeft <= 0) {
            clearInterval(quizTimer);
        }   else if (quizQuestion > 4) {
            clearInterval(quizTimer);
        }
    }, 1000);
};

function answerCorrect() {
    $("#bannerAnswer").show();
    $("#bannerAnswerText").text("Correct!");
};

function answerWrong() {
    $("#bannerAnswer").show();
    $("#bannerAnswerText").text("Wrong answer!");
    timeLeft -= 10;
};

function generateButtons() {
    for (var i = 0; i < questions[questionArray].choices.length; i++) {
        var choicesBtn = $("<button>");
        choicesBtn.addClass("btn bg-purple-bright font-weight-bold mb-1 quizBtn");
        choicesBtn.attr("id", (i + 1));
        choicesBtn.attr("type", "submit");
        choicesBtn.attr("style", "display: block");
        choicesBtn.text(questions[questionArray].choices[i]);
        $(".choicesBtn").append(choicesBtn);
    }
}

function generateQuestion() {
    $("#quizQuestion").html(questions[questionArray].question);
};

function beginQuiz() {
    $("#quizBeginBtn").remove();
    $("#quizTitle").empty();
    $("#quizDirections").remove();
    quizTimer();
    generateQuestion();
    generateButtons();
    questionArray++;
};

$("#quizBeginBtn").click(beginQuiz);

$(".choicesBtn").click(function(event){
    var buttonClicked = (event.target.id);
    $(".choicesBtn").empty();
    generateButtons();
    $("#quizQuestion").html(questions[questionArray].question);
      if (buttonClicked == questions[quizQuestion].answer) {
        answerCorrect();
    }   else {
        answerWrong();
    }
    questionArray++;
    quizQuestion++;
    console.log(quizQuestion);
});

if (quizQuestion > 4) {
    $("#quizTitle").text("All done!");
}




$("#clearScores").click(function() {
    $("#listOfScores").empty();
});