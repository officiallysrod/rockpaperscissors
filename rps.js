var choices = [null, "rock", "paper", "scissors"];
var user_choice = null;
var computer_choice = null;

function playGame(userChoice) {
  user_choice = userChoice;
  rand_choice = Math.floor((Math.random() * 3) + 1);
  computer_choice = choices[rand_choice];
  compare();
}

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
