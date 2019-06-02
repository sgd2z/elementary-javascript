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

	/**
	 * Show the image of this card in the div.
	 * @param {HTMLDivElement} div 
	 */
	show(div) {
		// create the image element
		let image = document.createElement('img')
		
		// set the src property to the back of the card
		image.src = 'https://github.com/sgd2z/elementary-javascript/blob/master/Chapter22/images/pokemon_card_back.jpg?raw=true'

		// put the image element in the div
		div.appendChild(image)

		const showImage = () => {
			image.removeEventListener('click', showImage)
			image.src = this.image
		}

		// add click listener
		image.addEventListener('click', showImage)
	}
}

// create a new PokemonCard
let charizard = new PokemonCard('charizard', 180, 'https://images.pokemontcg.io/det1/5_hires.png', {})

// create the div to show the image in
let cardDiv = document.createElement('div')
document.body.appendChild(cardDiv)

// call the show method to put the image in the div
charizard.show(cardDiv)