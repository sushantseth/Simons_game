var buttonColorArray = ["red", "green", "blue", "yellow"];
var level = 0;
var buttonPressed = [];
var randomSequence = [];


$("html").on("keydown", function (e) {
  if (level === 0) {

    startGame(e);

  }else

    return;
});


//eventlistener to perform action on a click

$("button").on("click", function () {

  if(level > 0){
      console.log(this.id);
          buttonPressed.push(this.id);
          pressedB();
}

});


//function to accept clicks and check it with random sequences.
function pressedB() {

  for (var i = 0; i <= buttonPressed.length -1; i++) {

    if (buttonPressed[i] === randomSequence[i]) {
        continue;
    }
    else {
        var a  = gameEnd();
        //find a way to break the for loop also

    }
  }

   if(!a && buttonPressed.length === randomSequence.length){
       nextSequence();
   }

}

//function to start the game with the use of only enter.
function startGame(e) {
  if (e.which === 13) {

    var randomNumberGenerator = Math.floor(Math.random() * 4);
    var audio = new Audio("sounds/" + buttonColorArray[randomNumberGenerator] + ".mp3");
    audio.play();
    $("#" + buttonColorArray[randomNumberGenerator]).addClass("pressed");
    setTimeout(function () {
      $("#" + buttonColorArray[randomNumberGenerator]).removeClass("pressed");
    }, 100);
    level = level + 1;
    buttonPressed = [];
    $("h1").text("Level " + level);
    randomSequence.push(buttonColorArray[randomNumberGenerator]);
  } else {
    return false;
  }
}


//function which will produce another pop up of  a button randomly
function nextSequence() {

  var randomNumberGenerator = Math.floor(Math.random() * 4);
  var audio = new Audio("sounds/" + buttonColorArray[randomNumberGenerator] + ".mp3");
  audio.play();
  $("#" + buttonColorArray[randomNumberGenerator]).addClass("pressed");
  setTimeout(function () {
    $("#" + buttonColorArray[randomNumberGenerator]).removeClass("pressed");
  }, 100);
  level = level + 1;
  buttonPressed = [];
  $("h1").text("Level " + level);
  randomSequence.push(buttonColorArray[randomNumberGenerator]);
}


// function which will lead to end of game
function gameEnd() {

  var audio = new Audio("sounds/wrong.mp3");
  audio.play();
  $("body").addClass("game-over");
  setTimeout(function () {
    $("body").removeClass("game-over");
  }, 100);
  $("h1").text("Game Over. Press enter to restart");

  level = 0;
  buttonPressed.pop();
  randomSequence.pop();
  

  return true;

  }
