$(function () {
   
   var answer = Math.floor(101*Math.random());
   console.log("Answer is " + answer);
   var wrong = true;
   var prevGuess, msg;
   var $playerGuess = $('#guess');
   var $previousGuesses = $('div .PreviousGuesses');

   $('form').submit(function(){
        
        $('#output').html(
            game(Number($playerGuess.val())
        )
    );
        $previousGuesses.append($playerGuess.val()+' ');
        return false;
   });

   $('#newGame').on('click',newGame);

   function game(guess){

        if (guess==answer) {
            msg = "Congrats! You win.";
            wrong=false;

        } else if (guess == prevGuess) {
            msg = "You just guessed that number..";
        } else if (prevGuess!= null) {
            
            if (Math.abs(answer-guess) < Math.abs(answer - prevGuess)) {
                msg = "You're getting warmer!";
            } else if (Math.abs(answer-guess) == Math.abs(answer - prevGuess)) {
                msg = "You're neither warmer nor colder ;-)";
            } else {
                msg = "You're getting colder!";
            }
        }

        else if (guess>answer) {
            msg = "Too high!";
        } else {
            msg = "Too low!";
        }

        prevGuess = guess;
        return msg;
    }
   // game();
   
   function newGame(event){
        event.preventDefault;
        $playerGuess.val('');     
        $('#output').html('Ready to Play?');
        answer = Math.floor(101*Math.random());
        prevGuess = null;
        $previousGuesses.text('');
   }
   /*create event on hitting enter or submitting a guess*/
   

});