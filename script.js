var codeQuiz = [
    {
        question: '', 
        a: '',
        b: '',
        c: '',
        d: '',
        answer: ''
    }, 
    {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        answer: ''
    },
    {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        answer: ''
    },
    {
        question: '',
        a: '',
        b: '',
        c: '',
        d: '',
        answer: ''
    },
    {
        question: '',
        a: '',
        b: '',
        c: '9',
        d: '',
        answer: ''
    }
]

var background = document.querySelector("body");
var startBtn = document.querySelector("#start-btn");
var quizEl = document.querySelector(".quiz-container");
var endEl = document.querySelector(".end");
var scoreEl = document.querySelector(".score");
var questionCounter = 0;
var currentScore = 99;
var highScores = [];