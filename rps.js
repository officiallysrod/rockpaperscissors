//initialize variables.
var choices = [null, "rock", "paper", "scissors"];
var letters = [null, "R", "P", "S"];
var user_choice = null;
var computer_choice = null;
var user_score = 0;
var computer_score = 0;

//sets user_choice variable and affects background colors based on user click.
function setUserChoice(userChoice, not1, not2) {
  if(computer_choice == null || user_choice == null) {  
    user_choice = userChoice;
    not1 = not1;
    not2 = not2;
    document.getElementById(user_choice).style.backgroundColor = "#20A9BA";
    document.getElementById(not1).style.backgroundColor = "#DEDEDD";
    document.getElementById(not2).style.backgroundColor = "#DEDEDD";
  }
}

//called when user clicks on the "?".
//this function calls the setComputerChoice() and compare() functions.
function playGame() {
  setComputerChoice();
  compare();
}

//called by the playGame() function. sets a random value for the computer_choice variable 
//and changes background color of the element to red.
function setComputerChoice() {
  if(user_choice != null && computer_choice == null) {
    rand_choice = Math.floor((Math.random() * 3) + 1);
    computer_choice = choices[rand_choice];
    letter = letters[rand_choice];
    document.getElementById("computerchoice").style.backgroundColor = "red";
    document.getElementById("letter").innerHTML = letter;
  }
}

//called by the playGame() function.  compares the user_choice and the 
//computer_choice variables to declare a winner.  also calls the buttonStyle() function.
function compare() {
  if(user_choice != null) {  
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

//called by the compare() function.  changes background color of button from 
//white to red to make the button visible on screen.  also adds the text "PLAY AGAIN" to the button.
function buttonStyle() {
  document.getElementById("playagain").style.backgroundColor = "red";
  document.getElementById("playagain").innerHTML = "PLAY AGAIN";
}

//this function is called when the user clicks on "play again" button.
//this function resets the styles set by js during gameplay.
//need to find a better way to globally reset styles.
function playAgain() {
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