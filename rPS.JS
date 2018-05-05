//randomizer to let the computer pick rock, paper, or scissors
function computerPlay() {
	var computerSelection;
	let int = Math.ceil(Math.random() * 3);
	if (int == 1) {
		computerSelection = "rock";
	}
	else if (int == 2) {
		computerSelection = "paper";
	}
	else {
		computerSelection = "scissors"
	}
	return computerSelection
	console.log(computerSelection)
}

//plays one round of rock, paper, scissors
function round() {
	//prompt player to choose:
	let playerSelection = prompt("Rock, Paper, Scissors, SHOOT!");
	//avoid case sensitivity issues:
	playerSelection = playerSelection.toLowerCase();
	let computer = computerPlay();
	//what do if user's response is something else:
	if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
		playerSelection = prompt("Try again- Rock, Paper, Scissors, SHOOT!");
		playerSelection = playerSelection.toLowerCase();
	}
	console.log("You chose " + playerSelection)
	console.log("Computer chooses " + computer);
	//tie game condition
	if (playerSelection == computer) {
		alert("Tie! Try again!");
	}

	//results will return either "computer" or "player" (whoever wins the round) so that we can use that value to increment scores in the game function
	//else if player chooses rock
	else if (playerSelection == "rock") {
		//Rock vs. Paper
		if (computer == "paper") {
			return "computer";
			console.log("Paper covers Rock! You lose!");
		}
		//Rock vs. Scissors
		else if (computer == "scissors") {
			return "player";
			console.log("Rock breaks Scissors! You win!");
		}
	}
	//else if player chooses paper
	else if (playerSelection == "paper") {
		//paper vs rock
		if (computer == "rock") {
			return "player"
			console.log("Paper covers Rock! You win!")
		}
		//paper vs scissors
		else if (computer == "scissors") {
			return "computer"
			console.log("Scissors cut Paper! You lose!")
		}
	}

	//else- player chooses scissors
	else {
		//Scissors vs Rock
		if (computer == "rock") {
			return "computer"
			console.log("Rock braks Scissors! You lose!")
		}
		//Scissors vs paper
		else if (computer == "paper") {
			return "player"
			console.log("Scissors cut Paper! You win!")
		}
	}
}
//function to iterate through round function until either player or computer wins 3 rounds
function game() {
	//initialize scores
	let playerScore = 0;
	let computerScore = 0;
	//loop until someone wins 3 rounds
	while (playerScore < 3 && computerScore < 3) {
		//score variable to run the round function and store the return value
		let score = round();
		//if player wins the round, round() should return "player"
		if (score == "player") {
			//increment player's score by one
			playerScore++;
			//keeps the player updated on the score after each round
			console.log("You win this round! Score: you: " + playerScore + " computer: " + computerScore)
		}
		//if the computer wins the round, round() should return "computer".  Used specific else if because when I tried a simple else, computer was credited for tie games.
		else if (score == "computer") {
			//increment computer's score by one
			computerScore++;
			//update the player with the score after each round
			console.log("You lose this round! Score: you: " + playerScore + " computer: " + computerScore)
		}
	}
	//if the player wins 3 rounds, they win and the game ends
	if (playerScore == 3) {
		console.log("You win best of 3!")
	}
	else {
		//no need for specific condition here- only other possibility after exiting the while loop is a computer win
		console.log("You lost 3 rounds! Game over!")
	}
}