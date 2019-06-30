const PokemonAPI = {
	/**
	* Gets information about 1000 Pokemon cards by selecting a random page from the pokemon API full of 1000 cards
	*/
	getPokemonList: async () => {
		// The API has 10 pages. Choose a random page
		let randomPage = randomBetween(1, 10)

		// Get the information from the API
		let file = await fetch('https://api.pokemontcg.io/v1/cards?supertype=Pokemon&page=' + randomPage + '&pagesize=1000')
		let pokemonList = await file.json()

		// the cards are in the cards property
		return pokemonList.cards
	},

	/**
	* Gets a random selection of Pokemon cards
	* @param {Number} number the number of cards to get
	*/
	getRandomPokemonCards: async (number) => {
		// Get cards using the API
		let pokemonList = await PokemonAPI.getPokemonList()

		// Create a list
		let pokemonCards = []

		// Create a loop to get "number" cards
		let counter = 0
		while (counter < number) {
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
PokemonAPI.getRandomPokemonCards(10)

export default PokemonAPI
