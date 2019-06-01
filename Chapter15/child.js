class Child {
	constructor(name, nerd) {
		this.name = name
		this.nerd = nerd
	}

	play(sport) {
		let div = document.createElement('div')
		div.innerHTML = this.name + ' played ' + sport
		document.body.appendChild(div)
	}
}

export default Child
