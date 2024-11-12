const quizQuestions = [
  {
    question: "01.  What is the capital of Japan?",
    choices: ["Beijing", "Seoul", "Tokyo", "Bangkok"],
    answer: "Tokyo",
  },
  {
    question: "02. Which planet is known as the Red Planet?",
    choices: ["Venus", "Mars", "Jupiter", "Saturn"],
    answer: "Mars",
  },
   {
    question: "03. In which year did the Titanic sink?",
    choices: ["1910", "1911", "1912", "1913"],
    answer: "1912",
  },
  {
    question: "04. Who is the author of 'Harry Potter'?",
    choices: ["J.R.R. Tolkien", "J.K. Rowling", "Stephen King", "George R.R. Martin"],
    answer: "J.K. Rowling",
  },
  {
    question: "05. What is the powerhouse of the cell?",
    choices: ["Nucleus", "Ribosome", "Mitochondria", "Golgi apparatus"],
    answer: "Mitochondria",
  },
  {
    question: "06. What is the capital of France?",
    choices: ["Rome", "Paris", "Berlin", "Madrid"],
    answer: "Paris",
  },
  {
    question: "07. Which is the longest river in the world?",
    choices: ["Amazon River", "Nile River", "Yangtze River", "Mississippi River"],
    answer: "Nile River",
  },
  {
    question: "08. What is the tallest mountain in the world?",
    choices: ["Mount Kilimanjaro", "K2", "Mount Everest", "Mount Fuji"],
    answer: "Mount Everest",
  },
  {
    question: "09. Who was the first person to walk on the moon?",
    choices: ["Buzz Aldrin", "Yuri Gagarin", "Michael Collins", "Neil Armstrong"],
    answer: "Neil Armstrong",
  },
  {
    question: "10. What is the smallest planet in our solar system?",
    choices: ["Mars", "Venus", "Mercury", "Pluto"],
    answer: "Mercury",
  },

  // Add more questions as needed
];

const quiz = document.querySelector(".quiz");
const answerEle = document.querySelectorAll(".answer");
const [quizQuestion, option1, option2, option3, option4] =
  document.querySelectorAll(
    "#quizQuestion",
    "#option-1",
    "#option-2",
    "#option-3",
    "#option-4"
  );

const submitBtn = document.querySelector("#submitBtn");
let currentQuiz = 0;
let score = 0;
let submitLast = document.querySelector(".submitLast");
/* let introSection = document.querySelector("#introSection");
let quizSection = document.querySelector("#quizSection");
let startBtn = document.querySelector("#startBtn");
startBtn.addEventListener("click",()=>{
  introSection.style.display = "none";
  quizSection.style.display = "block";
}) */

// Deselect Answer
const deselectedAnswer = () => {
  answerEle.forEach((curAns) => (curAns.checked = false));
};
// Load Quiz
const loadQuiz = () => {
  deselectedAnswer();
  const { question, choices } = quizQuestions[currentQuiz];
  quizQuestion.innerText = question;
  choices.forEach((curOpt, index) => {
    document.querySelector(`#option-${index + 1}`).innerText = curOpt;
  });
};
loadQuiz();

// Get Selected Answer
const getSelectedOption = () => {
  let answerElement = Array.from(answerEle);
  return answerElement.findIndex((curElem) => curElem.checked);
};
submitBtn.addEventListener("click", () => {
  const selectedOptionIndex = getSelectedOption();

  if (
    selectedOptionIndex !== -1 && // Check if an option is selected
    quizQuestions[currentQuiz].choices[selectedOptionIndex] ===
      quizQuestions[currentQuiz].answer
  ) {
    score++;
  } else if (selectedOptionIndex === -1) {
    alert("Please select an answer!");
    return;
  }
  currentQuiz++;

  if (currentQuiz < quizQuestions.length) {
    loadQuiz();
  } else {
    quiz.innerHTML = `<h2>Your Score:<br> ${score}/${quizQuestions.length} Your Correct Answers is ${score}</h2> 
      <button id="submitBtn" onclick="location.reload()">Start again</button>`;
  }
});
