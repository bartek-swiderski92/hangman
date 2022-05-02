class Game {
    constructor({ output, wordWrapper, categoryWrapper, lettersWrapper }) {
        this.output = output;
        this.wordWrapper = wordWrapper;
        this.categoryWrapper = categoryWrapper;
        this.lettersWrapper = lettersWrapper;
    }

    guess(letter) {
        console.log(letter)
    }

    start() {
        for (let i = 0; i < 26; i++) {
            const label = (i + 10).toString(36);
            const button = document.createElement('button');
            button.innerHTML = label;
            button.addEventListener('click', () => this.guess(label))
            this.lettersWrapper.appendChild(button)
        }
    }
}
