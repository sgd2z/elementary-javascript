import Player from './player.js'
import PokemonAPI from './pokemonAPI.js'
import PokemonCard from './pokemonCard.js'

class Game {
	/**
	 * Setup all the things we need for the game
	 */
	constructor() {
		// create the divs for the players and the battle arena
		this.player1Div = document.createElement('div')
		this.player1Div.id = "player1div"

		this.player2Div = document.createElement('div')
		this.player2Div.id = "player2div"

		this.battleArena = document.createElement('div')
		this.battleArena.id = "battleArena"

		// create the main container div
		let mainDiv = document.createElement('div')
		mainDiv.id = "maindiv"

		// add the player and the battle arena divs to the the main div
		mainDiv.appendChild(this.player1Div)
		mainDiv.appendChild(this.battleArena)
		mainDiv.appendChild(this.player2Div)
		
		// show the main div
		document.body.appendChild(mainDiv)
	}

	/**
	 * End a player's turn
	 * @param {PokemonCard} card 
	 */
	endTurn(card) {
		// If it is Player 1's turn, set Player1's card to "card" and give Player 2 their turn
		if (this.turn == 1) {
			this.player1Card = card
			this.turn = 2
			this.player2.play()
		} else { // Otherwise it is Player 2's turn, set Player 2's card to "card" and give Player 1 their turn
			this.player2Card = card
			this.turn = 1
			this.player1.play()
		}
	}

	/**
	 * Start the game. 
	 * Get cards, create players.
	 */
    async start() {
		let player1Cards = await PokemonAPI.getRandomPokemonCards(9)
		let player2Cards = await PokemonAPI.getRandomPokemonCards(9)
		this.player1 = new Player('Player 1', player1Cards, this.player1Div, this)
		this.player2 = new Player('Player 2', player2Cards, this.player2Div, this)
		this.turn = 1
		this.player1.play()
	}
}

let pokemonGame = new Game()
pokemonGame.start()
