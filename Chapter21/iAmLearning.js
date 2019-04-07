// create a div to show the countdown
let countdownDiv = document.createElement('div')
document.body.appendChild(countdownDiv)

// Put the number of seconds to countdown in the div
let numberOfSecondsToCountdown = 10
countdownDiv.innerHTML = numberOfSecondsToCountdown

// define a variable for setInterval.
// We need to define it here so that we can use this in the countDown function
let intervalId

const countDown = () => {
   // decrease the countdown time
   numberOfSecondsToCountdown = numberOfSecondsToCountdown - 1

   // update the div with the number of seconds remaining
   countdownDiv.innerHTML = numberOfSecondsToCountdown

   // Stop counting when we reach zero
   if (numberOfSecondsToCountdown === 0) {
      clearInterval(intervalId)
   }
}

// Call the countdown function every second
intervalId = setInterval(countDown, 1000)