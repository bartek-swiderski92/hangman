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
            text: "300",
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
            text: "Rogue One: A Star Wars Story",
            category: "Film"

        },
        {
            text: "Assassin's Creed",
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
        this.categoryWrapper.innerHtml = category
        console.log(text, category)
    };

    guess(letter) {
        console.log(letter)
    };
    drawLetters() {
        for (let i = 0; i < 26; i++) {
            const label = (i + 10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', () => this.guess(label))
            this.lettersWrapper.appendChild(button)
        }
    };
    start() {
        this.drawLetters();
    }
}
