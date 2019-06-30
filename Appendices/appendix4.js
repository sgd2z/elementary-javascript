/**
* Generates a random number between number1 and number2
* @param {Number} number1 an integer
* @param {Number} number2 an integer
*/
const randomBetween = (number1, number2) => {
	//calculate the range both numbers inclusive
	let range = number2 - number1 + 1
	// generate a random number in the range and shift it by number 1
	let randomNumber = Math.floor(Math.random() * range) + number1
	return randomNumber
}
