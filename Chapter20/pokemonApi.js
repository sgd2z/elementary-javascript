import PokemonCard from './pokemonCard.js'

/**
* Generates a random number between number1 and number2
* @param {Number} number1 an integer
* @param {Number} number2 an integer
*/
const randomBetween = (number1, number2) => {
	//calculate the range both numbers inclusive
	let range = number2 - number1 + 1
	// generate a random number in the range and shift it by number 1
	let randomNumber = Math.floor(Math.random() * range) + number1
	return randomNumber
}

class PokemonAPI {
	/**
	 * Gets information about 1000 Pokemon cards by selecting a random page from the pokemon API full of 1000 cards
	 */
	async getPokemonList() {
		// The API has 10 pages. Choose a random page
		let randomPage = randomBetween(1, 10)

		// Get the information from the API
		let file = await fetch('https://api.pokemontcg.io/v1/cards?supertype=Pokemon&page=' + randomPage + '&pagesize=1000')
		let pokemonList = await file.json()

		// the cards are in the cards property
		return pokemonList.cards
	}

	/**
	 * Gets a random selection of Pokemon cards
	 * @param {Number} number the number of cards to get
	 */
	async getRandomPokemonCards(number) {
		// Get cards using the API
		let pokemonList = await this.getPokemonList()

		// Create a list
		let pokemonCards = []

		// Create a loop to get "number" cards
		let counter = 0
		while(counter < number) {
			// select a random card
			let randomIndex = randomBetween(0, pokemonList.length)
			let pokemon = pokemonList[randomIndex]

			// create a PokemonCard object from the card to use in the game
			let pokemonCard = new PokemonCard(pokemon.name, pokemon.hp, pokemon.imageUrl, pokemon.attacks)

			// add the card to our list
			pokemonCards.push(pokemonCard)

			counter = counter + 1
		}

		console.log(pokemonCards)
		return pokemonCards
	}

}

// Testing to see if this works
let pokemonAPI = new PokemonAPI();
pokemonAPI.getRandomPokemonCards(10);

export default PokemonAPI