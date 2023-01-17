const quizzData = [
    {
        question: " Quelle organisation définit les standards Web? ",
        a: "World Wide Web Consortium",
        b: "wide world web constium ",
        c: "world web wide consortium",
        d: "autre",
        correct: "a",
    },
    {
        question: "HTML est considéré comme ? ",
        a: "Langage de programmation",
        b: "Langage POO",
        c: "Langage de haut niveau",
        d: "Langage de balisage",
        correct: "d",
    },

    {
        question: "Balises définis par l’utilisateur ? ",
        a: "Balises prédéfinis",
        b: "Cscading ss ",
        c: "Balises fixes définis par le langage",
        d: "Balises uniquement pour les liens",
        correct: "c",
    },

    {
        question: "Quel est le bon endroit pour insérer un code JavaScript? ",
        a: "La section",
        b: "Les deux sections <head> et <body> sont correctes ",
        c: "La section <body>",
        d: "Aucune de ces réponses n’est vraie.",
        correct: "b",
    },

    {
        question: "Comment écrivez-vous « Hello World » dans une boîte d’alerte ? ",

        a: "msg(Hello World)",

        b: "alert(Hello World) ",
        c: "msgBox(Hello World)",
        d: "alertBox(Hello World)",
        correct: "b",
    },

    {
        question: "Comment créer une fonction en JavaScript?? ",
        a: "function f()",
        b: "function = f() ",
        c: "function:f()",
        d: "Aucune de ces réponses n’est vraie.",
        correct: "a",
    },

    {
        question: "Quelle fonction est utilisée pour supprimer les espaces au début d’une chaîne en php? ",
        a: "rtrim",
        b: "trim ",
        c: "strim",
        d: "Itrim",
        correct: "d",
    },

    {
        question: "Quelle fonction pour comparer deux chaines de caractères en php? ",
        a: "strcasecmp()",
        b: "strspn() ",
        c: "strcspn()",
        d: "Tout les réponses sont vrais",
        correct: "d",
    },

    {
        question: "Laquelle des fonctions suivantes convertira une chaîne en majuscule en php? ",
        a: "strtoupper()",
        b: "uppercase() ",
        c: "str_uppercase()",
        d: "struppercase()",
        correct: "a",
    },

    {
        question: "Lorsque deux chaînes sont exactement équivalentes, strcmp() renvoie quoi? ",
        a: "Renvoie 0",
        b: "Retourne 1 ",
        c: "Ne renvoie rien",
        d: "Renvoie une chaîne",
        correct: "a",
    },

];

const quizz = document.getElementById("quizz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitbtn = document.getElementById("submit");

let currentQuizz = 0;
let score = 0;

loadQuizz();

function loadQuizz() {
    deselectAnswers();
    const currentQuizzData = quizzData[currentQuizz];
    questionEl.innerText = currentQuizzData.question;
    a_text.innerText = currentQuizzData.a;
    b_text.innerText = currentQuizzData.b;
    c_text.innerText = currentQuizzData.c;
    d_text.innerText = currentQuizzData.d;
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer;
    answerEls.forEach((answerEls) => {
        if (answerEls.checked) {
            answer = answerEls.id;
        }
    });

    return answer;
}

submitbtn.addEventListener("click", () => {
    const answer = getSelected();
    if (answer) {
        if (answer === quizzData[currentQuizz].correct) {
            score++;
        }
        currentQuizz++;

        if (currentQuizz < quizzData.length) {
            loadQuizz();
        } else {

            quizz.innerHTML =
                `<h2>You answered ${score}/${quizzData.length} question correctly  </h2> 
          <button onclick="location.reload()" >Reload </button>
          `

        }
    }
});