/**
 * Calculate the LCM - Least Common Multiple - of two numbers
 * @param {Number} number1
 * @param {Number} number2
 */
const LCM = (number1, number2) => {
	// Start at number1 and keep counting by number1 to get its multiples
	let start = number1
	// This loop goes on forever until we break or return
	while (true) {
		// Check if the number is also divisible by number2
		if (start % number2 == 0) {
			// The first multiple of number1 that is 
			// also a multiple of number2
			return start
		}
		// Skip count by number1
		start = start + number1
	}
}

class Fraction {
	/**
	 * A fraction has a numerator and a denominator
	 * @param {Number} numerator
	 * @param {Number} denominator
	 * @example
	 * let f1 = new Fraction(2, 3)
	 */
	constructor(numerator, denominator) {
	}

	/**
	 * This adds another fraction to this fraction and returns the result
	 * @param {Fraction} fraction
	 * @returns Fraction
	 *
	 * @example
	 * let f1 = new Fraction(2, 3)
	 * let f2 = new Fraction(3, 4)
	 * let f3 = f1.add(f2)
	*/
	add(fraction) {
		// calculate the LCM of the denominators.
		let lcm = LCM(this.denominator, fraction.denominator)

		// Find what the first denominator was multiplied by
		let firstMultiplier = lcm / this.denominator

		// Multiply the first numerator by that
		let firstNumerator = this.numerator * firstMultiplier

		// Find what the second denominator was multiplied by
		let secondMultiplier = lcm / fraction.denominator

		// Multiply the second numerator by that
		let secondNumerator = fraction.numerator * secondMultiplier

		// Add the new numerators
		let answerNumerator = firstNumerator + secondNumerator

		// Make the fraction for the answer and return it
		let answer = new Fraction(answerNumerator, lcm)
		return answer
	}
}

export default Fraction