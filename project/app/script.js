//Runs once at the beginning
var soundCorrect = new Audio("sounds/sound_correct.mp3");
var soundIncorrect = new Audio("sounds/sound_incorrect.mp3");

function setup() {
    var googleSheetLink = "https://docs.google.com/spreadsheets/d/e/2PACX-1vRlqCcDF16dmy_wh08R9Yx6dNkA1rBU3qI9gjlqjpToddQtQeSCAqVMG2KIMyidaOsYOxUGGAcwz60s/pub?output=csv";
    trivia.loadGoogleSheet(googleSheetLink).then(displayWelcome); 
  }
  
function displayWelcome() {
    $(".screen").hide();
    $("#welcome-screen").show();
 }
  
function displayQuestion() {
    $(".screen").hide();
    $("#question-screen").show();
    $("#correctAnswer").removeClass("highlight");
    $("#feedback").hide();
    trivia.insertQuestionInfo();
    trivia.shuffleAnswers();
 }
  
function displayThankyou() {
    $(".screen").hide();
    $("#thankyou-screen").show();
    $("#game-results").html(`You got ${trivia.totalCorrect} of ${trivia.totalAnswered} correct.`);
 }
  
function onClickedAnswer(isCorrect) {
    if (isCorrect) $("#feedback").html(`Way to go!`).show();
    else $("#feedback").html(`Better luck next time.`).show();
    $("#correctAnswer").addClass("highlight"); //highlight right answer
    setTimeout(trivia.gotoNextQuestion, 3000); //wait 3 secs...next question
    if (isCorrect) {
      $("#feedback").html(`Way to go!`).show();
      soundCorrect.play();
    }
    else {
      $("#feedback").html(`Better luck next time.`).show();
      soundIncorrect.play();
    }
  }
  
  
function onClickedStart() {
    displayQuestion();
 }
  