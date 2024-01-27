// easy way to understand the set interval

// Now, think of an alarm clock that beeps every hour to remind you to take a break.

// // Simulating an hourly break reminder

// var intervalId = setInterval(function() {
//     console.log("Time for a break! Stretch and relax.");
// }, 3600000); // 3600000 milliseconds = 1 hour

// Here, the message "Time for a break! Stretch and relax." will be logged every hour until you stop it.

// code:
let count = 0;
let max = window.prompt("tell me the count #?");
max = Number(max);

const mytimer = setInterval(countmax, 300 0);          
function countmax() {
  count = count + 1;
  console.log(count);
  if (count >= max) {
    clearInterval(mytimer);
  }
}
