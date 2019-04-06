const tableMaker = (number) => {
	counter = 1
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
	while (counter < upto + 1) { // can you figure out why upto + 1??
		document.write(number * counter)
		document.write('<br>')
		counter = counter + 1
	}
}
tableMaker2(5, 10) // 5 times tables upto 5 * 10 
tableMaker2(7, 15) // 7 times tables upto 7 * 15
tableMaker2(9, 20) // 9 times tables upto 9 * 20
tableMaker2(14, 10) // 14 times tables upto 14 * 10
tableMaker2(23, 20) // 23 times tables upto 23 * 20
