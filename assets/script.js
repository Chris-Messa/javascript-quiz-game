const timer = document.querySelector(`#timer`);
const startButton = document.querySelector(`#start-button`);
const quizQuestions = document.querySelector(`#quiz-questions`);
const answerList = document.querySelector(`#answer-list`);
const answerResult = document.querySelector(`#answer-result`);


startButton.addEventListener(`click`, e => {
    e.stopPropagation();
    e.preventDefault(); 
    playGame();
})

const questions = [
    {
        question: `Which of the following is not an array method?`, 
        answer: `charAt()`, 
        choices: [ `join()`, `map()`, `charAt()`, `indexOf()`]
    }, 
    {
        question: `Which of these is the correct way to define a function in Javascript?`, 
        answer: `All of the above`, 
        choices: [ `let theFunction = function() {}`, `function() {}`, `()=> {}`, `All of the above`]
    }, 
    {
        question: `What would typeof(console.log) return to the console?`, 
        answer: `function`, 
        choices: [ `'string'`, `'function'`, `'undefined'`, `None of the above`]
    }, 
    {
        question: `How do we declare an array in javascript?`, 
        answer: `let arr = ['one', 'two', 'three']`, 
        choices: [ `<array>['one', 'two', 'three']</array>`, `variable.Array = ['one', 'two', 'three']`, `Array[] = new Array('one', 'two', 'three')`, `let arr = ['one', 'two', 'three']`]
    }, 
    {
        question: `Which of the following is NOT a primitive type in javascript`, 
        answer: `object`, 
        choices: [ `object`, `boolean`, `number`, `string`]
    }, 
    {
        question: `In the following array: [1, 2, 3, 4, 5, 6, 7] what is the value at the 3rd index?`, 
        answer: `4`, 
        choices: [ `3`, `4`, `2`, `There is no value at the 3rd index`]
    }, 
    {
        question: ``, 
        answer: `HO`, 
        choices: [ `7 choice 1`, `7 choice 2`, `7 choice 3`, `7 choice 4`]
    }, 
    {
        question: `question8`, 
        answer: `HO`, 
        choices: [ `8 choice 1`, `8 choice 2`, `8 choice 3`, `8 choice 4`]
    }, 
    {
        question: `question9`, 
        answer: `HO`, 
        choices: [ `9 choice 1`, `9 choice 2`, `9 choice 3`, `9 choice 4`]
    }, 
    {
        question: `question10`, 
        answer: `HO`, 
        choices: [ `choice 1`, `choice 2`, `choice 3`, `choice 4`]
    }
];

const questionOne = questions[0];
let chosenAnswer ="";

function playGame() {
    document.querySelector(`h1`).setAttribute(`style`, `display: none;`);
    document.querySelector(`#start-button`).setAttribute(`style`, `display: none;`);
    chooseQuestion();


    let chosenAnswerEvent = document.addEventListener('click', e=> { 
        e.stopPropagation();

        chosenAnswer = e.target.textContent;
        if (chosenAnswer === questionOne.answer) {
            console.log("Correct!");
        } else if (chosenAnswer !== questionOne.answer) {
            console.log("Wrong!");
        }
        if (questions.length === 0) {
           console.log("Game Over!");
        } else {
            questions.pop();
            chooseQuestion();
        }
    return chosenAnswer;
})

    function isCorrect() {
        let isCorrectAnswer = (chosenAnswer === questionOne.answer);
        return isCorrectAnswer;
    }
    
}


function chooseQuestion() {
    createListEls();
    let randomQ = questions[Math.floor(Math.random() * questions.length)];
    questionText = randomQ.question;
    quizQuestions.textContent = questionText;
    console.log(randomQ.choices);
    for (let i = 0; i < 4; i++) {
        answerList.children[i].textContent = randomQ.choices[i];
    }
}

let numEls = 0;
function createListEls() {
 
    if (numEls < 4) {
        for (let i = 0; i < 4; i++) {
        answerList.appendChild(document.createElement(`li`));
        answerList.children[i].id = `list-item-${i + 1}`;
        numEls++;
    }
}
}




