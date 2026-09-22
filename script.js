let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let answer = document.getElementById("answer");

function getNumbers()  {
    let n1 = Number(input1.value);
    let n2 = Number(input2.value);

    return [n1, n2];
}

function showAnswer(ans) {
    answer.innerText = "Answer: " + ans;

    if (ans < 0)
        answer.style.color = "red";
    else
        answer.style.color = "black";
}

function addNumbers() {
    let ns = getNumbers();

    showAnswer(ns[0] + ns[1]);
}

function subtract() {
    let ns = getNumbers();

    showAnswer(ns[0] - ns[1]);
}

function multiply() {
    let ns = getNumbers();

    showAnswer(ns[0] * ns[1]);
}

function divide() {
    let ns = getNumbers();

    showAnswer(ns[0] / ns[1]);
}

function exponentiate() {
    let ns = getNumbers();
    let n1 = ns[0];
    let n2 = ns[1];
    let ans = 1;

    for (let i = 0; i < Math.abs(n2); i++)
        ans *= n1;

    if (n2 < 0)
        ans = 1 / ans

    showAnswer(ans);
}

function clearAnswer() {
    input1.value = "";
    input2.value = "";
    answer.innerText = "";
    answer.style.color = "black";
}