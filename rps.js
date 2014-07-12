var choices = [null, "rock", "paper", "scissors"];
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

function setComputerChoice() {
  rand_choice = Math.floor((Math.random() * 3) + 1);
  computer_choice = choices[rand_choice];
  document.getElementById("computerchoice").style.backgroundColor = "red";
  compare();
}

// function playGame(userChoice) {
//   user_choice = userChoice;
//   rand_choice = Math.floor((Math.random() * 3) + 1);
//   computer_choice = choices[rand_choice];
//   compare();
// }

function compare() {
  if(user_choice != computer_choice) {
    if(user_choice == "rock" && computer_choice == "paper") {
      alert("You picked " + user_choice + " and the computer picked " + computer_choice + ". Computer wins!");
    }
    else if(user_choice == "rock" && computer_choice == "scissors") {
      alert("You picked " + user_choice + " and the computer picked " + computer_choice + ". You win!");
    }
    else if(user_choice == "paper" && computer_choice == "rock") {
      alert("You picked " + user_choice + " and the computer picked " + computer_choice + ". You win!");
    }
    else if(user_choice == "paper" && computer_choice == "scissors") {
      alert("You picked " + user_choice + " and the computer picked " + computer_choice + ". Computer wins!");
    }
    else if(user_choice == "scissors" && computer_choice == "rock") {
      alert("You picked " + user_choice + " and the computer picked " + computer_choice + ". Computer wins!");
    }
    else {
      alert("You picked " + user_choice + " and the computer picked " + computer_choice + ". You win!");
    }
  }
  else {
    alert("You picked " + user_choice + " and the computer picked " + computer_choice + ". It's a tie!");
  }
}
