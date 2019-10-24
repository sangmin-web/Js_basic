let htmlQuestion = document.querySelector("#js-question");
let form = document.querySelector("#js-answer");
let input = form.querySelector("input");

let num1;
let num2;


form.addEventListener("submit", e => {
    e.preventDefault();

    const temp = input.value;
    if (parseInt(temp) === num1 * num2) {
        alert("correct");
        init();
    } else {
        alert("try again");
    }
    input.value = "";
    return;
})

function init() {
    num1 = Math.ceil(Math.random() * 9);
    num2 = Math.ceil(Math.random() * 9);
    htmlQuestion.innerText = `${num1} X ${num2} = ?`
}
init();
