import Player from './player.js'

class PokemonCard {
    /**
     * A pokemon card must be created with the following properties:
     * @param {String} name 
     * @param {Number} HP 
     * @param {String} image 
     * @param {Array} attacks 
     */
    constructor(name, HP, image, attacks) {
        this.name = name
        this.HP = HP
        this.image = image
        this.attacks = attacks
    }

    /**
     * Show the image of this card in the div.
     * @param {HTMLDivElement} div 
     * @param {Player} player
     */
    show(div, player) {
        // create the image element
        let image = document.createElement('img')
        image.classList.add('cardImage')

        // set the src property to the back of the card
        image.src = 'https://github.com/sgd2z/elementary-javascript/blob/master/Chapter22/images/pokemon_card_back.jpg?raw=true'

        // put the image element in the div
        div.appendChild(image)

        const showImage = () => {
            // Don't do anything if it is not the player's turn
            if (player.turn === false) {
                return
            }
            image.removeEventListener('click', showImage)
            image.src = this.image
            player.endTurn(this)
        }

        // add click listener
        image.addEventListener('click', showImage)
    }
}

export default PokemonCard
