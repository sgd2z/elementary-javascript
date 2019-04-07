import PokemonGame from './pokemonGame.js'

const startGame = async () => {
	let game = new PokemonGame()
	await game.setup()
	game.start()
}

startGame()
