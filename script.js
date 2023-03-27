let count = 0;

// Increments count and updates the display
function incrementCount() {
  count++;
  document.getElementById("click-count").innerHTML = count;
}

// Set the initial time left to 5 seconds
let timeLeft = 5;

// Set up a timer that counts down every second
let countdownTimer = setInterval(function() {
  // Decrement the time left
  timeLeft--;

  // Update the display with the new time left
  document.getElementById("countdown-timer").innerHTML = timeLeft;

  // If the time left reaches 0, stop the timer and disable the button
  if (timeLeft == 0) {
    clearInterval(countdownTimer);
    document.getElementById("click-button").disabled = true;
  }
}, 1000); // executed every 1000 milliseconds (i.e. every 1 second)
