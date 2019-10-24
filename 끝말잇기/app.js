const htmlWords = document.querySelector("#js-words");
const result = document.querySelector("#js-result");
const form = document.querySelector("#js-form");
const input = form.querySelector("input");

const FIRST_WORD = "시작"
let lastWord = FIRST_WORD;

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const answer = input.value;
    if (!answer) return;
    if (lastWord[lastWord.length - 1] === answer[0]) {
        addWord(answer, false);
    } else {
        result.innerText = "WRONG!!";
        setTimeout(() => {
            init();
        }, 500)

    }
    input.value = "";
})

function init() {
    htmlWords.innerHTML = "";
    addWord(FIRST_WORD);
    result.innerText = "시작!";
}

function addWord(text) {
    const word = document.createElement("li");
    word.innerText = text;
    word.classList = "word active";
    if (htmlWords.lastChild) {
        htmlWords.lastChild.classList = "word";
    }
    htmlWords.appendChild(word);
    lastWord = text;
}

init();