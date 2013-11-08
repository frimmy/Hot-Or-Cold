$(function () {
   var answer = Math.floor(101*Math.random());
   var wrong = true;
   var guess, prev_guess;
   
   var game = function(){

        while(wrong){
            guess = Number(prompt("Guess a number from 1 to 100.","1..10...100"));

            if (guess==answer) {
                alert("Congrats! You win.");
                wrong=false;

            } else if(prev_guess!= null) {
                
                if (Math.abs(answer-guess) < Math.abs(answer - prev_guess)) {
                    alert("You're getting warmer!");
                }else {
                    alert("You're getting colder!");
                }
            }
            
            else if(guess>answer) {
                alert("Too high!");
            } else {
                alert("Too low!");
            }

            prev_guess = guess;
        }
    };
   game();
});