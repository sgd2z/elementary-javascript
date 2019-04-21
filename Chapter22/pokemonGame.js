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
	 * Change Turns
	 * @param {Number} player 
	 * @example 
	 * this.changeTurn(1)
	 */
	changeTurn(player) {
		this.turn = player
		this.turnDiv.innerHTML = 'Player ' + player + "'s turn"
		if (player == 1) {
			this.player1.takeTurn()
		} else {
			this.player2.takeTurn()
		}
	}

	/**
	 * Updates the remaining HP of the player and shows it
	 * @param {Number} player 
	 * @param {Number} HP 
	 */
	updateHP(player, HP) {
		// If HP is less than 0 make it 0
		if (HP < 0) {
			HP = 0
		}
		if (player == 1) {
			this.player1HP = HP
			this.player1HPDiv.innerHTML = "Player 1 HP: " + HP
		} else {
			this.player2HP = HP
			this.player2HPDiv.innerHTML = "Player 2 HP: " + HP
		}
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

		// show the arena div and other divs that we need in it
		let arenaDiv = document.createElement("div")
		this.containerDiv.appendChild(arenaDiv)
		this.turnDiv = document.createElement("div")
		arenaDiv.appendChild(this.turnDiv)
		this.player1HPDiv = document.createElement("div")
		arenaDiv.appendChild(this.player1HPDiv)
		this.player2HPDiv = document.createElement("div")
		arenaDiv.appendChild(this.player2HPDiv)
		this.player1AttackDiv = document.createElement("div")
		arenaDiv.append(this.player1AttackDiv)
		this.player2AttackDiv = document.createElement("div")
		arenaDiv.append(this.player2AttackDiv)

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

		this.changeTurn(1)
		this.attackTurn = 1

	}

	/**
	 * Choose a random attack from the card
	 * @param {*} card 
	 */
	chooseRandomAttack(card) {
		let randomIndex = Math.floor(Math.random() * card.attacks.length)
		return card.attacks[randomIndex]
	}

	/**
	 * Make the next player take a turn.
	 * This function is called by the player class when it finishes taking a turn
	 * If both players have a card on the field, they will attack each other until one is destroyed
	 * Then the player whose card is destroyed will take a turn
	 * 
	 * @param {*} card 
	 */
	nextTurn(card) {
		// store the card and the HP of the card so we can use them for attacks
		console.log(card)
		if (this.turn == 1) {
			this.player1Card = card
			this.updateHP(1, card.hp)
		} else {
			this.player2Card = card
			this.updateHP(2, card.hp)
		}

		// if both players have a card keep on attacking until one is destroyed
		while (this.player1Card !== undefined && this.player2Card !== undefined) {
			if (this.attackTurn == 1) {
				// select a random attack for player 1
				let player1Attack = this.chooseRandomAttack(this.player1Card)
				let player1AttackDamage = parseInt(player1Attack.damage)
				this.player1AttackDiv.innerHTML = player1AttackDamage

				// reduce the HP of player 2 by the attack damage
				this.updateHP(2, this.player2HP - player1AttackDamage)
				this.attackTurn = 2
				// If the remaining HP for player 2 is 0 or less, the card is destroyed
				if (this.player2HP < 1) {
					delete this.player2Card
					this.changeTurn(2)
					return
				}
			} else {
				// select a random attack for player 2
				let player2Attack = this.chooseRandomAttack(this.player2Card)
				let player2AttackDamage = parseInt(player2Attack.damage)
				this.player2AttackDiv.innerHTML = player2AttackDamage

				// reduce the HP of player 1 by the attack damage
				this.updateHP(1, this.player1HP - player2AttackDamage)
				this.attackTurn = 1

				// If the remaining HP for player 1 is 0 or less, the card is destroyed
				if (this.player1HP < 1) {
					delete this.player1Card
					this.changeTurn(1)
					return
				}
			}
		}
		
		// Alternately take turns in the begining
		if (this.turn == 1) {
			this.changeTurn(2)
		} else {
			this.changeTurn(1)
		}
	}
}

export default PokemonGame

