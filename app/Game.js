import { Quote } from "./Quote.js";

class Game {
    currentStep = 0;
    lastStep = 7;

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
        if (this.quote.guess(letter)) {
            this.drawQuote()
        } else {
            this.currentStep++
            document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
            document.getElementsByClassName('step')[this.currentStep - 1].style.opacity = 0.1;
            if (this.currentStep == this.lastStep) {
                console.log('if');
                this.loosing();
                return
            }
        }
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
        this.wordWrapper.innerHTML = content;
        if (!content.includes('_')) {
            this.winning();
        }
    }

    start() {
        document.getElementsByClassName('step')[this.currentStep].style.opacity = 1;
        this.drawLetters();
        this.drawQuote();
    }

    winning() {
        this.wordWrapper.innerHTML = 'YOU WON! WELL DONE!';
        this.lettersWrapper.innerHTML = '';
    }

    loosing() {
        console.log('loosing');
        this.wordWrapper.innerHTML = 'YOU LOST! TRY AGAIN!!';
        this.lettersWrapper.innerHTML = '';
    }

}

const game = new Game({
    output: document.getElementById('output'),
    wordWrapper: document.getElementById('word'),
    categoryWrapper: document.getElementById('category'),
    lettersWrapper: document.getElementById('letters'),
});

game.start()