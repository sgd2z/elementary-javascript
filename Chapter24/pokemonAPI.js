import PokemonCard from './pokemonCard.js'

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

const PokemonAPI = {
    /**
     * Gets information about 1000 Pokemon cards by selecting a random page from the pokemon API full of 1000 cards
     */
    getPokemonList: async () => {
        // The API has 10 pages. Choose a random page
        let randomPage = randomBetween(1, 10)

        // Get the information from the API
        let file = await fetch('https://api.pokemontcg.io/v1/cards?supertype=Pokemon&page=' + randomPage + '&pagesize=1000')
        let pokemonList = await file.json()

        // the cards are in the cards property
        return pokemonList.cards
    },

    /**
     * Gets a random selection of Pokemon cards
     * @param {Number} number the number of cards to get
     */
    getRandomPokemonCards: async (number) => {
        // Get cards using the API
        let pokemonList = await PokemonAPI.getPokemonList()

        // Create a list
        let pokemonCards = []

        // Create a loop to get "number" cards
        let counter = 0
        while(counter < number) {
            // select a random card
            let randomIndex = randomBetween(0, pokemonList.length - 1)
            let pokemon = pokemonList[randomIndex]

            // create a new list of good attacks
            let goodAttacks = []

            // add all attacks where the damage can be converted to a number to good attacks.
            let position = 0

            // if the pokemon has no attacks, move on to the next card
            if (pokemon.attacks === undefined) {
                continue
            }
            while (position < pokemon.attacks.length) {
                let attack = pokemon.attacks[position]
                attack.damage = parseInt(attack.damage)
                if (attack.damage > 0) {
                    goodAttacks.push(attack)
                }
                position++
            }

            // replace attacks with good attacks
            pokemon.attacks = goodAttacks

            // only use pokemon that have good attacks
            if (pokemon.attacks.length > 0) {
                // create a PokemonCard object from the card to use in the game
                let pokemonCard = new PokemonCard(pokemon.name, pokemon.hp, pokemon.imageUrl, pokemon.attacks)

                // add the card to our list
                pokemonCards.push(pokemonCard)

                counter = counter + 1
            }
        }

        console.log(pokemonCards)
        return pokemonCards
    }

}

export default PokemonAPI
