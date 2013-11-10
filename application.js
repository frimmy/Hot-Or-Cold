$(function () {
   
   var answer = Math.floor(101*Math.random());
   console.log("Answer is " + answer);
   var wrong = true;
   var prev_guess, msg, player_guess;
      
   console.log(player_guess);

   var game = function(guess){

        if (guess==answer) {
            msg = "Congrats! You win.";
            wrong=false;

        } else if (guess == prev_guess) {
            msg = "You just guessed that number..";
        }
        else if(prev_guess!= null) {
            
            if (Math.abs(answer-guess) < Math.abs(answer - prev_guess)) {
                msg = "You're getting warmer!";
            }else {
                msg = "You're getting colder!";
            }
        }

        else if(guess>answer) {
            msg = "Too high!";
        } else {
            msg = "Too low!";
        }

        prev_guess = guess;
        return msg;
    };
   // game();
   /*create event on hitting enter or submitting a guess*/
    $('#enterGuess').click(function(){
        // alert('handler for .click() called.');
        player_guess =  Number($('#guess').val());
        $('#output').html(game(player_guess));
        console.log(player_guess);
        return false;
    });

});