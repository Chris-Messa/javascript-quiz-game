const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start-button");
const quizQuestions = document.querySelector("#quiz-questions");
const answerList = document.querySelector("#answer-list");
const answerResult = document.querySelector("#answer-result");


startButton.addEventListener("click", e => {
    e.stopPropagation();
    e.preventDefault();
    document.querySelector("h1").setAttribute("style", "display: none;")
    document.querySelector("#start-button").setAttribute("style", "display: none;")
    displayQuestion();
    displayAnswers();
})

const questions = [
    {
        question: "question1", 
        answer: "choice 1", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question2", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question3", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question4", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question5", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question6", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question7", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question8", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question1", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question1", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
    {
        question: "question1", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }, 
];

let randomQ = questions[Math.floor(Math.random() * questions.length)].question;
function displayQuestion() {
    quizQuestions.textContent = randomQ;
}

function createListEls() {
    for (let i = 0; i < 4; i++) {
        answerList.appendChild(document.createElement("li"));
        answerList.children[i].id = `list-item-${i + 1}`
    }
}



function displayAnswers() {
    let choices = ["choice 1", "choice 2", "choice 3", "choice 4"];
    for (let i = 0; i < 4; i++) {
        answerList.children[i].textContent = choices[i];
    }
}



