const tableMaker = (number, upto) => {
	counter = 1
	while (counter < upto + 1) {
		document.write(number * counter)
		document.write('<br>')
		counter = counter + 1
	}
}

let n = 1
while (n < 11) {
	tableMaker(n, 20);
}
