var choices = [null, "rock", "paper", "scissors"]
var user_choice = null;
var computer_choice = null;

function userRock() {
  user_choice = "rock";
}

function userPaper() {
  user_choice = "paper";
}

function userScissors() {
  user_choice = "scissors";
}

function computerChoice() {
  rand_choice = Math.floor((Math.random() * 3) + 1);
  computer_choice = choices[rand_choice];
  alert(computer_choice);
}

function compare() {
  if user_choice != computer_choice {
    
  }
}