$(function () {
   var answer = Math.floor(101*Math.random());
   var wrong = true;
   var guess, next_guess;
   while(wrong) {
    guess = Number(prompt("Guess a number from 1 to 100.","1..10...100"));

    if (guess==answer) {
        alert("Congrats! You win.");
        wrong=false;
    } else if(guess>answer) {
        alert("Too high!");
    } else {
        alert("Too low!");
    }
   }
});