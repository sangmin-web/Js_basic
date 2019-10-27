let $form = document.querySelector("form");
let $input = $form.querySelector("input");
let $button = $form.querySelector("button");
let $ul = document.querySelector("ul");
let $h2 = document.querySelector("h2");

let numArray = [];
let wrongCount = 0;
$form.addEventListener("submit", (e) => {
    e.preventDefault();

    let answer = $input.value;
    if (answer === numArray.join('')) {
        $h2.innerHTML = "홈런";
        init();
    } else {
        wrongCount++;
        $input.value='';
        if (wrongCount == 10) {
            $h2.innerHTML = `이전 답:${numArray} `;
            init();
            return;
        }
        let temp = answer.split('');
        let strike = 0;
        let ball = 0;
        for (let i = 0; i < temp.length; i++) {
            if (Number(temp[i]) === numArray[i]) {
                strike++;
            } else if (numArray.indexOf(Number(temp[i])) !== -1) {
                ball++
            }
        }
        $h2.innerHTML = `스트라이크: ${strike}, 볼: ${ball} 틀린횟수: ${wrongCount}`;
    }

});

function init() {
    numArray = [];
    wrongCount = 0;
    $input.value='';
    const possibilities = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    for (let i = 0; i < 4; i++) {
        let num = possibilities.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
        numArray.push(num);
    }
    console.log(numArray);

}

(() => {
    init();
})();