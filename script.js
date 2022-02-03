const quizData = [
    {
        question: 'Who is Lilly Salvatore ?',
        a: 'Sister of Salvatoer brothers',
        b: 'Mother of Salvatore brothers',
        c: 'Niece of Salvatore brothers',
        d: 'None of the above',
        correct: 'b'
    },{
        question: 'Who is Stefan\'s First Love ?',
        a: 'Rebhaka',
        b: 'Elena Gilbert',
        c: 'Katherin Peirce',
        d: 'Valerie',
        correct: 'd'
    },{
        question: 'Who is Sara Nelson ?',
        a: 'Friend of Salvators',
        b: 'No one',
        c: 'Niece of Salvatores',
        d: 'Tylor\'s Girl Friend',
        correct: 'c'
    },{
        question: 'Who is Alaric Saltzman\'s wife ?',
        a: 'Isabell',
        b: 'Jenna',
        c: 'Jo',
        d: 'No one',
        correct: 'a'
    },{
        question: 'Who is Stefan\'s first choice always?',
        a: 'Elena Gilbert',
        b: 'Damon',
        c: 'Lexi',
        d: 'Bonnie',
        correct: 'b'
    }
];

const answerEls = document.querySelectorAll('.answer');
const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question');
const submitBtn = document.getElementById('submit');




const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;

    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
    
}

function getSelected() {
    let answer = undefined;
    answerEls.forEach((answerEl) => {
        if(answerEl.checked) {
            answer = answerEl.id;
        }
    });
    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
   const answer =  getSelected();
    if(answer) 
    {
        if(answer === quizData[currentQuiz].correct) 
        {
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length) 
        {
            loadQuiz();
        } 
        else 
        {
            quiz.innerHTML = `<h2>YOUR SCORE IS ${score}/${quizData.length} <button onclick="location.reload()">Play Again</button>`;
        }  
    }
});

