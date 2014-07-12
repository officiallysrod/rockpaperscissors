var choices = [null, "rock", "paper", "scissors"];
var letters = [null, "R", "P", "S"];
var user_choice = null;
var computer_choice = null;
var user_score = 0;
var computer_score = 0;

function setUserChoice(userChoice, not1, not2) {
  user_choice = userChoice;
  not1 = not1;
  not2 = not2;
  document.getElementById(user_choice).style.backgroundColor = "#20A9BA";
  document.getElementById(not1).style.backgroundColor = "#C2BDC0";
  document.getElementById(not2).style.backgroundColor = "#C2BDC0";
}

function playGame () {
  setComputerChoice();
  compare();
  alert("User score: " + user_score + ", Computer score: " + computer_score);
}

function setComputerChoice() {
  if(user_choice != null) {
    rand_choice = Math.floor((Math.random() * 3) + 1);
    computer_choice = choices[rand_choice];
    letter = letters[rand_choice];
    document.getElementById("computerchoice").style.backgroundColor = "red";
    document.getElementById("letter").innerHTML = letter;
  }
}

function compare() {
  if (user_choice != null) {  
    if(user_choice != computer_choice) {
      if((user_choice == "rock" && computer_choice == "scissors") || (user_choice == "paper" && computer_choice == "rock") || (user_choice == "scissors" && computer_choice == "paper")) {
        document.getElementById("results").innerHTML = "Winner, winner. Chicken dinner.";
        user_score++;
      }
      else {
        document.getElementById("results").innerHTML = "Whammy! You lose.";
        computer_score++;
      }
    }
    else {
      document.getElementById("results").innerHTML = "It's a tie.  How unsatisfying.";
    }
    buttonStyle();
  }
}

function buttonStyle() {
  document.getElementById("playagain").style.backgroundColor = "red";
  document.getElementById("playagain").innerHTML = "PLAY AGAIN";
}

function playAgain() {
  //style resets. find a better way to globally reset styles to defaults.
  if(user_choice != null && computer_choice != null) {
    document.getElementById("rock").style.backgroundColor = "red";
    document.getElementById("paper").style.backgroundColor = "red";
    document.getElementById("scissors").style.backgroundColor = "red";
    document.getElementById("computerchoice").style.backgroundColor = "#20A9BA";
    document.getElementById("letter").innerHTML = "?";
    document.getElementById("results").innerHTML = "";
    document.getElementById("playagain").style.backgroundColor = "white";
    document.getElementById("playagain").innerHTML = "";
    user_choice = null;
    computer_choice = null;
  }
}