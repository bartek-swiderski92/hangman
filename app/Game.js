import { Quote } from "./Quote.js";

class Game {
    quotes = [
        {
            text: "Avatar",
            category: "Film"

        },
        {
            text: "I Am Legend",
            category: "Film"

        },
        {
            text: "Gladiator",
            category: "Film"

        },
        {
            text: "The Avengers",
            category: "Film"

        },
        {
            text: "The Wolf of Wall Street",
            category: "Film"

        },
        {
            text: "Interstellar",
            category: "Film"

        },
        {
            text: "Doctor Strange",
            category: "Film"

        },
        {
            text: "Star Wars",
            category: "Film"

        },
        {
            text: "Iron Man",
            category: "Film"
        },
        {
            text: "Game of Thrones",
            category: "TV Show"

        },
        {
            text: "Vikings",
            category: "TV Show"

        },
        {
            text: "Gotham",
            category: "TV Show"

        },
        {
            text: "Power",
            category: "TV Show"

        },
        {
            text: "Narcos",
            category: "TV Show"

        },
        {
            text: "Breaking Bad",
            category: "TV Show"

        },
        {
            text: "Luke Cage",
            category: "TV Show"
        }
    ];

    constructor({ output, wordWrapper, categoryWrapper, lettersWrapper }) {
        this.output = output;
        this.wordWrapper = wordWrapper;
        this.categoryWrapper = categoryWrapper;
        this.lettersWrapper = lettersWrapper;

        const { text, category } = this.quotes[Math.floor(Math.random() * this.quotes.length)];
        this.categoryWrapper.innerHTML = category;
        this.quote = new Quote(text);
    };

    guess(letter, event) {
        event.target.disabled = true
        this.quote.guess(letter);
        this.drawQuote();

    };

    drawLetters() {
        for (let i = 0; i < 26; i++) {
            const label = (i + 10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', (event) => this.guess(label, event))
            this.lettersWrapper.appendChild(button)
        }
    };

    drawQuote() {
        const content = this.quote.getContent().toLowerCase();
        console.log(content)
        this.wordWrapper.innerHTML = content
    }

    start() {
        this.drawLetters();
        this.drawQuote();
    }
}

const game = new Game({
    output: document.getElementById('output'),
    wordWrapper: document.getElementById('word'),
    categoryWrapper: document.getElementById('category'),
    lettersWrapper: document.getElementById('letters'),
});

game.start()