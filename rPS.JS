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

function round() {
	let playerSelection = prompt("Rock, Paper, Scissors, SHOOT!");
	playerSelection = playerSelection.toLowerCase();
	let computer = computerPlay();
	console.log(computer)
	//tie game condition
	if (playerSelection == computer) {
		return "Tie!";
		console.log("Tie!");
	}
	//else if player chooses rock
	else if (playerSelection == "rock") {
		//Rock vs. Paper
		if (computer == "paper") {
			return "Paper covers Rock! You lose!";
			console.log("Paper covers Rock! You lose!");
		}
		//Rock vs. Scissors
		else if (computer == "scissors") {
			return "Rock breaks Scissors! You win!";
			console.log("Rock breaks Scissors! You win!");
		}
	}
	//else if player chooses paper
	else if (playerSelection == "paper") {
		//paper vs rock
		if (computer == "rock") {
			return "Paper covers Rock! You win!"
			console.log("Paper covers Rock! You win!")
		}
		//paper vs scissors
		else if (computer == "scissors") {
			return "Scissors cut Paper! You lose!"
			console.log("Scissors cut Paper! You lose!")
		}
	}

	//else- player chooses scissors
	else {
		if (computer == "rock") {
			return "Rock breaks Scissors! You lose!"
			console.log("Rock braks Scissors! You lose!")
		}
		else if (computer == "paper") {
			return "Scissors cut Paper! You win!"
			console.log("Scissors cut Paper! You win!")
		}
	}
}