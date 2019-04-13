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
		this.player1 = new Player()
		this.player2 = new Player()

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
	}
}

export default PokemonGame