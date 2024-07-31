let questions = [
    {
        "question": " ist das Gurkly gleina?",
        "answer_1": "Ja",
        "answer_2": "Ja, ein bisschen vielleicht",
        "answer_3": "Ja, auf jeden Fall etwas",
        "answer_4": "Nein",
        "right_answer": 1 
    },

    {
        "question": " ist das Gurkly süßa?",
        "answer_1": "Negativ",
        "answer_2": "Ja, sehr",
        "answer_3": "Nööööö",
        "answer_4": "Nein",
        "right_answer": 2 
    },

    {
        "question": "Ist der Fredl süßa?",
        "answer_1": "Nööööö", 
        "answer_2": "Wer das liest ist doof",
        "answer_3": "na klaaar!",
        "answer_4": "Nein",
        "right_answer": 3 
    },

    {
        "question": "Wie viel ergibt 2+2",
        "answer_1": "123456789", 
        "answer_2": "22",
        "answer_3": "44",
        "answer_4": "4",
        "right_answer": 4 
    },
    
    {
        "question": "Können Kühe fliegen?",
        "answer_1": "Was sind Kühe?", 
        "answer_2": "wahrscheinlich nicht",
        "answer_3": "Ja",
        "answer_4": "klar",
        "right_answer": 2 
    },

    {
        "question": "Freuen Sie sich auf Ihren nächsten Urlaub?",
        "answer_1": "Urlaub ist was für Faulis", 
        "answer_2": "Nein",
        "answer_3": "Erdbeerkuchen",
        "answer_4": "klar",
        "right_answer": 4 
    },
];

let currentQuestion = 0;

let rightQuestions = 0;

function init(){
    document.getElementById("question_amount").innerHTML = questions.length; //Anzahl an Fragen wird berechnet
  
    showQuestion();
}

function showQuestion(){
    if (gameIsOver()) { //wenn die Frage bei der Maximal Zahl angekommen it, wird der Endscreen angezeigt
        showEndscreen()
    
    }else{
//wenn die maximalzahl nicht angezeigt wird, dann wird der Stand in % und die nächste Frage angezeigt
        progressbar()
        updateTONextQuestion()
       }
}


function answer(selection){
    let question = questions[currentQuestion];
    let selectedQuestionNumber = selection.slice(-1); //Der letzte TEil (-1) von der Antwort wird ausgewählt und mit der Antwort vergleichen. (right_answer: bsp. 1)

    let idOfRightAnswer = `answer${question['right_answer']}`;

    if(rightAnswerSelected(selectedQuestionNumber)){
        document.getElementById(selection).parentNode.classList.add('bg-success'); //die richtige Antwort wird grün markiert
        rightQuestions++;
     }else {
        document.getElementById(selection).parentNode.classList.add('bg-danger');//sollte man falsch antworten, wird trotzdem die korrkte Antwort grün markiert
        document.getElementById(idOfRightAnswer).parentNode.classList.add('bg-success');
     }

    document.getElementById('next').disabled = false; //der Button zum weitermachen, wird nach dem klick auf eine Antwort verfügbar
}

function nextQuestion(){
    currentQuestion++;  
    document.getElementById('next').disabled = true; //der Button wird unbrauchbar, bis auf eine Antwort geklickt wird
    resetButtons();
    showQuestion();
    countQuestion();// funktionen werden geladen
}

function resetButtons() {
    document.getElementById('answer1').parentNode.classList.remove('bg-danger')
    document.getElementById('answer1').parentNode.classList.remove('bg-success')
    document.getElementById('answer2').parentNode.classList.remove('bg-danger')
    document.getElementById('answer2').parentNode.classList.remove('bg-success')
    document.getElementById('answer3').parentNode.classList.remove('bg-danger')
    document.getElementById('answer3').parentNode.classList.remove('bg-success')
    document.getElementById('answer4').parentNode.classList.remove('bg-danger')
    document.getElementById('answer4').parentNode.classList.remove('bg-success')
}

function restartQuiz() {
    document.getElementById("questionmark").src = 'img/quiz.png';
    document.getElementById('endScreen').style = 'display: none;'
    document.getElementById('questionBody').style = 'display: "";'

    rightQuestions = 0;
    currentQuestion = 0;//Wert wird überschrieben, damit neu gestartet werden kann
    init()
}

function showEndscreen(){
    document.getElementById('endScreen').style = '';
    document.getElementById('questionBody').style = 'display: none;'
    document.getElementById('questionmark').src = 'img/trophy.jpg';

    document.getElementById("question_amount_winner").innerHTML = questions.length;
    document.getElementById("winnerCount").innerHTML = rightQuestions;

}

function gameIsOver() {
   return currentQuestion >= questions.length;
    
}
function progressbar(){
    let percent = currentQuestion / questions.length;
    percent = Math.round(percent * 100);

    document.getElementById("progress").innerHTML = `${percent} %`;
    document.getElementById("progress").style = `width: ${percent}%;`;
}

function updateTONextQuestion(){
    let question = questions[currentQuestion];
    document.getElementById('count_question').innerHTML = currentQuestion + 1;
    document.getElementById('question_text').innerHTML = question['question'];
    document.getElementById('answer1').innerHTML = question['answer_1'];
    document.getElementById('answer2').innerHTML = question['answer_2'];
    document.getElementById('answer3').innerHTML = question['answer_3'];
    document.getElementById('answer4').innerHTML = question['answer_4'];
}

function rightAnswerSelected(){
    return selectedQuestionNumber == question['right_answer']
}