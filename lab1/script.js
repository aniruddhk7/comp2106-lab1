// GETTING INPUT FROM USER
var userSelection = prompt("What do you want to choose between ROCK, PAPER or SCISSORS?");

if (!userSelection) {
    // UNDEFINED OPTION
    document.write("<h4 style='color:red'>You must choose between ROCK, PAPER or SCISSORS.</h4>");
}

else {
    // SHOW USER OPTION
    document.write("<p>Your Option:" + " " + userSelection + "</p>");
}

// USING MATH.RANDOM FUNCTION
var computerSelection = Math.random();
if (computerSelection < 0.34) {
    computerSelection = "PAPER";
}

else if (computerSelection <= 0.67) {
    computerSelection = "SCISSORS";
}

else {
    computerSelection = "ROCK";
}

// COMPUTER SELECTION SHOWN
document.write("<h4> Computer Selection:" + " " + computerSelection + "</h4>");

// EXECUTE EQUATE FUNCTION
var outcomes = equate(userSelection, computerSelection);

 // SHOW OUTCOMES
 document.write("<br><br><center><h3 style='color:Red'>OUTCOME: &nbsp;&nbsp;" + outcomes+"</center></h3>");

// EQUATE USER SELECTION & computer SELECTION
function equate (firstOption, secondOption) {
    if (firstOption === secondOption) {
        return "TIE BREAK! Please try again.";
    }
    if (firstOption === "rock" || firstOption === "ROCK" || firstOption === "Rock") {
        if (secondOption === "SCISSORS") {

            return "Congratulations, You won the game!";
        }
        else {

            return "Better luck next time, Computer won the game this time.";
        }
    }
    if (firstOption === "paper" || firstOption === "PAPER" || firstOption === "Paper") {
        if (secondOption === "ROCK") {

            return "Congratulations, You won the game!";
        }
        else {

            return "Better luck next time, Computer won the game this time.";
        }
    }
    if (firstOption === "scissors" || firstOption === "SCISSORS" || firstOption === "Scissors") {
        if (secondOption === "ROCK") {

            return "Better luck next time, Computer won the game this time.";
        }
        else {

            return "Congratulations, You won the game!";
        }
    }
};
