import PokemonCard from './pokemonCard.js'

class Player {
    /**
     * A player has the following properties
     * @param {String} name 
     * @param {Array<PokemonCard>} cards 
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

    /**
     * remove the card at index from this.cards
     * @param {Number} index 
     */
	removeCard(index) {
		this.cards.splice(index, 1)
	}

}

export default Player