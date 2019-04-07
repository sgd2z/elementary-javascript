class Pokemon {
	async getPokemonList() {
		let file = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
		let pokemonList = await file.json()
		return pokemonList.results // The results are in the results property
	}

	/**
	 * Gets all cards for a specific pokemon
	 * @param {string} name
	 */
	async getAllCardsForPokemon(name) {
		let file = await fetch('https://api.pokemontcg.io/v1/cards?name=' + name)
		let cardList = await file.json()
		return cardList.cards // The results are in the cards property
	}

	/**
	  * Gets a random card for a specific pokemon
	  * @param {string} name
	  */
	async getRandomCardForPokemon(name) {
		let cardList = await this.getAllCardsForPokemon(name)
		let randomIndex = Math.floor(Math.random() * cardList.length)
		return cardList[randomIndex]
	}
}

export default Pokemon
