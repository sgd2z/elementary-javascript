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

class PokemonCard {
	/**
	 * A pokemon card must be created with the following properties:
	 * @param {String} name 
	 * @param {Number} HP 
	 * @param {String} image 
	 * @param {Array} attacks 
	 */
	constructor(name, HP, image, attacks) {
		this.name = name
		this.HP = HP
		this.image = image
		this.attacks = attacks
	}

	/**
	 * Select one of the attacks and return it
	 */
	attack() {

	}
}

class Player {
	/**
	 * A player has the following properties
	 * @param {String} name 
	 * @param {Array} cards 
	 */
	constructor(name, cards) {
		this.name = name
		this.cards = cards
		this.score = 0
	}

	/**
	 * The player should now take a turn
	 */
	play() {

	}
}