const game = document.querySelector(`#game`);
const timer = document.querySelector(`#timer`);
const startButton = document.querySelector(`#start-button`);
const quizQuestions = document.querySelector(`#quiz-questions`);
const answerList = document.querySelector(`#answer-list`);
const answerResult = document.querySelector(`#answer-result`);
const scorelist = document.querySelector(`#end-game`);
const h1El =  document.querySelector(`h1`);
const gameContainer = document.querySelector(`.game-flex-container`);
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
    }
];

var timerCountdown = 0;
startButton.addEventListener(`click`, e => {
    e.stopPropagation();
    e.preventDefault(); 
    playGame();

    timer.textContent = timerCountdown;
    
    const interval = setInterval(() => {
        timerCountdown--; 
        timer.textContent = timerCountdown;
        if (timerCountdown <= 0) {
            clearInterval(interval);
            timer.textContent = "Times Up!";
            endGame();
        }
    }, 1000)
 
});

function playGame() {
    h1El.textContent = "";
    startButton.setAttribute(`style`, `display: none;`);
    let currentQuestion = 0;
    generateQuestion();

    
    const chosenAnswerEvent = answerList.addEventListener('click', e=> { 
        e.stopPropagation();
        let chosenAnswer = e.target.textContent;
        console.log(chosenAnswer);
        console.log(questions[currentQuestion].answer)
        
        if (chosenAnswer !== questions[currentQuestion].answer) {
            answerResult.textContent = "Wrong!";
            timerCountdown -= 20;
        }   else {
            answerResult.textContent = "Correct!";
        }
        currentQuestion++
        generateQuestion(); 
    });

    function generateQuestion() {
        if (currentQuestion < questions.length) {
            let choiceArr = questions[currentQuestion].choices;
        quizQuestions.textContent = questions[currentQuestion].question;
            for (let i = 0; i < 4; i++) {
            answerList.children[i].textContent = questions[currentQuestion].choices[i];
        }
        answerList.setAttribute(`style`, `display: inline;`);
        }
    }

}

function saveScore() {
    // Take input from inputEl
    var savedInput = document.querySelector(`.inputClass`).value;
    // Save input to local storage
    localStorage.setItem(`key`, savedInput);
    gameContainer.textContent = localStorage.getItem(`key`);
}

function endGame() {
    game.textContent = "";
    h1El.textContent = "All done!";
    var inputEl = document.createElement(`input`);
    inputEl.classList.add(`inputClass`);
    var inputButtonEl = document.createElement(`button`);
    inputButtonEl.textContent = `Enter`;
    gameContainer.appendChild(inputEl);
    gameContainer.appendChild(inputButtonEl);
    inputButtonEl.addEventListener(`click`, saveScore);
}