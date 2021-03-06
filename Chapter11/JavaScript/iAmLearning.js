let myDiv = document.createElement('div')
myDiv.innerHTML = "Enter Something in this Text Box: "
let myTextBox = document.createElement('input') // Create an input element
myTextBox.type = 'text' // Make the input element a text box
myDiv.appendChild(myTextBox) // put the textbox in the div
let myButton = document.createElement('button') // create a button
myButton.innerHTML = 'Click Me!' // put some text on the button
myDiv.appendChild(myButton) // put the button in the div
document.body.appendChild(myDiv)

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
		
		// set the src property to this.image
		image.src = this.image

		// put the image element in the div
		div.appendChild(image)
	}
}

// create a new PokemonCard
let charizard = new PokemonCard('charizard', 180, 'https://github.com/sgd2z/elementary-javascript/blob/master/Chapter22/images/pokemon_card_back.jpg?raw=true', {})

// create the div to show the image in
let cardDiv = document.createElement('div')
document.body.appendChild(cardDiv)

// call the show method to put the image in the div
charizard.show(cardDiv)