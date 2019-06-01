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

		let position = 0
		while (position < cardList.length) {
			let card = cardList[position]
			let attacksPosition = 0

			// If the card has attacks then remove attacks without damage
			if (card.attacks !== undefined) {
				while (attacksPosition < card.attacks.length) {
					let attack = card.attacks[attacksPosition]
					let damage = parseInt(attack.damage)
					// If damage is not a number, remove it
					if (isNaN(damage)) {
						card.attacks.splice(attacksPosition, 1)
					} else {
						// Only move forward if we are not removing something
						attacksPosition = attacksPosition + 1
					}
				}
			}

			// If there are no attacks, remove the card from the cardList
			if (card.attacks === undefined || card.attacks.length == 0) {
				cardList.splice(position, 1)
			} else {
				// Only move forward if we are not removing something
				position = position + 1
			}
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
