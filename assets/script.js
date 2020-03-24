// Global variables

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
var quizQuestion = -1;
var timeLeft = 100;

// Functions

function startTimer() {
    quizTimer = setInterval(function(){
        $("#timer").text(timeLeft);
        if (timeLeft !== 0) {
            timeLeft--;
        }   else {
            stopTimer();
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(quizTimer);
    $("#timer").text(timeLeft);
}

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
    if (questionArray !== questions.length) {
        $.each(questions[questionArray].choices, function(i, value) {
            var choicesBtn = $("<button>");
            choicesBtn.addClass("btn bg-purple-bright font-weight-bold mb-1 quizBtn");
            choicesBtn.attr("id", (i + 1));
            choicesBtn.attr("type", "submit");
            choicesBtn.attr("style", "display: block");
            choicesBtn.text(value);
            $(".choicesBtn").append(choicesBtn);
        })
    }   else {
            endQuiz();
        };
}

function generateQuestion() {
    $("#quizQuestion").html(questions[questionArray].question);
};

function beginQuiz() {
    $("#quizBeginBtn").remove();
    $("#quizTitle").empty();
    $("#quizDirections").remove();
    startTimer();
    generateQuestion();
    generateButtons();
    questionArray++;
    quizQuestion++;
};

function endQuiz() {
    stopTimer();
    $("#quizTitle").text("All done!");
    $("#quizTitle").removeClass("text-center");
    $("#quizQuestion").empty();
    $("#scoreAlert").addClass("text-left").attr("id", "scoreText").html("Your final score is " + timeLeft + ".");
    $("#submitScoreDiv").attr("style", "display: flex;");
    
}


// Click functions and button usage

$("#quizBeginBtn").click(function() {
    if (event.target.matches("button")){        // ensures that a button was selected, not just the div
        beginQuiz();
    }
});

$(".choicesBtn").click(function(event){
    if (event.target.matches("button")){        // ensures that a button was selected, not just the div
        var buttonClicked = (event.target.id);
        console.log(questions[quizQuestion].answer);
        console.log(buttonClicked);
        $(".choicesBtn").empty();
        generateButtons();
        if (questionArray !== questions.length) {
            $("#quizQuestion").html(questions[questionArray].question);
                
            if (buttonClicked == questions[quizQuestion].answer) {
            answerCorrect();
        }   else {
            answerWrong();
        }
        questionArray++;
        quizQuestion++;
        }
    }
});

var submitScoreBtn = $("#submitScoreBtn");

submitScoreBtn.on("click", function(e) {
    console.log("clicked the submit button") 

});






// var submitScoreBtn = document.querySelector("#submitScoreBtn");
    
// submitScoreBtn.addEventListener("click", function(event) {
//     event.preventDefault();
//     generateHighscores();
// });

// // Highscores page-specific scripts



// saveHighScore = e => {
//     console.log("clicked the save button")
//     e.preventDefault();
// }








// // function generateHighscores() {
// //     var playerName = document.querySelector("#initialsInput");
// //     var playerScore = timeLeft;
    
//     var playerEntry = {
//         name: playerName.value,
//         score: playerScore
//     };

//     // localStorage.setItem("highscore", JSON.stringify(playerEntry));
//     var highscores = JSON.parse(localStorage.getItem("playerEntry")) || [];

//     console.log(highscores.name);
//     console.log(highscores.score);

//     $("#liTest").text(highscores.name + " " + highscores.score);
// }