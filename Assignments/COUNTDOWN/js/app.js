function convertToDaysLeft(milliseconds) {
    return Math.floor(milliseconds / (1000 * 60 * 60 * 24));
  }

  function convertToHoursLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
  }

  function convertToMinutesLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60 * 60)) / (1000 * 60)
    );
  }

  function convertToSecondsLeft(milliseconds) {
    return Math.floor(
      (milliseconds % (1000 * 60)) / 1000
    );
  }

  function formatCountdownText(days, hours, minutes, seconds) {
    return `${days}d ${hours}h ${minutes}m ${seconds}s left`;
  }

 //Initialize the deadeline variable with the date you want to count down to 
 let deadline = new Date("December 15, 2022 12:00:00");
   
 //Store the countdown element in a variable and clear its text content
 let countdown = document.getElementById("countdown");
countdown.innerHTML=" ";

/*
The setCountdown function obtains the current date/time, calculate the time left between then and the deadline*/
function setCountdown() {
    //Without any inputs, the Date() constructor returns the current datetime
    let now = new Date();

    // # of miliseconds between deadline and now
    let timeLeft = deadline.getTime() - now.getTime();
    // Use the conversion methods from above tomcalculate each time unit
    let daysLeft = convertToDaysLeft(timeLeft);
    let hoursLeft = convertToHoursLeft(timeLeft);
    let minutesLeft = convertToMinutesLeft(timeLeft);
    let secondsLeft = convertToSecondsLeft(timeLeft);

    // Use the formatting function to display the units calculated above 
    countdown.innerHTML = formatCountdownText(daysLeft, hoursLeft, minutesLeft, secondsLeft);
}

// call the setCountdown method every second (i.e. every 1000 milliseconds )
setInterval(setCountdown, 1000);

