/**
* Generates a random number between number1 and number2
* @param {Number} number1 an integer
* @param {Number} number2 an integer
*/
const randomBetween = (number1, number2) => {
	//calculate the range both numbers inclusive
	let range = number2 - number1 + 1
	// generate a random number in the range and shift it by number 1
	let randomNumber = Math.floor(Math.random() * range) + number1
	return randomNumber
}

const getPokemonList = async () => {
	let randomPage = randomBetween(1, 87)
	let file = await fetch('https://api.pokemontcg.io/v1/cards?supertype=Pokémon&page=' + randomPage + '&pageSize=1000')
	let pokemonList = await file.json()
	console.log(pokemonList)
}

getPokemonList()

const getPokemonListWithoutAsyncAwait = () => {
	let randomPage = randomBetween(1, 87)
	fetch('https://api.pokemontcg.io/v1/cards?supertype=Pokémon&page=' + randomPage + '&pageSize=1000').then((file) => {
		file.json().then((pokemonList) => {
			console.log(pokemonList)
		})
	})	
}