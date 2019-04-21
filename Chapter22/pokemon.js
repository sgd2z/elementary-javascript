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
		let data = await file.json()
		let cardList = data.cards; // The results are in the cards property

		// loop backwards because we might be removing things.
		let position = cardList.length - 1
		while (position > -1) {
			let card = cardList[position]
			let attacksPosition = card.attacks.length - 1
			while (attacksPosition > -1) {
				let attack = card.attacks[attacksPosition]
				let damage = parseInt(attack.damage)
				if (isNaN(damage)) {
					card.attacks.splice(attacksPosition, 1)
				}
				attacksPosition = attacksPosition - 1
			}
			// If there are no attacks, remove the card from the cardList
			if (card.attacks.length == 0) {
				cardList.splice(position, 1)
			}
			position = position - 1
		}
		return cardList 
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
