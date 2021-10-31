

class Card {
    constructor(suit, rank, value) {
        this.suit = suit;
        this.rank = rank;
        this.value = value;
    }
}


class Deck {
    constructor() {
        this.cards = [];
    }

    createDeck() {
        let suits = ["Clubs", "Diamonds", "Spades", "Hearts"];
        let ranks = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
        let values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

        for (let i = 0; i < suits.length; i++) {
            for (let x = 0; x < ranks.length; x++) {
                this.cards.push (new Card(suits[i], ranks[x], values[x]));{
                }
            }
        }
    }


    shuffleDeck() {
        let location1, location2, tmp;
        for (let i = 0; i < 1000; i++) {
            location1 = Math.floor((Math.random() * this.cards.length));
            location2 = Math.floor((Math.random() * this.cards.length));
            tmp = this.cards[location1];
            this.cards[location1] = this.cards[location2];
            this.cards[location2] = tmp;
        }
    }
}


class Player {
    constructor (name) {
        this.playerName = name;
        this.playerCards = [];
    }
}


class Board {
    constructor() {
        this.cardsInMiddle = [];
        this.players = [];
    }
    start (playerOneName, playerTwoName) {
        this.players.push(new Player(playerOneName));
        this.players.push(new Player(playerTwoName));
        let deck1 = new Deck();
        deck1.createDeck();
        deck1.shuffleDeck();
        this.players[0].playerCards = deck1.cards.slice(0, 26);
        this.players[1].playerCards = deck1.cards.slice(26, 52);
    }
}

let gameBoard = new Board();
gameBoard.start("Ralph", "Chet");

console.log(gameBoard.players);





