const quizQuestions = [
  {
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    answer: "Paris",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: [
      "Charles Dickens",
      "William Shakespeare",
      "Mark Twain",
      "Jane Austen",
    ],
    answer: "William Shakespeare",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    answer: "Mars",
  },
  {
    question: "What is the largest ocean on Earth?",
    options: [
      "Atlantic Ocean",
      "Indian Ocean",
      "Arctic Ocean",
      "Pacific Ocean",
    ],
    answer: "Pacific Ocean",
  },
  {
    question: "Who invented the telephone?",
    options: [
      "Alexander Graham Bell",
      "Nikola Tesla",
      "Thomas Edison",
      "Albert Einstein",
    ],
    answer: "Alexander Graham Bell",
  },
  {
    question: "Which element is represented by the symbol 'O'?",
    options: ["Oxygen", "Gold", "Silver", "Iron"],
    answer: "Oxygen",
  },
  {
    question: "Who was the first person to walk on the Moon?",
    options: [
      "Buzz Aldrin",
      "Neil Armstrong",
      "Yuri Gagarin",
      "Michael Collins",
    ],
    answer: "Neil Armstrong",
  },
  {
    question: "Which gas do plants absorb from the atmosphere?",
    options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    answer: "Carbon Dioxide",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    options: ["Gold", "Iron", "Diamond", "Quartz"],
    answer: "Diamond",
  },
  {
    question: "What is the currency of Japan?",
    options: ["Yuan", "Ringgit", "Yen", "Won"],
    answer: "Yen",
  },
];
const move = document.getElementById("move");
const letStart = document.getElementById("letStart");
 const result = document.getElementById("result");
 const QuestionContaier = document.getElementById(
           "QuestionContaier");

let index=0;
let sum=0;
 

const start = document.getElementById("start");
start.addEventListener('click',()=>{
    QuestionContaier.textContent=""
    addQuestion(index)
    start.classList.add("hidden");
    move.removeAttribute("class","hidden")
    result.setAttribute("class", "hidden");
})

function addQuestion(ind){
    const div=document.createElement('div')
    div.textContent = quizQuestions[ind].question
    QuestionContaier.appendChild(div)
    quizQuestions[ind].options.forEach((val)=>{
        const p = document.createElement("p");
        p.textContent = `${val}`
        QuestionContaier.appendChild(p);
       
    })
}

const right=document.getElementById("right")
    right.addEventListener("click",()=>{
        index++;
        if (index<quizQuestions.length) {
            QuestionContaier.textContent = "";
            addQuestion(index);
       } else {
            index=0
            sum=0
            QuestionContaier.textContent = "";
            result.removeAttribute("class","hidden")
            result.textContent=`${sum} out of ${quizQuestions.length}`            
             move.setAttribute("class", "hidden");
             start.classList.toggle("hidden"); 
       }
    })
const left=document.getElementById("left")
    left.addEventListener("click",()=>{
        index--;
        if (index>=0) {
          QuestionContaier.textContent = "";
         addQuestion(index);
       } else {
        index=0
       }
    })