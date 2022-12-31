
const quizData = [
    {
        question: 'How old is Florin?',
        a: '10',
        b: '17',
        c: '26',
        d: '110',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language?',
        a: 'Java',
        b: 'C#',
        c: 'Python',
        d: 'JavaScript',
        correct: 'd'
    },
    {
        question: 'Who is the current President of US?',
        a: 'Hillary Clinton',
        b: 'Joe Biden',
        c: 'Donald Trump',
        d: 'Barack Obama',
        correct: 'd'
    },
    {
        question: 'What does HTML stands for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Object Oriented Programming',
        d: 'Jason Object Notation',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript Launched?',
        a: '1996',
        b: '1995',
        c: '1994',
        d: 'none of the above',
        correct: 'd'
    }
];


const questionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit');

let currentQuiz = 0;

let answer = undefined;

loadQuiz();

function loadQuiz() {
    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');

    answerEls.forEach((answerEl) => {
        
        if (answerEl.checked) {
            return answer = answerEl.id;
        }
    });

    return undefined;
};



submitBtn.addEventListener('click', () => {
    currentQuiz++;

const answer = getSelected();

//     if (currentQuiz < quizData.length) {
//     loadQuiz();
//     } else {
//         // TODO: show results
//         alert('You have finished! Get yourself an something Chill!');
// }

});