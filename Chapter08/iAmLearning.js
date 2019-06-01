let counter = 1
while (counter < 11) {
	document.write(5 * counter)
	document.write('<br>')
	counter = counter + 1
}

counter = 1
while (counter < 11) {
	document.write(7 * counter)
	document.write('<br>')
	counter = counter + 1
}

counter = 1
while (counter < 11) {
	document.write(9 * counter)
	document.write('<br>')
	counter = counter + 1
}

counter = 1
while (counter < 11) {
	document.write(14 * counter)
	document.write('<br>')
	counter = counter + 1
}

counter = 1
while (counter < 11) {
	document.write(23 * counter)
	document.write('<br>')
	counter = counter + 1
}

const tableMaker = (number) => {
	let counter = 1
	while (counter < 11) {
		document.write(number * counter)
		document.write('<br>')
		counter = counter + 1
	}
}

tableMaker(5)
tableMaker(7)
tableMaker(9)
tableMaker(14)
tableMaker(23)

const tableMaker2 = (number, upto) => {
	counter = 1
	while (counter < upto + 1) { // can you figure out why up to + 1??
		document.write(number * counter)
		document.write('<br>')
		counter = counter + 1
	}
}
tableMaker2(5, 10) // 5 times tables up to 5 * 10 
tableMaker2(7, 15) // 7 times tables up to 7 * 15
tableMaker2(9, 20) // 9 times tables up to 9 * 20
tableMaker2(14, 10) // 14 times tables up to 14 * 10
tableMaker2(23, 20) // 23 times tables up to 23 * 20

const tableMaker3 = (number, upto) => {
	counter = 1
	let table = []
	while (counter < upto + 1) {
		table.push[number * counter]
		counter = counter + 1
	}
	return table
}

let fiveTimesTables = tableMaker3(5, 10)

const numberExistsInList = (number, list) => {
	let position = 0
	while (position < list.length) {
		let item = list[position]
		if (item === number) {
			return true
		}
		position = position + 1
	}
	return false
}

const numberExistsInList2 = (number, list) => {
	let position = 0
	let found = false
	while (position < list.length) {
		let item = list[position]
		if (item === number) {
			found = true
			break // this exits the loop immediately
		}
		position = position + 1
	}
	return found
}

let list = [1, 8, 9, 5, 15, 3, 4, 6, 7, 8, 9, 0]
let numberExists1 = numberExistsInList(5, list) // true
let numberExists2 = numberExistsInList(2, list) // false

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