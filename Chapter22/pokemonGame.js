import Pokemon from './pokemon.js'
import Player from './player.js';

/**
* A class for the Pokemon game
*/
class PokemonGame {
   constructor() {
       this.cardsPerPlayer = 5
       this.pokemon = new Pokemon()
       this.player1 = new Player()
       this.player2 = new Player()
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
           this.player1.addCard(card)
           count = count + 1
       }
       this.player1.showCards()

       // randomly assign cards to player 2
       count = 0
       while (count < this.cardsPerPlayer) {
           let randomIndex = Math.floor(Math.random() * this.pokemonList.length)
           let pokemon = this.pokemonList[randomIndex]
           let card = await this.pokemon.getRandomCardForPokemon(pokemon.name)
           this.player2.addCard(card)
           count = count + 1
       }
       this.player2.showCards()
   }
}

export default PokemonGame