// create a div to show the countdown
let countdownDiv = document.createElement('div')
document.body.appendChild(countdownDiv)

// Put the number of seconds to countdown in the div
let numberOfSecondsToCountdown = 10
countdownDiv.innerHTML = numberOfSecondsToCountdown

const countDown = () => {
	// decrease the countdown time
	numberOfSecondsToCountdown = numberOfSecondsToCountdown - 1

	// update the div with the number of seconds remaining
	countdownDiv.innerHTML = numberOfSecondsToCountdown

	// Stop counting when we reach zero
	if (numberOfSecondsToCountdown !== 0) {
		setTimeout(countDown, 1000)
	}
}

// Call the countdown function after a second
setTimeout(countDown, 1000)
