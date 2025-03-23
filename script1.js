document.addEventListener('DOMContentLoaded',()=>{

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
    //   {
    //     question: "Which planet is known as the Red Planet?",
    //     options: ["Earth", "Mars", "Jupiter", "Venus"],
    //     answer: "Mars",
    //   },
    //   {
    //     question: "What is the largest ocean on Earth?",
    //     options: [
    //       "Atlantic Ocean",
    //       "Indian Ocean",
    //       "Arctic Ocean",
    //       "Pacific Ocean",
    //     ],
    //     answer: "Pacific Ocean",
    //   },
    //   {
    //     question: "Who invented the telephone?",
    //     options: [
    //       "Alexander Graham Bell",
    //       "Nikola Tesla",
    //       "Thomas Edison",
    //       "Albert Einstein",
    //     ],
    //     answer: "Alexander Graham Bell",
    //   },
    //   {
    //     question: "Which element is represented by the symbol 'O'?",
    //     options: ["Oxygen", "Gold", "Silver", "Iron"],
    //     answer: "Oxygen",
    //   },
    //   {
    //     question: "Who was the first person to walk on the Moon?",
    //     options: [
    //       "Buzz Aldrin",
    //       "Neil Armstrong",
    //       "Yuri Gagarin",
    //       "Michael Collins",
    //     ],
    //     answer: "Neil Armstrong",
    //   },
    //   {
    //     question: "Which gas do plants absorb from the atmosphere?",
    //     options: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    //     answer: "Carbon Dioxide",
    //   },
    //   {
    //     question: "What is the hardest natural substance on Earth?",
    //     options: ["Gold", "Iron", "Diamond", "Quartz"],
    //     answer: "Diamond",
    //   },
    //   {
    //     question: "What is the currency of Japan?",
    //     options: ["Yuan", "Ringgit", "Yen", "Won"],
    //     answer: "Yen",
    //   },
    ];

    const container = document.getElementById("container");
    const QuestionContaier = document.getElementById("QuestionContaier");
    const move = document.getElementById("move");
    const right = document.getElementById("right");
    const left = document.getElementById("left");
    const result = document.getElementById("result");
    const start = document.getElementById("start");
    const questionText = document.getElementById("questionText");
    const choice = document.getElementById("choice");

    let index=0;
    let score=0;

    start.addEventListener('click',startQuiz)
    right.addEventListener('click',()=>{
        index++;
        if(index<quizQuestions.length){
            showQuestion()
        }
        else{
            choice.classList.add("hidden");
            questionText.textContent=""
            showResult()
            start.textContent="Restart Quiz"
        }
    })



    function startQuiz(){
        start.classList.add('hidden')
        QuestionContaier.classList.remove('hidden')
        result.classList.add("hidden");
        showQuestion()

    }
    function showQuestion(){
        move.classList.add('hidden')
        choice.classList.remove('hidden')
        questionText.textContent=quizQuestions[index].question
        choice.innerHTML=""
        quizQuestions[index].options.forEach(choices => {
            const li=document.createElement('li')
            li.textContent=choices
            li.addEventListener('click',()=>selectAnswer(choices))
            choice.appendChild(li)
        });
    }
    function selectAnswer(choices){
        const correctAnser=quizQuestions[index].answer;
        if(choices===correctAnser){
            score++;
        }
        move.classList.remove('hidden')
    }
    function showResult(){
        result.classList.remove('hidden')
        result.textContent=`${score} out of ${quizQuestions.length}`
        index=0;
        score=0;
        move.classList.add('hidden')
        start.classList.remove("hidden");   
    }
    left.addEventListener('click',()=>{
        index--;
        if(index>=0){
            if(score>0){
                 score--;
            }
            showQuestion();
        }else{
            index=0
        }
    })
})