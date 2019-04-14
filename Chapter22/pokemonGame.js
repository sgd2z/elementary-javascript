import Pokemon from './pokemon.js'
import Player from './player.js';

/**
* A class for the Pokemon game
*/
class PokemonGame {
	constructor() {
		this.cardsPerPlayer = 5
		this.pokemon = new Pokemon()
		
		// create the players
		this.player1 = new Player(this)
		this.player2 = new Player(this)

		//create the main div the game will be played in
		this.containerDiv = document.createElement("div")
		this.containerDiv.id = "containerDiv"
		document.body.appendChild(this.containerDiv)
	}
	/**
	 * Setup all things required for the game.
	 */
	async setup() {
		this.pokemonList = await this.pokemon.getPokemonList()
	}

	/**
	 * Start the game
	 */
	async start() {
		// randomly assign cards to player 1
		let count = 0
		while (count < this.cardsPerPlayer) {
			let randomIndex = Math.floor(Math.random() * this.pokemonList.length)
			let randomPokemon = this.pokemonList[randomIndex]
			let card = await this.pokemon.getRandomCardForPokemon(randomPokemon.name)
			if (card !== undefined) {
				this.player1.addCard(card)
				count = count + 1
			}
		}
		// show the cards for player 1
		let div1 = document.createElement("div")
		this.containerDiv.appendChild(div1)
		this.player1.showCards(div1)

		// randomly assign cards to player 2
		count = 0
		while (count < this.cardsPerPlayer) {
			let randomIndex = Math.floor(Math.random() * this.pokemonList.length)
			let pokemon = this.pokemonList[randomIndex]
			let card = await this.pokemon.getRandomCardForPokemon(pokemon.name)
			if (card !== undefined) {
				this.player2.addCard(card)
				count = count + 1
			}
		}
		// show the cards for player 2
		let div2 = document.createElement("div")
		this.containerDiv.appendChild(div2)
		this.player2.showCards(div2)

		this.turn = 1
		this.player1.takeTurn()
	}

	chooseRandomAttack(card) {
		let randomIndex = Math.floor(Math.random() * card.attacks.length)
		return card.attacks[randomIndex]
	}

	/**
	 * Make the next player take a turn.
	 * This function is called by the player class when it finishes taking a turn
	 */
	nextTurn(card) {
		// If player1's turn is over, make player 2 take a turn and vice versa 
		if (this.turn == 1) {
			this.turn = 2
			this.player2.takeTurn()
		} else {
			this.turn = 1
			this.player1.takeTurn()
		}
	}
}

export default PokemonGame