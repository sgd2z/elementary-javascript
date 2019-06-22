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
        // save the player for later use
        this.player = player

        // create the image element
        let image = document.createElement('img')
        this.imageElement = image // we are calling this imageElement so that we dont overwrite "this.image", which contains the url of the image.
        image.classList.add('cardImage')

        // set the src property to the back of the card
        image.src = 'https://github.com/sgd2z/elementary-javascript/blob/master/Chapter22/images/pokemon_card_back.jpg?raw=true'

        // put the image element in the div
        div.appendChild(image)

        const showImage = async () => {
            // Don't do anything if it is not the player's turn
            if (player.turn === false) {
                return
            }
            image.removeEventListener('click', showImage)
            image.src = this.image
            await player.endTurn(this)
        }

        // add click listener
        image.addEventListener('click', showImage)
    }

    /**
     * Return a random attack for this card
     */
    attack() {
        let randomIndex = Math.floor(Math.random() * this.attacks.length)
        return this.attacks[randomIndex]
    }

    /**
     * get Attacked.
     * @param {Number} attackDamage 
     */
    damage(attackDamage) {
        this.HP = this.HP - attackDamage
        // if the card is defeated, remove from the player list and delete the element
        if (this.HP <= 0) {
            // this is how you delete an HTML element. By removing it from the parentElement
            this.imageElement.parentElement.removeChild(this.imageElement)
            this.player.removeCard(this)
        }
    }
}

export default PokemonCard
