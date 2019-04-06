class Child {
	constructor(name, nerd) { //This is how you make class methods
		this.name = name
		this.nerd = nerd
	}

	play(sport) {
		document.write(this.name + ' played ' + sport)
		document.write('<br>')
	}
}

let boy1 = new Child('Ahan', true)
let girl1 = new Child('Emily', false)
boy1.play("tennis")
girl1.play("soccer")

let girl2 = new Child('Rowan', true)
girl2.play("with Ahan and Emily")
