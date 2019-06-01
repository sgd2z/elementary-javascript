let colorList = ['red', 'blue', 'purple']
let position = 0
while (position < colorList.length) {
	let div = document.createElement('div')
	div.innerHTML = 'Some Text'
	div.classList.add("big", colorList[position])
	document.body.appendChild(div)
	position = position + 1
}

position = 0
while (position < colorList.length) {
	let div = document.createElement('div')
	div.innerHTML = 'Some Text'
	div.classList.add("small", colorList[position])
	document.body.appendChild(div)
	position = position + 1
}
