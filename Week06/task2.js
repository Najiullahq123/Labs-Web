document.addEventListener("DOMContentLoaded", function() {
    var randomNumber = Math.floor(Math.random() * 100) + 1;
    var guessInput = document.getElementById("guessInput");
    var guessButton = document.getElementById("guessButton");
    var message = document.getElementById("message");
  
    guessButton.addEventListener("click", function() {
      var guess = parseInt(guessInput.value);
  
      if (isNaN(guess) || guess < 1 || guess > 100) {
        setMessage("Please enter a valid number between 1 and 100.", "red");
      } else {
        if (guess === randomNumber) {
          setMessage("Congratulations! You guessed the correct number.", "green");
          guessInput.disabled = true;
          guessButton.disabled = true;
        } else {
          var hint = guess > randomNumber ? "Too high! Try again." : "Too low! Try again.";
          setMessage(hint, "red");
        }
      }
    });
  
    function setMessage(msg, color) {
      message.textContent = msg;
      message.style.color = color;
    }
  });
  