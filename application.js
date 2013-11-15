$(function () {
   
   var answer = Math.floor(101*Math.random());
   console.log("Answer is " + answer);
   var wrong = true;
   var prev_guess, msg;
   var $player_guess = $('#guess');
   var $previousGuesses = $('div .PreviousGuesses');

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
            }else if(Math.abs(answer-guess) == Math.abs(answer - prev_guess)) {
                msg = "You're neither warmer nor colder ;-)";
            } else {
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
   $('form').submit(function(){
        event.preventDefault;
        console.log($player_guess.val());
        $('#output').html(game(Number($player_guess.val())));
        // console.log(Number($('#guess').val()));
        // $('#guess').val("");
        $('div .PreviousGuesses').append($player_guess.val()+' ');
        
        

        return false;
        // if(event.preventDefault) event.preventDefault();
   });
   $('#newGame').on('click',function(){
        event.preventDefault;
        $('#output').html('Ready to Play?');
        answer = Math.floor(101*Math.random());
        prev_guess = null;
        $previousGuesses.text('');
   });

});