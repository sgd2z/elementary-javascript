class Animal {
	constructor(name, type, color, weight) {
		this.name = name
		this.type = type
		this.color = color
		this.weight = weight
	}

	speak(whatToSay) {
		let div = document.createElement('div')
		div.innerHTML = this.name + ' said ' + whatToSay
		document.body.appendChild(div)
	}
	move(movementToMake) {
		let div = document.createElement('div')
		div.innerHTML = this.name + ' ' + movementToMake
		document.body.appendChild(div)
	}
}

export default Animal
