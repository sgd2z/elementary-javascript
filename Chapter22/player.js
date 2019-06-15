import PokemonCard from './pokemonCard.js'

class Player {
    /**
     * A player has the following properties
     * @param {String} name 
     * @param {Array<PokemonCard>} cards 
     */
    constructor(name, cards, div, game) {
        this.name = name
        this.cards = cards
        this.score = 0
        this.turn = false
        this.game = game
		this.showcards(div)
    }

    /**
     * The player should now take a turn
     */
    play() {
        this.turn = true
    }

    /**
     * End the player's turn
     * @param {PokemonCard} card 
     */
    endTurn(card) {
        this.turn = false
        this.game.endTurn(card)
    }
    
    /**
     * remove the card at index from this.cards
     * @param {Number} index 
     */
    removeCard(index) {
        this.cards.splice(index, 1)
	}
	
	/**
	 * Show all the cards in the div
	 * @param {HTMLDivElement} div 
	 */
	showcards(div) {
		let position = 0
		while(position < this.cards.length) {
			let card = this.cards[position]
            card.show(div, this)
            position = position + 1
		}
	}
}

export default Player