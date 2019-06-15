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

export default PokemonCard