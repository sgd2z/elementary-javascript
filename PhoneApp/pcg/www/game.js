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

		this.gameInformationDiv = document.createElement('div')
		this.gameInformationDiv.id = "gameInformationDiv"
		this.battleArena.appendChild(this.gameInformationDiv)

		this.turnDiv = document.createElement('div')
		this.turnDiv.id = "turnDiv"
		this.gameInformationDiv.appendChild(this.turnDiv)

		this.attackDiv = document.createElement('div')
		this.attackDiv.id = "turnDiv"
		this.gameInformationDiv.appendChild(this.attackDiv)

		this.playerCardsDiv = document.createElement('div')
		this.playerCardsDiv.id = "playerCardsDiv"
		this.battleArena.appendChild(this.playerCardsDiv)

		this.player1CardDiv = document.createElement('div')
		this.player1CardDiv.classList.add("arenaCardDiv")
		this.playerCardsDiv.appendChild(this.player1CardDiv)

		this.player2CardDiv = document.createElement('div')
		this.player2CardDiv.classList.add("arenaCardDiv")
		this.playerCardsDiv.appendChild(this.player2CardDiv)

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
	 * set turn and show whose turn it is
	 * @param {Number} playerNumber 
	 */
	setTurn(playerNumber) {
		this.turn = playerNumber
		this.attackDiv.innerHTML = ""
		this.turnDiv.innerHTML = 'Player ' + playerNumber + "'s turn"
	}

	/**
	 * Show who is attacking and what the attack is
	 * @param {Player} player
	 * @param {PokemonCard} card 
	 * @param {*} attack 
	 */
	showAttackInfo(playerNumber, card, attack) {
		this.attackDiv.innerHTML = 'Player ' + playerNumber + "'s " + card.name + ' is attacking with ' + attack.name + ". Damage is " + attack.damage
	}

	/**
	 * The Pokemon attack each other
	 */
	async fight() {
		this.turnDiv.innerHTML = ""
		if (this.attacker === 1) {
			// get the attach that Player 1's card makes
			let attack = this.player1Card.attack()
			this.showAttackInfo(1, this.player1Card, attack)
			await Helper.numberOfSeconds(2)
			// attack player 2's card:
			this.player2Card.damage(attack.damage)

			// Don't continue if the game is over.
			if (this.gameOver) {
				return
			}

			// now it is player 2's turn to attack
			this.attacker = 2
			// If player 2's card is defeated:
			if (this.player2Card.HP <= 0) {
				// remove the defeated card
				this.player2
				// it is player 2's turn
				this.setTurn(2)
				this.player2.play()
			} else {
				await this.fight()
			}
		} else if (this.attacker === 2) {
			let attack = this.player2Card.attack()
			this.showAttackInfo(2, this.player2Card, attack)
			await Helper.numberOfSeconds(2)
			this.player1Card.damage(attack.damage)

			// Don't continue if the game is over.
			if (this.gameOver) {
				return
			}

			this.attacker = 1
			if (this.player1Card.HP <= 0) {
				this.setTurn(1)
				this.player1.play()
			} else {
				await this.fight()
			}
		}
	}

	/**
	 * End a player's turn
	 * @param {PokemonCard} card 
	 */
	endTurn(card) {
		// If it is Player 1's turn, set Player1's card to "card" and give Player 2 their turn
		if (this.turn == 1) {
			// remove the cardImage CSS class from the card
			card.imageElement.classList.remove('cardImage')
			card.imageElement.classList.add('cardImageWhileAttacking')
			// move the card image to the playerCardsDiv
			this.player1CardDiv.appendChild(card.imageElement)
			// set order = 1 so it comes first
			card.imageElement.style.order = 1
			this.player1Card = card
			if (this.player2Card !== undefined) {
				this.fight()
			} else {
				this.setTurn(2)
				this.player2.play()
			}
		} else { // Otherwise it is Player 2's turn, set Player 2's card to "card" and give Player 1 their turn
			// remove the cardImage CSS class from the card
			card.imageElement.classList.remove('cardImage')
			card.imageElement.classList.add('cardImageWhileAttacking')
			// move the card image to the playerCardsDiv
			this.player2CardDiv.appendChild(card.imageElement)
			// set order = 1 so it comes second
			card.imageElement.style.order = 2
			this.player2Card = card
			if (this.player1Card !== undefined) {
				this.fight()
			} else {
				this.setTurn(1)
				this.player1.play()
			}
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
		this.setTurn(1)
		this.attacker = 1
		this.player1.play()
	}

	/**
	 * End the game
	 * @param {Player} player the player that lost
	 */
	end(player) {
		// The game is over!
		this.gameOver = true
		if (player === this.player1) {
			this.turnDiv.innerHTML = "Player 2 Wins!"
		} else {
			this.turnDiv.innerHTML = "Player 1 Wins!"
		}
		this.attackDiv.innerHTML = ""
	}
}

let pokemonGame = new Game()
pokemonGame.start()
