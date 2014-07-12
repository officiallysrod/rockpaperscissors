var choices = [null, "rock", "paper", "scissors"];
var letters = [null, "R", "P", "S"];
var user_choice = null;
var computer_choice = null;



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
}

function setComputerChoice() {
  rand_choice = Math.floor((Math.random() * 3) + 1);
  computer_choice = choices[rand_choice];
  letter = letters[rand_choice];
  document.getElementById("computerchoice").style.backgroundColor = "red";
  document.getElementById("letter").innerHTML = letter;
}

function compare() {
  if(user_choice != computer_choice) {
    if(user_choice == "rock" && computer_choice == "paper") {
      document.getElementById("results").innerHTML = "Whammy! You lose.";
    }
    else if(user_choice == "rock" && computer_choice == "scissors") {
      document.getElementById("results").innerHTML = "Winner, winner. Chicken dinner.";
    }
    else if(user_choice == "paper" && computer_choice == "rock") {
      document.getElementById("results").innerHTML = "Winner, winner. Chicken dinner.";
    }
    else if(user_choice == "paper" && computer_choice == "scissors") {
      document.getElementById("results").innerHTML = "Whammy! You lose.";
    }
    else if(user_choice == "scissors" && computer_choice == "rock") {
      document.getElementById("results").innerHTML = "Whammy! You lose.";
    }
    else {
      document.getElementById("results").innerHTML = "Winner, winner. Chicken dinner.";
    }
  }
  else {
    document.getElementById("results").innerHTML = "It's a tie.  How unsatisfying.";
  }
  playAgain();
}

function playAgain() {
  document.getElementById("playagain").style.backgroundColor = "red";
  document.getElementById("playagain").innerHTML = "PLAY AGAIN";
  // document.getElementById("playanchor").innerHTML = "<a href='#''></a>";
}