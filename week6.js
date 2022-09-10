

const SUITS = ["♠", "♥", "♣", "♦"]
const VALUES = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"]
const CARD_VALUE_MAP = {
    "A": 1,
    "2": 2,
    "3": 3,
    "4": 4,
    "5": 5,
    "6": 6,
    "7": 7,
    "8": 8,
    "9": 9,
    "10": 10,
    "J": 11,
    "Q": 12,
    "K": 13
}

class Deck {
    constructor() {
        this.cards = [];
    }
    createDeck() {
        for (let i = 0; i < SUITS.length; i++) {
            for (let j = 0; j < VALUES.length; j++) {
                this.cards.push(new Card(SUITS[i], VALUES[j]));
            }
        }
    }
    shuffle() {
        for (let i = this.cards.length - 1; 1 > 0; i--) {
            const newIndex = Math.floor(Math.random() * (i + 1))
            const oldValue = this.cards[newIndex]
            this.cards[newIndex] = this.cards[i]
            this.cards[i] = oldValue
        }
    }
}

class Card {
    constructor(suit, value) {
        this.suit = suit
        this.value = value
    }
}

class Player {
    constructor(player, computer) {
        this.player = player;
        this.computer = computer;
        this.playerCards = [];
        this.computerCards = [];
    }
}

class Hand {
    constructor() {
        this.players = [];
    }
    start(player, computer) {
        this.players.push(new Player(player));
        this.players.push(new Player(computer));
        let newDeck = new Deck();
        newDeck.createDeck();
        newDeck.shuffleDeck();
        this.players[0].playerCards = newDeck.cards.slice(0, 26);
        this.players[1].playerCards = newDeck.cards.slice(26, 52);
    }
}

function newDeck() {
    return SUITS.flatMap(suit => {
        return VALUES.map(value => {
            return new Card(suit, value)
        })
    })
}

let score = 0

while(Hand > 0) {
    for(let i = 0; i < player.playerCards.length; i++) {
        if (player.playerCards[i] === computer.computerCards[i]) {
            console.log('Tie')
        }else if (player.playerCards[i] > computer.computerCards[i]) {
            player.score + 1
            console.log("Player Wins" + "Score is:" + score)
        }else {
            computer.score + 1
            console.log("Computer Wins" + "Score is:" + score)
        }
    }
}

function gameOver(deck) {
    return deck.numberOfCards === 0
}

