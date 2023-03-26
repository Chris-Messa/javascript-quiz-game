const timer = document.querySelector("#timer");
const startButton = document.querySelector("#start-button");
const quizQuestions = document.querySelector("#quiz-questions");
const answerList = document.querySelector("#answer-list");
const answerResult = document.querySelector("#answer-result");


startButton.addEventListener("click", e => {
    e.stopPropagation();
    e.preventDefault();
    document.querySelector("h1").setAttribute("style", "display: none;");
    document.querySelector("#start-button").setAttribute("style", "display: none;");
    chooseQuestion();
})

const questions = [
    {
        question: "question1", 
        answer: "choice 1", 
        choices: [ "1 choice 1", "1 choice 2", "1 choice 3", "1 choice 4"]
    }, 
    {
        question: "question2", 
        answer: "HO", 
        choices: [ "2 choice 1", "2 choice 2", "2 choice 3", "2 choice 4"]
    }, 
    {
        question: "question3", 
        answer: "HO", 
        choices: [ "3 choice 1", "3 choice 2", "3 choice 3", "3 choice 4"]
    }, 
    {
        question: "question4", 
        answer: "HO", 
        choices: [ "4 choice 1", "4 choice 2", "4 choice 3", "4 choice 4"]
    }, 
    {
        question: "question5", 
        answer: "HO", 
        choices: [ "5 choice 1", "5 choice 2", "5 choice 3", "5 choice 4"]
    }, 
    {
        question: "question6", 
        answer: "HO", 
        choices: [ "6 choice 1", "6 choice 2", "6 choice 3", "6 choice 4"]
    }, 
    {
        question: "question7", 
        answer: "HO", 
        choices: [ "7 choice 1", "7 choice 2", "7 choice 3", "7 choice 4"]
    }, 
    {
        question: "question8", 
        answer: "HO", 
        choices: [ "8 choice 1", "8 choice 2", "8 choice 3", "8 choice 4"]
    }, 
    {
        question: "question9", 
        answer: "HO", 
        choices: [ "9 choice 1", "9 choice 2", "9 choice 3", "9 choice 4"]
    }, 
    {
        question: "question10", 
        answer: "HO", 
        choices: [ "choice 1", "choice 2", "choice 3", "choice 4"]
    }
];




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


function createListEls() {
    for (let i = 0; i < 4; i++) {
        answerList.appendChild(document.createElement("li"));
        answerList.children[i].id = `list-item-${i + 1}`
    }
}




