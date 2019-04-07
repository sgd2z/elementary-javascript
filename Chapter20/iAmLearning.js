const getPokemonList = async () => {
	let file = await fetch('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964')
	let pokemonList = await file.json()
	console.log(pokemonList)
}

getPokemonList()