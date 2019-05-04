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

/**
 * Function to wait a given number of seconds
 * @param {Number} secondsToWait number of seconds to wait
 */
let numberOfSeconds = (secondsToWait) => {
	/**
	 * @param {Function} keepPromise When this function is called, Javascript know that you finished doing what you promised
	 */
	let promiser = (keepPromise) => {
		/**
		 * This function is the one that is called after waiting the number of seconds required
		 */
		let functionToCallAfterSeconds = () => {
			// We are done waiting so we finished doing what we promised.
			keepPromise()
		}
		// Wait for secondsToWait and call functionToCallAfterSeconds
		setTimeout(functionToCallAfterSeconds, secondsToWait * 1000)
	}

	// Create a promise object and return it. This turns this function into an async function
	let promise = new Promise(promiser)
	return promise
}

let waitFor5Seconds = async () => {
	await numberOfSeconds(5)
	alert('waited 5 seconds')
}

waitFor5Seconds()